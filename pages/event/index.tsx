import { fetchAllEvents } from 'apiClient/eventApi';
import EventList from 'containers/Event/EventList/EventList';
import EventSearch from 'containers/Event/EventSearch/EventSearch';
import { AvailbleMonth, AvailbleYear, Event } from 'interfaces';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface EventPageProps {
    events: Event[];
}

const EventPage: NextPage<EventPageProps> = ({ events }) => {
    const router = useRouter();

    const searchSubmitHandler = (year: AvailbleYear, month: AvailbleMonth) => {
        router.push(`/event/${year}/${month}`);
    };

    return (
        <>
            <Head>
                <title>NextJS Events</title>
                <meta
                    name="description"
                    content="Find a lot of great events that allow you to evolve..."
                />
            </Head>
            <EventSearch onSearchSubmit={searchSubmitHandler} />
            <EventList events={events} />
        </>
    );
};

export const getStaticProps: GetStaticProps<EventPageProps> = async () => {
    const events = await fetchAllEvents();

    return {
        props: {
            events,
        },
        revalidate: 60,
    };
};

export default EventPage;
