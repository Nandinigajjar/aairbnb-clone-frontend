import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';
import CardGrid from '../components/CardGrid';
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from "../App"

function Home() {
    const [destinations, setDestinations] = useState({});

    useEffect(() => {
        fetch(API_BASE_URL + "destinations/")
            .then(response => response.json())
            .then(data => {setDestinations(data); console.log(data)})
    }, []);

    return (
        <Container>
            <CardGrid cardList={destinations} />
            <h2>Past experiences</h2>
            <CardGrid cardList={destinations} />
        </Container>
    )
}

export default Home;
