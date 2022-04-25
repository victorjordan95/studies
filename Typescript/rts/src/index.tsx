import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <div>Hello World</div>;
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);