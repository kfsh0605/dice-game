'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';

interface ThemeRegistryProps {
  children: React.ReactNode;
}

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

const ThemeRegistry: React.FC<ThemeRegistryProps> = ({ children }) => {
  const [cache] = React.useState(() => {
    const emotionCache = createEmotionCache();
    emotionCache.compat = true;
    return emotionCache;
  });

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    if (names.length === 0) return null;

    let styles = '';
    let dataEmotion = cache.key;

    for (const name of names) {
      if (cache.inserted[name] !== true) {
        styles += cache.inserted[name];
        dataEmotion += ` ${name}`;
      }
    }

    return (
      <style
        key={cache.key}
        data-emotion={dataEmotion}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeRegistry;
