import { ArrowRight } from 'lucide-react';

interface ButtonCardProps {
  id: string;
  title: string;
  onClick: () => void;
}

export default function ButtonCard({ title, onClick }: ButtonCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left overflow-hidden transform hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
      </div>

      <div className="mt-2 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
    </button>
  );
}
