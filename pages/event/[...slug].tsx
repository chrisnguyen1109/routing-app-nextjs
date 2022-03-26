import { fetchFilteredEvents } from 'apiClient/eventApi';
import Button from 'components/Button/Button';
import ErrorAlert from 'components/ErrorAlert/ErrorAlert';
import EventList from 'containers/Event/EventList/EventList';
import ResultTitle from 'containers/Event/ResultTitle/ResultTitle';
import { Event } from 'interfaces';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

interface FilterEventPageProps {
    filteredEvents: Event[];
    date: {
        numYear: number;
        numMonth: number;
    };
}

const FilterEventPage: NextPage<FilterEventPageProps> = ({
    filteredEvents,
    date: { numMonth, numYear },
}) => {
    const pageHeadData = (
        <Head>
            <title>Filtered Events</title>
            <meta
                name="description"
                content={`All events for ${numMonth}/${numYear}.`}
            />
        </Head>
    );

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                {pageHeadData}
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/event">Show All Events</Button>
                </div>
            </>
        );
    }

    const date = new Date(numYear, numMonth - 1).toString();

    return (
        <>
            {pageHeadData}
            <ResultTitle date={date} />
            <EventList events={filteredEvents} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<
    FilterEventPageProps
> = async ctx => {
    const filterData = ctx.params?.slug as string[];

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        (numYear !== 2021 && numYear !== 2022) ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return {
            notFound: true,
        };
    }

    const filteredEvents = await fetchFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    return {
        props: {
            filteredEvents,
            date: {
                numYear,
                numMonth,
            },
        },
    };
};

export default FilterEventPage;
