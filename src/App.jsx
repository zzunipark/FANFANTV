import GlobalStyle from "./components/public/GlobalStyle";
import { MainPage, LoginPage, SignupPage, ForgotPasswordPage, NotFoundPage, TermsOfServicePage, PrivacyPolicyPage, RefuseCollectEmailPage, ServiceStatusPage } from "./components/pages/index";
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
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/refuse-collect-email" element={<RefuseCollectEmailPage />} />
        <Route path="/service-status" element={<ServiceStatusPage />} />
      </Routes>
    </Router>
  );
}

export default App;
