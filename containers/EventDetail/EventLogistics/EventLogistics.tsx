import AddressIcon from 'components/Icons/AddressIcon';
import DateIcon from 'components/Icons/DateIcon';
import { Event } from 'interfaces';
import Image from 'next/image';
import formattedDate from 'utils/formattedDate';
import classes from './EventLogistics.module.css';

interface EventLogisticsProps {
    event: Event;
}

const EventLogistics: React.FC<EventLogisticsProps> = ({ event }) => {
    const { date, location, image, title } = event;

    const formatDate = formattedDate(date);

    const formattedAddress = location.replace(', ', '\n');

    return (
        <section className={classes.logistics}>
            <div className={classes['image-container']}>
                <Image
                    src={`/${image}`}
                    alt={title}
                    className={classes.image}
                    layout="fill"
                />
            </div>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <span className={classes.icon}>
                        <DateIcon />
                    </span>
                    <span className={classes.content}>
                        {<time>{formatDate}</time>}
                    </span>
                </li>
                <li className={classes.item}>
                    <span className={classes.icon}>
                        <AddressIcon />
                    </span>
                    <span className={classes.content}>
                        {<time>{formattedAddress}</time>}
                    </span>
                </li>
            </ul>
        </section>
    );
};

export default EventLogistics;
