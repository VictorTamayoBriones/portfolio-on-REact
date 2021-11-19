import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax'
import { ProviderProjects } from './context/projectContext'
import { ProviderHeigth } from './context/heightContext';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <ProviderHeigth>
        <ProviderProjects>
          <App />
        </ProviderProjects>
      </ProviderHeigth>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
