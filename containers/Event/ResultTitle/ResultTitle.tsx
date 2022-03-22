import Button from 'components/Button/Button';
import formattedDate from 'utils/formattedDate';
import classes from './ResultTitle.module.css';

interface ResultTitleProps {
    date: string;
}

const ResultTitle: React.FC<ResultTitleProps> = ({ date }) => {
    const formatDate = formattedDate(date);

    return (
        <section className={classes.title}>
            <h1>Events in {formatDate}</h1>
            <Button link="/event">Show all events</Button>
        </section>
    );
};

export default ResultTitle;
