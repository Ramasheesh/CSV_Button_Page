# CSV-Based Button Page Application

A modern full-stack web application that dynamically generates interactive button pages from CSV data. Built with React, Vite, Express, and Tailwind CSS.

## Features

- **Dynamic Content**: All button data is loaded from a CSV file
- **REST API**: Express backend with two endpoints for retrieving button data
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Modern UI**: Clean interface with smooth animations and hover effects
- **Type Safety**: Built with TypeScript for better code quality
- **Error Handling**: Comprehensive error states and loading indicators
- **Production Ready**: Optimized build configuration

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icons

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **csv-parser** - CSV file parsing
- **CORS** - Cross-origin resource sharing

## Project Structure

```
.
├── backend/
│   ├── server.js           # Express server with API endpoints
│   ├── data.csv            # CSV data file with button information
│   ├── package.json        # Backend dependencies
│   └── utils/
│       └── csvReader.js    # CSV parsing utility functions
├── src/
│   ├── components/
│   │   └── ButtonCard.tsx  # Reusable button card component
│   ├── pages/
│   │   ├── Home.tsx        # Main page with button grid
│   │   └── Detail.tsx      # Detail page for individual buttons
│   ├── App.tsx             # Main app with routing
│   └── main.tsx            # App entry point
├── .env                    # Environment variables
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or download the source code)

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Running the Application

You need to run both the backend and frontend servers:

#### Terminal 1 - Start the Backend Server

```bash
cd backend
npm start
```

The backend API will run on `http://localhost:3001`

#### Terminal 2 - Start the Frontend Development Server

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Building for Production

Build the frontend for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## API Endpoints

### GET /api/buttons

Returns all buttons from the CSV file.

**Response:**
```json
[
  {
    "id": "1",
    "title": "Google",
    "description": "Search the world's information...",
    "link": "https://google.com"
  }
]
```

### GET /api/button/:id

Returns a single button by ID.

**Parameters:**
- `id` - The button ID

**Response:**
```json
{
  "id": "1",
  "title": "Google",
  "description": "Search the world's information...",
  "link": "https://google.com"
}
```

**Error Response (404):**
```json
{
  "error": "Button not found",
  "message": "No button found with ID: 999"
}
```

## CSV Data Format

The `backend/data.csv` file should follow this format:

```csv
id,title,description,link
1,Button Title,Button description text,https://example.com
2,Another Button,Another description,https://example2.com
```

**Required Columns:**
- `id` - Unique identifier (string or number)
- `title` - Button display title
- `description` - Detailed description
- `link` - External URL

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001
```

## Customization

### Adding New Buttons

1. Open `backend/data.csv`
2. Add a new row with the required columns
3. Save the file
4. Restart the backend server

### Changing Colors

The application uses Tailwind CSS. To change the primary color:

1. Open the component files (`Home.tsx`, `Detail.tsx`, etc.)
2. Replace `blue-` classes with your preferred color (e.g., `green-`, `purple-`, `red-`)

### Port Configuration

**Backend Port:**
Edit `backend/server.js`:
```javascript
const PORT = process.env.PORT || 3001;
```

**Frontend API URL:**
Update `.env`:
```env
VITE_API_URL=http://localhost:YOUR_PORT
```

## Features Implemented

- ✅ Express server with CORS
- ✅ CSV parsing with error handling
- ✅ Two REST API endpoints
- ✅ React Router for navigation
- ✅ Responsive grid layout
- ✅ Loading states
- ✅ Error handling and retry logic
- ✅ Smooth animations and transitions
- ✅ Mobile-first design
- ✅ TypeScript support
- ✅ Production build configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Commands

```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking

# Backend
cd backend
npm start            # Start Express server
```

## Troubleshooting

### Backend not connecting

- Ensure the backend server is running on port 3001
- Check that `VITE_API_URL` in `.env` matches the backend URL
- Verify CORS is enabled in `backend/server.js`

### CSV not loading

- Verify `backend/data.csv` exists and is properly formatted
- Check the backend console for error messages
- Ensure all required columns are present in the CSV

### Build errors

- Delete `node_modules` and run `npm install` again
- Clear the build cache: `rm -rf dist`
- Check for TypeScript errors: `npm run typecheck`

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
