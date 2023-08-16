import type { Metadata } from 'next';
import styles from './styles.module.css';

export const metadata: Metadata = {
    title: "About",
    description: "Created by Mateen"
}

export default function AboutLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <h1>About nav</h1>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
