import MainSlide from "./components/MainSlide";
import GridComponent from "./components/GridComponent";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <h2 className="mt-4">Science Portal Take Home</h2>
      <div className='padding-container'>
        <MainSlide />
        <GridComponent />
      </div>
    </Container>
  );
}