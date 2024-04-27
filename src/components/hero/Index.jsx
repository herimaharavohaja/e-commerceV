import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Découvrez notre nouvelle collection
            <br className="hidden lg:inline-block" />
            de vêtements tendance
          </h1>
          <p className="mb-8 leading-relaxed">
            Trouvez les dernières tendances en matière de vêtements, allant des
            basiques aux pièces uniques.
          </p>
          <div className="flex justify-center">
           <Link to={'/products'}>
           <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Voir la collection
            </button>
           </Link> 
           <Link to={'/products'}>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Voir les promotions
            </button>
            </Link> 
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://media.istockphoto.com/id/1475244066/photo/female-figures-in-stylish-knitting-pink-blue-set-sweater-pants-and-cardigans.jpg?s=1024x1024&w=is&k=20&c=DAOJhAN8zIR6l_ujCTfVFY5qO4aVp717vJndOiM62Tc="
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
