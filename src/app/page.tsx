import styles from "./page.module.css";
import CarouselComponent from "./components/CarouselComponent";
export default function Home() {
  return (
    <div>
      <h2>Science Portal Take Home</h2>
      <div className='padding-container'>
      <CarouselComponent />
      </div>
      </div>

    // <div className={styles.page}>
    //   <main className={styles.main}/>
    //     <h2>Science Portal Take Home</h2>
    //     <div className='padding-container'>
    //     <CarouselComponent />
    //     </div>
    //   <footer className={styles.footer}>
    //   </footer>
    // </div>
  );
}
