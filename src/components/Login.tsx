import React, { useState } from 'react';
import { X, User, Lock } from 'lucide-react';

interface LoginPageProps {
  onClose: () => void;
  onLoginSuccess?: (admin: any) => void;
}

export function LoginPage({ onClose, onLoginSuccess }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      const data = await response.json();
    console.log(data);
    localStorage.setItem("authData", JSON.stringify(data));

    // Optionally, handle navigation or further logic after successful login
    alert("Login successful!");
      if (!response.ok) {
        throw new Error("something went wrong,check your identity");
      }

      
      
      if (onLoginSuccess) {
        onLoginSuccess(data.admin);
      }

      onClose();
    } catch (err) {
      console.error('Login failed,check your identity');

      if (err instanceof Error) {
        setError('Login failed,check your identity');
      } else if (typeof err === 'object' && err !== null) {
        setError("Login failed,check your identity");
      } else {
        setError('An unexpected error occurred during login');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-8 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-75"></div>
          <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 opacity-75"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full filter blur-2xl opacity-20 animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-pink-500 rounded-full filter blur-xl opacity-20 animate-ping"></div>
        </div>
        <div className="relative z-10">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Close login"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Cosmic Access</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Cosmic Identity (Email)
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent pl-10"
                  required
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Stellar Key
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent pl-10"
                  required
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            {error && (
              <div className="text-red-400 text-sm" role="alert">{error}</div>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Launching...' : 'Launch'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

