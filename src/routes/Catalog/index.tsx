import './styles.css'

// import CarCard from "../../components/CarCard";
import Header from "../../components/Header";
import SearchBar from '../../components/SearchBar';
import CarCard from '../../components/CarCard';

export default function Catalog() {
  return (
    <>
      <Header />
      <main className='ct-catalog-main'>
        <section id="ct-catalog-section" className='ct-container'>
          
        <div className='ct-search-bar-container'>
          <SearchBar />
        </div>

        <div className='ct-catalog-cards-container'>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />

        </div>

       </section>
      </main>
    </>
  );
}
