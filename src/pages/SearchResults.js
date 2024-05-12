import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';
import CardGrid from '../components/CardGrid';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from "../App"


function SearchResults() {
    const { searchQuery } = useParams();

    const [destination, setDestination] = useState({});

    useEffect(() => {
        console.log("SEARCHING")
        fetch(API_BASE_URL + "search/" + searchQuery)
            .then(response => response.json())
            .then(data => { setDestination(data);})
    }, [searchQuery]);

    return (
        <Container>
            <h2 className='text-align-center'>Search Results</h2>
            <CardGrid cardList={destination} />
        </Container>
    )
}

export default SearchResults;
