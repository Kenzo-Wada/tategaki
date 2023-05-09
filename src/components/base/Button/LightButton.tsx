import { memo } from 'react';

import type { ButtonProps } from '~/components/assets/Button';
import { Button } from '~/components/assets/Button';

const LightButton = memo((props: ButtonProps) => {
  return <Button variant="light" {...props} />;
});

LightButton.displayName = 'LightButton';

export default LightButton;
