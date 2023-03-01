import styles from './Header.module.css';

export function Header()
{
    return (
        <header className={styles.header}>
            <img width='50' src='../src/assets/logo.png' />
        </header>
    );
}