import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/eventitem.module.css";

export default function EventItem({ refEvent }) {
    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <Image
                    src={
                        refEvent.image
                            ? refEvent.image
                            : "/images/event-default.png"
                    }
                    width={170}
                    height={100}
                />
            </div>

            <div className={styles.info}>
                <span>
                    {refEvent.date} at {refEvent.time}
                </span>
                <h3>{refEvent.name}</h3>
            </div>

            <div className={styles.link}>
                <Link href={`/events/${refEvent.slug}`}>
                    <p className="btn">Details</p>
                </Link>
            </div>
        </div>
    );
}
