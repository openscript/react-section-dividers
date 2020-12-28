import { ElementType, PropsWithChildren } from 'react';

export type DividerSettings<S> = {
  height: string;
} & S;

export type Divider<S> = {
  as?: ElementType;
  divider: {
    top?: DividerSettings<S>;
    bottom?: DividerSettings<S>;
  };
};

export type DividerProps<P = unknown, S = unknown> = PropsWithChildren<P & Divider<S>>;
