import Layout from "@/components/layout";
import EventItem from "@/components/eventitem";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map((event) => (
                <EventItem key={event.id} refEvent={event} />
            ))}
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();

    return {
        props: { events: events.slice(0, 3) },
        revalidate: 1,
    };
}
