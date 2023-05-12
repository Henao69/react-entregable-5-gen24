import React from "react";
import FormNameUser from "../components/Home/FormNameUser";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="home__section">
        <img
          className="home__img"
          src="/PokeImage.svg"
          alt="Imagen que dice Pokedex tematica pokemon"
        />
        <h2 className="home__title">Hi trainer!</h2>
        <p className="home__p">Please give us your name to start</p>
        <FormNameUser />
      </section>
      <footer className="home__footer">
        <img className="home__footer-img" src="/FooterHome.svg" alt="" />
      </footer>
    </div>
  );
};

export default Home;
