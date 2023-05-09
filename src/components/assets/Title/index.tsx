import { Title as MantineTiltle } from '@mantine/core';
import type { TitleProps as MantineTitleProps } from '@mantine/core';
import { memo } from 'react';

export type TitleProps = MantineTitleProps;

export const Title = memo((props: TitleProps) => {
  const { order, ...rest } = props;

  return <MantineTiltle order={order} {...rest} />;
});

Title.displayName = 'Title';
