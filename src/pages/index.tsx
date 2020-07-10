// External Imports
import React, { Component } from "react";
import Layout from "@theme/Layout";
// Internal Imports
import Home from "../components/home/home"
// SASS Imports
import "./sass/index.sass";

class Index extends Component {
    render() {
        return (
            <Layout>
                <main className="main__container">
                    <Home />
                </main>
            </Layout>
        )
    }
}

export default Index
