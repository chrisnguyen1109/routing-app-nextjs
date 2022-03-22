import Link from 'next/link';
import classes from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <Link href="/event">Browse All Events</Link>
            </nav>
        </header>
    );
};

export default Header;
