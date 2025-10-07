import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';
import type { FirebaseError } from 'firebase/app';
import { auth, googleProvider } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/useToast';

interface GoogleSignInButtonProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  disabled?: boolean;
}

const GoogleIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  onSuccess,
  onError,
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    
    try {
      const userCredential: UserCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      
      // Log user info to console
      console.log('Google sign-in successful:', {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL
      });
      
      toast.success('Successfully signed in with Google!');
      onSuccess?.();
    } catch (error) {
      const firebaseError = error as FirebaseError;
      let errorMessage = 'Failed to sign in with Google';
      
      switch (firebaseError.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Sign-in popup was closed. Please try again.';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Popup was blocked by your browser. Please allow popups and try again.';
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = 'Sign-in was cancelled. Please try again.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection and try again.';
          break;
        case 'auth/account-exists-with-different-credential':
          errorMessage = 'An account already exists with this email using a different sign-in method.';
          break;
        default:
          errorMessage = firebaseError.message || 'Failed to sign in with Google';
      }
      
      toast.error(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleGoogleSignIn}
      disabled={disabled || isLoading}
      className="w-full"
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
          Signing in...
        </div>
      ) : (
        <>
          <GoogleIcon />
          Continue with Google
        </>
      )}
    </Button>
  );
};
