import styles from "./page.module.css";
import CarouselComponent from "./components/CarouselComponent";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <h2 className="mt-4 ms-3">Science Portal Take Home</h2>
      <div className='padding-container'>
        <CarouselComponent />
      </div>
    </Container>
  );
}


    // <div className={styles.page}>
    //   <main className={styles.main}/>
    //     <h2>Science Portal Take Home</h2>
    //     <div className='padding-container'>
    //     <CarouselComponent />
    //     </div>
    //   <footer className={styles.footer}>
    //   </footer>
    // </div>