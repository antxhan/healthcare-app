import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.jsx';
import Messages from './pages/messages/Messages.jsx';
import Layout from './Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
