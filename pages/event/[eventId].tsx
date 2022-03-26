import { fetchEventById, fetchFeatureEvents } from 'apiClient/eventApi';
import EventComment from 'containers/EventDetail/EventComment/EventComment';
import EventContent from 'containers/EventDetail/EventContent/EventContent';
import EventLogistics from 'containers/EventDetail/EventLogistics/EventLogistics';
import EventSummary from 'containers/EventDetail/EventSummary/EventSummary';
import { Event } from 'interfaces';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface EventDetailPageProps {
    event: Event;
}

const EventDetailPage: NextPage<EventDetailPageProps> = ({ event }) => {
    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics event={event} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <EventComment eventId={event.id} />
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const events = await fetchFeatureEvents();

    const paths = events.map(event => ({ params: { eventId: event.id } }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps<
    EventDetailPageProps
> = async ctx => {
    const eventId = ctx.params?.eventId as string;

    const event = await fetchEventById(eventId);

    if (!event.id) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            event,
        },
        revalidate: 30,
    };
};

export default EventDetailPage;
