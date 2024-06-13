import React from 'react';
import Cakes from "./Cakes";
import Footer from './Footer';
const Home = () => {
  return (
    <div className="two">
      <div className="bg-image text-center text-white p-8 md:p-16">
        <section className="bg-black bg-opacity-50 p-4 rounded-lg">
          <p className="text-lg md:text-2xl font-semibold">
            Welcome to Nanna's Cakes, where tradition meets taste in every bite! At Nanna's Cakes, we believe that a cake should be more than just a dessert; it should be an experience. Our cakes are crafted with love, using only the finest ingredients to ensure superb quality and exceptional taste. Whether you're celebrating a special occasion or simply indulging in a sweet treat, our cakes are sure to delight your senses. Join the countless satisfied customers who choose Nanna's Cakes for their delectable flavor and the comforting touch of homemade goodness. Discover why our cakes are the perfect choice for your next celebration!
          </p>
        </section>
      </div>
      <div className="p-4 md:p-8">
        <p className="text-2xl md:text-3xl font-bold text-center mb-4 text-red-100 uppercase">Nanna's Cakes 👌</p><hr/>
        <Cakes />
        
      </div>
    </div>
  );
}

export default Home;
