// pages/_app.js
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Google Analytics ID (free signup karo)
const GA_ID = 'G-XXXXXXXXXX'; // अपना GA ID डालो

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Google Analytics Setup
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
    
    const handleRouteChange = (url) => {
      gtag('config', GA_ID, { page_path: url });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);
  
  return <Component {...pageProps} />;
}
