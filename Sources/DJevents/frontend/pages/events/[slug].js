import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/event.module.css";

export default function EventPage({ pevent }) {
    const deleteEvent = (e) => {
        console.log("delete event");
    };

    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${pevent.id}`}>
                        <span>
                            <FaPencilAlt /> Edit Event
                        </span>
                    </Link>
                    <a href="#" className={styles.delete} onclick={deleteEvent}>
                        <FaTimes /> Delete Event
                    </a>
                </div>

                <span>
                    {pevent.date} at {pevent.time}
                </span>
                <h1>{pevent.name}</h1>
                {pevent.image && (
                    <div className={styles.image}>
                        <Image src={pevent.image} width={960} height={600} />
                    </div>
                )}

                <h3>Performers:</h3>
                <p>{pevent.performers}</p>
                <h3>Description:</h3>
                <p>{pevent.description}</p>
                <h3>Venue: {pevent.venue}</h3>
                <p>{pevent.address}</p>

                <Link href="/events">
                    <p className={styles.back}>{"<"} Go Back</p>
                </Link>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();

    const paths = events.map((e) => ({
        params: { slug: e.slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(`${API_URL}/api/events/${slug}`);
    const events = await res.json();

    return {
        props: {
            pevent: events[0],
        },
        revalidate: 1,
    };
}
