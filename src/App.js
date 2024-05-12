import './App.css';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import SearchResults from './pages/SearchResults';
import Footer from "./components/Footer"
import { Container } from 'react-bootstrap';

require('dotenv').config();

export const API_BASE_URL = "https://aairbnb-clone-backend.onrender.com/api/"

console.log("API_BASE_URL**=", API_BASE_URL)

function NotFound() {
  return <h1 className='text-center'>Page not found.</h1>
}

function App() {
  return (
    <>
      <Container>
        <NavBar></NavBar>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search/:searchQuery" element={<SearchResults />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App;
