import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const Auth: React.FC = () => {
  const { currentUser, signInWithGoogle, signOut } = useAuth();

  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-[#001a00] border border-[#00ff00]/20 rounded-xl shadow-lg">
      {currentUser ? (
        <div className="flex flex-col items-center space-y-4">
          <img 
            src={currentUser.photoURL || ''} 
            alt="Profile" 
            className="w-16 h-16 rounded-full border-2 border-[#00ff00]"
          />
          <div className="text-center">
            <p className="font-bold">{currentUser.displayName}</p>
            <p className="text-sm text-gray-400">{currentUser.email}</p>
          </div>
          <button
            onClick={signOut}
            className="bg-transparent border-2 border-[#00ff00] text-[#00ff00] px-6 py-2 rounded-full hover:bg-[#00ff00] hover:text-black transition-all"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-bold">Join The Revolution</h2>
          <p className="text-sm text-gray-400 text-center">
            Sign in to access exclusive alien technology and updates
          </p>
          <button
            onClick={signInWithGoogle}
            className="flex items-center space-x-2 bg-[#00ff00] text-black px-6 py-2 rounded-full hover:bg-[#00cc00] transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
        </div>
      )}
    </div>
  );
};