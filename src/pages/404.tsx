import { memo } from 'react';

import Center from '~/components/assets/Center';
import Stack from '~/components/assets/Stack';
import SubtleButton from '~/components/base/Button/SubtleButton';
import H2 from '~/components/base/Title/H2';
import { createStyles, rem } from '~/lib/mantine/core';

const useStyles = createStyles((theme) => ({
  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },
}));

const PageNotFound = memo(() => {
  const { classes } = useStyles();

  return (
    <Center>
      <Stack>
        <div className={classes.label}>404</div>
        <H2>ページが見つかりませんでした...</H2>
        <SubtleButton>ホームに戻る</SubtleButton>
      </Stack>
    </Center>
  );
});

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
