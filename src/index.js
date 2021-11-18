import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax'
import { ProviderProjects } from './context/projectContext'

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <ProviderProjects>
        <App />
      </ProviderProjects>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
