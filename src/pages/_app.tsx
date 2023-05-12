import { Notifications } from '@mantine/notifications';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import Provider from '~/components/assets/Provider';
import BaseAppShell from '~/components/base/AppShell';
import theme from '~/theme/theme';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider withGlobalStyles withNormalizeCSS theme={theme}>
        <Notifications />
        <BaseAppShell>
          <Component {...pageProps} />
        </BaseAppShell>
      </Provider>
    </SessionProvider>
  );
}
