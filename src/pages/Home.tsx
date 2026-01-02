import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle } from 'lucide-react';
import ButtonCard from '../components/ButtonCard';

interface Button {
  id: string;
  title: string;
  description: string;
  link: string;
}

export default function Home() {
  const [buttons, setButtons] = useState<Button[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchButtons();
  }, []);

  const fetchButtons = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/api/buttons`);

      if (!response.ok) {
        throw new Error('Failed to fetch buttons');
      }

      const data = await response.json();
      setButtons(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading buttons...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Error Loading Buttons
          </h2>
          <p className="text-gray-600 text-center mb-6">{error}</p>
          <button
            onClick={fetchButtons}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explore Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any button below to learn more about popular web platforms and tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {buttons.map((button) => (
            <ButtonCard
              key={button.id}
              id={button.id}
              title={button.title}
              onClick={() => handleButtonClick(button.id)}
            />
          ))}
        </div>

        {buttons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No buttons available</p>
          </div>
        )}
      </div>
    </div>
  );
}
