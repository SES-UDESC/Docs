// External Imports
import React, { Component } from "react";
// Internal Imports
import Link from "@docusaurus/Link"
// SASS Imports
import "./sass/home.sass";

interface HomeState { }
interface HomeProps { }

class Home extends Component<HomeProps, HomeState>{
    render() {
        return (
            <div className="home__container">
                <h2 className="home__title">
                    Bem vindo(a) à documentação do SESUdesc
                </h2>
                <p className="home__description">
                    Aqui você encontrará informações sobre o nosso projeto 
                </p>
                <Link to="docs" className="button button--primary home__button">Acesse a Documentação</Link>
            </div>
        )
    }
}

export default Home;