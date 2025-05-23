
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/700.css";


export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Unbounded', sans-serif` },
        body: { value: `'Poppins', sans-serif` },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
          <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);

