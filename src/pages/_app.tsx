import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Suspense } from 'react';

import Provider from '~/components/assets/Provider';
import BaseAppShell from '~/components/base/AppShell';
import theme from '~/theme/theme';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider withGlobalStyles withNormalizeCSS theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <BaseAppShell>
            <Component {...pageProps} />
          </BaseAppShell>
        </Suspense>
      </Provider>
    </SessionProvider>
  );
}
