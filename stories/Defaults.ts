import { css } from '@emotion/core';

export const defaultColors = {
  primary: '#b4c4e1',
  secondary: '#6e94db'
};

export const defaultSizes = {
  height: '100px'
};

export const defaultStyles = {
  demonstrationSection: css`
    height: ${defaultSizes.height};
    background-color: ${defaultColors.secondary};
  `
};
