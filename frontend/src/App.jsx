import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [message, setMessage] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [version, setVersion] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Fetch message from Spring Boot backend
  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/hello');
      setMessage(response.data.text);
      setTimestamp(response.data.timestamp);
      setVersion(response.data.version);
    } catch (err) {
      setError('Failed to connect to Spring Boot backend. Make sure it\'s running on port 8080.');
      console.error('Error fetching message:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPersonalizedMessage = async () => {
    if (!name.trim()) return;
    
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`/api/hello/${name}`);
      setMessage(response.data.text);
      setTimestamp(response.data.timestamp);
      setVersion(response.data.version);
    } catch (err) {
      setError('Failed to fetch personalized message.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPersonalizedMessage();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <div 
          className="inline-block transition-transform duration-300 mb-8"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mb-6 tracking-tight">
            Full Stack App
          </h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
          </div>
        </div>

        {/* Backend Response Card */}
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-slate-700">
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
            </div>
          ) : error ? (
            <div className="text-red-400 text-lg">
              <p className="mb-2">⚠️ {error}</p>
              <button 
                onClick={fetchMessage}
                className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
              >
                Retry
              </button>
            </div>
          ) : (
            <div>
              <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold mb-4">
                {message}
              </p>
              <div className="text-slate-400 text-sm space-y-1">
                <p>🕐 Timestamp: {timestamp}</p>
                <p>📦 API Version: {version}</p>
                <p>🔗 Backend: Spring Boot (Port 8080)</p>
                <p>⚛️ Frontend: React (Port 3000)</p>
              </div>
            </div>
          )}
        </div>

        {/* Personalized Message Form */}
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
          <h2 className="text-2xl text-slate-200 font-semibold mb-4">Get a Personalized Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="flex-1 px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            />
            <button
              type="submit"
              disabled={!name.trim() || loading}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get Message
            </button>
          </form>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-4">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
}
