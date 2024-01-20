import React from 'react'
import EventCard from './event-card';
import { getEvents } from '@/lib/server-utils';
import PaginationControls from './pagination-controls';

type EventsListProps = {
    city: string;
    page?: number;
};

export default async function EventsList({
    city,
    page = 1
}: EventsListProps) {
    const { events, totalCount } = await getEvents(city, page);
    const previousPath = (page > 1) ? `/events/${city}?page=${page - 1}` : '';
    const nextPath = (totalCount > 6 * page) ? `/events/${city}?page=${page + 1}` : '';

    return (
        <section className='max-w-[68.75rem] flex flex-wrap gap-10 px-[1.25rem]'>
            {
                events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))
            }

            <PaginationControls previousPath={previousPath} nextPath={nextPath} />
        </section>
    );
}
