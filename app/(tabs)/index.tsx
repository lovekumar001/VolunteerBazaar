import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack_Navigation from './Main/stack_navigation';
import SplashScreen from './SplashScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay for splash screen

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
      <Stack_Navigation />
  );
}
