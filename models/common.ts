import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type LayoutProps = React.FC<{ children: ReactNode }>;

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    Layout?: LayoutProps;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export type AvailbleYear = '2021' | '2022';

export type AvailbleMonth =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';
