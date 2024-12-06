import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter here
import App from './App';
import './index.css'; 

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>  {/* Wrap the entire app with Router */}
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
