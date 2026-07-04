"use client"

import { useState } from 'react';
import Loader from './loader';
import SmoothScroll from "./smoothScroll";
import "./i18n/i18n";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <SmoothScroll>
      <html lang="en">
        <head></head>
        <body>
          {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
          {children}
          </body>
      </html>
    </SmoothScroll>
  );
}