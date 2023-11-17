var pages = [
    { name: "[자막뉴스] 누워서 간다던 공항철도 '지옥철'로 돌변한 이유 (MBC뉴스) - MBCNEWS", url: "https://youtu.be/jZ-FRTGX7_I" },
    { name: "정국 (Jung Kook) 'Seven (feat. Latto)' Official MV - Hype Labels", url: "https://youtu.be/QU9c0053UAU" },
    { name: "야 체육복 있는 사람 - 숏박스", url: "https://youtu.be/QS8O1-fXchg" },
    { name: "SNL 코리아 시즌4 | 정우 편 하이라이트 | MZ오피스 | 쿠팡플레이 | 쿠팡 - 쿠팡플레이 Coupang Play", url: "https://youtu.be/VfG4PKpG1sw" },
    { name: "조장 하실 분 있나요? - 너덜트", url: "https://youtu.be/80N0U45Dfz0" },
    { name: "예술고 학생 사이 숨은 일반고 출신 아이돌 찾기 (feat. NMIXX 해원)｜PIXID - PIXID", url: "https://youtu.be/1KGDNa7vQYU" },
];

function submitSearch(event) {
    event.preventDefault();

    var searchInput = document.getElementById("search");
    var searchTerm = searchInput.value;

    var pageUrl = getPageUrl(searchTerm);
    if (pageUrl) {
        window.location.href = pageUrl;
    }

    searchInput.value = "";
}

function handleInput(event) {
    var searchInput = event.target;
    var searchTerm = searchInput.value;

    var autocompleteResults = document.getElementById("autocomplete-results");

    var autocompletePages = getAutocompletePages(searchTerm);

    autocompleteResults.innerHTML = "";

    autocompletePages.forEach(function (page) {
        var resultItem = document.createElement("div");
        resultItem.textContent = page.name;
        resultItem.classList.add("result-item");

        resultItem.addEventListener("click", function () {
            window.location.href = page.url;
        });

        autocompleteResults.appendChild(resultItem);
    });

    if (autocompletePages.length === 0) {
        var noResultsItem = document.createElement("div");
        noResultsItem.textContent = "검색 결과가 없습니다.";
        noResultsItem.classList.add("no-results-item");

        autocompleteResults.appendChild(noResultsItem);
    }

    if (searchTerm.trim() !== "") {
        autocompleteResults.classList.add("show");
    } else {
        autocompleteResults.classList.remove("show");
    }
}

function getAutocompletePages(searchTerm) {
    var autocompletePages = [];

    pages.forEach(function (page) {
        if (page.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            autocompletePages.push(page);
        }
    });

    return autocompletePages;
}

document.getElementById("search").addEventListener("input", handleInput);
document.getElementById("search-form").addEventListener("submit", submitSearch);
