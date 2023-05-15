import { Tabs as MantineTabs } from '@mantine/core';
import type { TabsPanelProps as MantineTabsPanelProps } from '@mantine/core';
import { memo } from 'react';

type TabsPanelProps = MantineTabsPanelProps;

const TabsPanel = memo((props: TabsPanelProps) => {
  return <MantineTabs.Panel {...props} />;
});

TabsPanel.displayName = 'TabsPanel';

export default TabsPanel;
