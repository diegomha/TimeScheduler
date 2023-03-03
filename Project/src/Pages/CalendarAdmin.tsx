import { Container, Nav, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Calendar } from "../components/Calendar";
import styles from './CalendarAdmin.module.css';

export function CalendarAdmin()
{
    let { company } = useParams();
    if (company == undefined)
        company = '';

    return (
        <article className={styles.CalendarAdmin} >
            <div>
                <Navbar expand="lg">
                    <Container fluid>
                        <Nav className="me-auto">
                            <Nav.Link href={`/calendar${company == '' ? '' : '/' + company}`}>Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            
            <div><Calendar /></div>
        </article>
    );
}