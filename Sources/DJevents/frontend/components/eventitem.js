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
        </div>
    );
}
