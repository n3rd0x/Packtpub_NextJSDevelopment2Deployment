import Link from "next/link";
import Layout from "@/components/layout";
import EventItem from "@/components/eventitem";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
    return (
        <Layout>
            <h1>Upcomming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map((event) => (
                <EventItem key={event.id} refEvent={event} />
            ))}

            {events.length > 0 && (
                <Link href="/events">
                    <p className="btn-secondary">View All Events</p>
                </Link>
            )}
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();

    return {
        props: { events },
        revalidate: 1,
    };
}
