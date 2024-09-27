
import './App.css';
import Bestproducts from './components/bestproducts';
import Bestshops from './components/bestshops';
import Brands from './components/brands';
import Categories from './components/categories';
import Details from './components/details';
import Featuredproducts from './components/featuredproducts';
import Footer from './components/footer';
import Header from './components/header';
import Header2 from './components/header2';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Reviews from './components/reviews';
import Store from './components/store';
import Top from './components/top';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Hero/>
      <Details/>
      <Categories/>
      <Bestproducts/>
      <Store/>
      <Top/>
      <Bestshops/>
      <Featuredproducts/>
      <Reviews/>
      <Brands/>
      <Footer/>
      <Header2/>
      
    </div>
  );
}

export default App;
