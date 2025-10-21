const API_BASE_URL =
	process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const TOKEN_KEY = "fanfantv_token";
const USER_KEY = "fanfantv_user";

export const setAuthToken = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = () => {
	return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
	localStorage.removeItem(TOKEN_KEY);
	localStorage.removeItem(USER_KEY);
};

export const setUser = (user) => {
	localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = () => {
	const user = localStorage.getItem(USER_KEY);
	return user ? JSON.parse(user) : null;
};

const fetchAPI = async (endpoint, options = {}) => {
	const token = getAuthToken();

	const headers = {
		...options.headers,
	};

	if (!(options.body instanceof FormData)) {
		headers["Content-Type"] = "application/json";
	}

	if (token) {
		headers["Authorization"] = `Bearer ${token}`;
	}

	const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		...options,
		headers,
	});

	const data = await response.json();

	if (!response.ok) {
		const error = new Error(
			data.message || "요청 처리 중 오류가 발생했습니다."
		);
		error.status = response.status;
		error.code = data.code;
		throw error;
	}

	return data;
};

export const authAPI = {
	signup: async (email, password) => {
		const data = await fetchAPI("/auth/signup", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		});

		if (data.token) {
			setAuthToken(data.token);
			setUser(data.user);
		}

		return data;
	},

	login: async (email, password) => {
		const data = await fetchAPI("/auth/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		});

		if (data.token) {
			setAuthToken(data.token);
			setUser(data.user);
		}

		return data;
	},

	logout: () => {
		removeAuthToken();
	},

	resetPassword: async (email) => {
		return await fetchAPI("/auth/reset-password", {
			method: "POST",
			body: JSON.stringify({ email }),
		});
	},

	me: async () => {
		return await fetchAPI("/auth/me");
	},

	isLoggedIn: () => {
		return !!getAuthToken();
	},

	getCurrentUser: () => {
		return getUser();
	},
};

export const imageAPI = {
	upload: (file, onProgress) => {
		const formData = new FormData();
		formData.append("image", file);

		const token = getAuthToken();

		if (!token) {
			return {
				promise: Promise.reject({
					status: 401,
					message: "로그인이 필요합니다.",
				}),
				abort: () => {},
			};
		}

		const xhr = new XMLHttpRequest();
		let isAborted = false;

		const abort = () => {
			isAborted = true;
			xhr.abort();
		};

		if (onProgress) {
			xhr.upload.addEventListener("progress", (e) => {
				if (e.lengthComputable) {
					const percentComplete = (e.loaded / e.total) * 100;
					onProgress(percentComplete);
				}
			});
		}

		const promise = new Promise((resolve, reject) => {
			xhr.addEventListener("load", () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					const error = JSON.parse(xhr.responseText);
					reject({
						status: xhr.status,
						message:
							error.message || "업로드 중 오류가 발생했습니다.",
					});
				}
			});

			xhr.addEventListener("error", () => {
				reject({
					status: 0,
					message: "네트워크 오류가 발생했습니다.",
				});
			});

			xhr.addEventListener("abort", () => {
				if (isAborted) {
					reject({
						name: 'AbortError',
						message: 'Upload cancelled',
					});
				}
			});

			xhr.open("POST", `${API_BASE_URL}/images/upload`);
			xhr.setRequestHeader("Authorization", `Bearer ${token}`);
			xhr.send(formData);
		});

		return { promise, abort };
	},

	list: async () => {
		return await fetchAPI("/images/list");
	},

	myImages: async () => {
		return await fetchAPI("/images/my-images");
	},

	getImageUrl: (filename) => {
		return `${API_BASE_URL}/images/${filename}`;
	},

	delete: async (id) => {
		return await fetchAPI(`/images/${id}`, {
			method: "DELETE",
		});
	},

	likeImage: async (id) => {
		return await fetchAPI(`/images/${id}/like`, {
			method: "POST",
		});
	},
};

const api = {
	authAPI,
	imageAPI,
};

export default api;
