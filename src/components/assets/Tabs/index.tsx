import { Tabs as MantineTabs } from '@mantine/core';
import type { TabsProps as MantineTabsProps } from '@mantine/core';
import { memo } from 'react';

type TabsProps = MantineTabsProps;

const Tabs = memo((props: TabsProps) => {
  return <MantineTabs {...props} />;
});

Tabs.displayName = 'Tabs';

export default Tabs;
