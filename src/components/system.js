import system from '@rebass/components';

export const Box = system(
  {
    display: 'block',
  },
  'space'
);

export const Flex = system(
  {
    display: 'flex',
  },
  'space'
);

export const Inner = system(
  {
    display: 'flex',
    width: '100%',
    maxWidth: 740,
    mx: 'auto',
    my: 0,
    px: 16,
    py: 0,
  },
  'space',
  'maxWidth',
  'width'
);
