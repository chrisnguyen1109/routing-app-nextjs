import { Event } from 'models';
import EventItem from '../EventItem/EventItem';
import classes from './EventList.module.css';

interface EventListProps {
    events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
    return (
        <ul className={classes.list}>
            {events.map(event => (
                <EventItem key={event.id} event={event} />
            ))}
        </ul>
    );
};

export default EventList;
