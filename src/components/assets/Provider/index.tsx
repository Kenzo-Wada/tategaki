import { MantineProvider } from '@mantine/core';
import type { MantineProviderProps } from '@mantine/core';

type ProviderProps = MantineProviderProps;

const Provider = (props: ProviderProps) => {
  return <MantineProvider {...props} />;
};

Provider.displayName = 'Provider';

export default Provider;
