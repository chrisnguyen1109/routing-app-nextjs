import Button from 'components/Button/Button';
import { AvailbleMonth, AvailbleYear } from 'interfaces';
import { FormEvent, useRef } from 'react';
import { monthOptions, yearOptions } from 'utils/filterOptions';
import classes from './EventSearch.module.css';

interface EventSearchProps {
    onSearchSubmit: (year: AvailbleYear, month: AvailbleMonth) => void;
}

interface OptionFormat {
    value: string;
    label: string;
}

const optionDisplay = (options: OptionFormat[]) => {
    return options.map(({ value, label }) => (
        <option key={value} value={value}>
            {label}
        </option>
    ));
};

const EventSearch: React.FC<EventSearchProps> = ({ onSearchSubmit }) => {
    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!yearInputRef.current?.value || !monthInputRef.current?.value) {
            return;
        }

        const selectedYear = yearInputRef.current.value as AvailbleYear;
        const selectedMonth = monthInputRef.current.value as AvailbleMonth;

        onSearchSubmit(selectedYear, selectedMonth);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        {optionDisplay(yearOptions)}
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        {optionDisplay(monthOptions)}
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
};

export default EventSearch;
