import { Event, EventFilter } from 'interfaces';

export const fetchAllEvents = async (): Promise<Event[]> => {
    const response = await fetch('http://localhost:4000/events');
    return response.json();
};

export const fetchFeatureEvents = async (): Promise<Event[]> => {
    const response = await fetch(
        'http://localhost:4000/events?isFeatured=true'
    );
    return response.json();
};

export const fetchEventById = async (id: string): Promise<Event> => {
    const response = await fetch(`http://localhost:4000/events/${id}`);
    return response.json();
};

export const fetchFilteredEvents = async ({
    year,
    month,
}: EventFilter): Promise<Event[]> => {
    const response = await fetch(
        `http://localhost:4000/events?year=${year}&month=${month}`
    );
    return response.json();
};
