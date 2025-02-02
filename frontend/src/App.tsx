import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthCallbackPage from "./pages/AuthCallback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
// import {axiosInstance} from "./lib/axios";
function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />} />
        <Route path="/auth-callback" element={<AuthCallbackPage/>} />
      </Routes>
  );
}

export default App;
