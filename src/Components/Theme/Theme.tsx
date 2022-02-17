import { Container } from '@mantine/core';
import "./Theme.css";

function Theme(props: any) {
    return (
        <Container padding={0} id="page-container">
            {props.children}
        </Container>
    )
}

export default Theme;
