import Button from 'components/Button/Button';
import AddressIcon from 'components/Icons/AddressIcon';
import ArrowRightIcon from 'components/Icons/ArrowRightIcon';
import DateIcon from 'components/Icons/DateIcon';
import { Event } from 'models';
import Image from 'next/image';
import formattedDate from 'utils/formattedDate';
import classes from './EventItem.module.css';

interface EventItemProps {
    event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
    const { title, image, date, location, id } = event;

    const formatDate = formattedDate(date);

    const formattedAddress = location.replace(', ', '\n');

    return (
        <li className={classes.item}>
            <div className={classes['image-container']}>
                <Image
                    src={`/${image}`}
                    alt={title}
                    className={classes.image}
                    layout="fill"
                    priority={true}
                />
            </div>
            {/* <img src={'/' + image} alt={title} /> */}
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formatDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/event/${id}`}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
