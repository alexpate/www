import system from '@rebass/components';

const BaseType = system(
  {
    color: 'secondary',
    lineHeight: '1.2em',
  },
  'space',
  'fontWeight',
  'fontSize',
  'lineHeight',
  'color'
);

export const H1 = system({
  extend: BaseType,
  is: 'h1',
  fontWeight: 600,
  fontSize: [6, 6, 7],
  mt: 8,
  mb: 16,
});

export const H2 = system({
  extend: BaseType,
  is: 'h2',
  fontWeight: 700,
  fontSize: [4, 5],
});

export const H3 = system({
  extend: BaseType,
  is: 'h3',
  fontWeight: 500,
  fontSize: [1, 2],
});

export const Text = system({
  extend: BaseType,
  is: 'p',
  fontWeight: 400,
  fontSize: [2, 2, 3],
  lineHeight: '1.8em',
});

export const P = system({
  extend: Text,
  mb: '0.4em',
});
