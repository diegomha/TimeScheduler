import styles from './Footer.module.css';
import { format } from  'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Footer() {
    const yearNow = format(new Date(), "Y", {
        locale: ptBR
    });

    return (
        <footer className={styles.footer}>
            Copyright {yearNow} - Todos os direitos reservados | Política de Privacidade | Direitos do Titular |
        </footer>);
}