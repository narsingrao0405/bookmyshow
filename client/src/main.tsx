import '@ant-design/v5-patch-for-react-19';  // This is a patch for React 19. Remove this line if you are not using React 19
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
