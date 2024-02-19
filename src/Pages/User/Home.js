import React from 'react';
import './Home.css';
import Products from './Products';
import Navbar from './components/Navbar';
import Slider from './Slider';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* list products */}
      <Products />
    </div>

  );
};

export default Home;