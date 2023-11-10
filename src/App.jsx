import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import GlobalStyle from "./components/public/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
