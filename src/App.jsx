import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import GlobalStyle from "./components/public/GlobalStyle";
import NotfoundPage from "./components/pages/NotfoundPage";
import TermsOfServicePage from "./components/pages/TermsOfServicePage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import RefuseCollectEmail from "./components/pages/RefuseCollectEmail";
import ServiceStatus from "./components/pages/ServiceStatus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/*" element={<NotfoundPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/refuse-collect-email" element={<RefuseCollectEmail />} />
        <Route path="/serice-status" element={<ServiceStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
