import { useState } from "react";
import { useRouter } from 'next/router';
/**
 * 
 * DemoStration of Pre-rendering with client side data fetching and shallow routing
 *  Example cane be viewed on http://localhost:3000/events 
 */

function Eventist({ eventList }) {
    const router = useRouter();
    const [events, setEvents] = useState(eventList);
    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/events?catergory=sports', undefined, { shallow: true });
    };
    return (
        <>
            <button onClick={fetchSportsEvents}>Sports Event</button>
            <h1>List of Events</h1>
            {
                events.map(event => {
                    return (
                        <div key={event.id}>
                            <h2>
                                {event.id} {event.title}{event.date} | {event.category}
                            </h2>
                            <p>{event.description}</p>
                            <hr />
                        </div>
                    );
                })
            }
        </>
    );
}
export default Eventist;

export const getServerSideProps = async (ctx) => {
    const category = ctx?.query?.category;
    const queryString = category ? 'category=sports' : '';
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();

    return {
        props: {
            eventList: data
        }
    };
};