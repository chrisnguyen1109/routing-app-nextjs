import Layout from 'components/Layout/Layout';
import { AppPropsWithLayout } from 'interfaces';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const AppLayout = Component.Layout ?? Layout;

    return (
        <AppLayout>
            <Head>
                <title>Next Events</title>
                <meta name="description" content="NextJS Events" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
            <ToastContainer />
        </AppLayout>
    );
};

export default MyApp;
