import { AvailbleMonth, AvailbleYear } from 'models';

interface YearOption {
    value: AvailbleYear;
    label: string;
}

export const yearOptions: YearOption[] = [
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
];

interface MonthOption {
    value: AvailbleMonth;
    label: string;
}

export const monthOptions: MonthOption[] = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'Septemer' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
];
