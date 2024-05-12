import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import './style.css';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from "../App"
import { useNavigate } from "react-router-dom";


function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [destination, setDestination] = useState({});

    var DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        console.log("API_BASE_URL=", API_BASE_URL)
        fetch(API_BASE_URL + "destinations/" + id)
            .then(response => {
                if (!response.ok) {
                    navigate("/not-found/");
                }
                return response.json();
            })
            .then(data => { 
                setDestination(data);
            }).catch(error => {navigate("/not-found/");})
    }, [id]);

    return (
        <>
            <Container>
                <h3 className='mt-2 fw-semibold'>{destination.title}</h3>
                <Image style={{ maxWidth: "100%", maxHeight: "600px" }}
                    src={destination.image}
                ></Image>

                <Row>
                    <Col>
                        <h2>{destination.place}</h2>
                        <hr />

                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img style={{ height: "48px", width: "48px" }} className='rounded-circle'
                                    src={destination.author_image} alt="..."
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div className='fw-bold'>Hosted by {destination.author_name}</div>
                                <div className='text-justify'>{destination.author_description}</div>
                            </div>
                        </div>
                        <hr />

                        {
                            destination != null && destination.features && destination.features.length > 0 ? (destination.features.map(
                                item => <div className="d-flex my-4" key={item._id}>
                                    <div className="flex-shrink-0">
                                        <i className="bi bi-shield-lock"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className='fw-bold'>{item.title}</div>
                                        <div>{item.description}</div>
                                    </div>
                                </div>
                            )) : [<p/>]
                        }

                        <hr />

                        <div className='text-justify'>
                            {destination.description}
                        </div>

                        <div className='h5'>What you’ll do</div>

                        <div className='text-justify'>
                            {destination.activities_description}

                            <br />
                            <br />

                            <ul>
                                {
                                    destination != null && destination.activities && destination.activities.length > 0 ? (destination.activities.map(
                                        item => <li key={item._id}>{item.description}<br /><br /></li>
                                    )) : [<p></p>]
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem', height: "10rem", borderRadius: "12px" }} className='m-3 border p-3 shadow-lg'>
                            <div className='mx-auto h3 lead fw-normal'><span className='fw-bold'>₹{destination.price}</span> per guest</div>

                            <div className='mx-auto'>Closes {new Date(destination.closes_on).toLocaleString("en-US", DateTimeFormatOptions)}</div>
                            <Button variant="danger mt-4">Request</Button>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Details;
