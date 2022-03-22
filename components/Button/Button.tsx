import Link from 'next/link';
import classes from './Button.module.css';

interface ButtonLink {
    link: string;
    onClick?: null;
}

interface ButtonRaw {
    onClick?: () => void;
    link?: null;
}

type ButtonProps = ButtonLink | ButtonRaw;

const Button: React.FC<ButtonProps> = ({ children, link, onClick }) => {
    if (link) {
        return (
            <Link href={link}>
                <a className={classes.btn}>{children}</a>
            </Link>
        );
    }

    return (
        <button className={classes.btn} onClick={onClick!}>
            {children}
        </button>
    );
};

export default Button;
