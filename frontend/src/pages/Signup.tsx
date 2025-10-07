import React from "react";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "@/components/Auth/SignupForm";
import { GoogleSignInButton } from "@/components/Auth/GoogleSignInButton";

export const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    // Redirect to dashboard or home page after successful authentication
    navigate("/");
  };

  const handleAuthError = (error: string) => {
    console.error("Authentication error:", error);
    // You could show a toast notification here
  };

  const handleSwitchToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo/Brand */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projectory</h1>
          <p className="text-gray-600">Join thousands of project managers</p>
        </div>

        {/* Signup Form */}
        <SignupForm
          onSuccess={handleAuthSuccess}
          onError={handleAuthError}
          onSwitchToLogin={handleSwitchToLogin}
        />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-slate-50 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign In */}
        <GoogleSignInButton
          onSuccess={handleAuthSuccess}
          onError={handleAuthError}
        />
      </div>
    </div>
  );
};
