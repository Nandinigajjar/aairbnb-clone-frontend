import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function CardBox({id, imageUrl, title, body, price }) {
    const navigate = useNavigate();

    const gotToDetailsPage=()=>{
        navigate("/details/" + id)
      }

    return (
        <Card style={{ width: '20rem', height: "20rem", cursor: "pointer" }} className='border border-0 mb-3 rounded-lg'
        onClick={() => gotToDetailsPage()} >
            <Card.Img variant="top" style={{borderRadius: "10px"}}
                src={imageUrl}
            />
            <Card.Text className='text-start'>
                <div className="fw-semibold">{title}</div>
                <div>{body}</div>
                <span className='fw-semibold'>₹{price}</span> per guest
            </Card.Text>
        </Card>
    )
}


function CardGrid({cardList}) {
    return (
        <Row className='row-cols-4'>
            {cardList.length > 0 ? cardList.map(
                item => <CardBox key={item._id} id={item._id} imageUrl={item.image} title={item.title} body={"Hosted by " + item.author_name} price={item.price} />) : [<div className=''>No records are found.</div>]}
        </Row>
    )
}


export default CardGrid;