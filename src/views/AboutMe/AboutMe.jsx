import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/SobreMim/SobreMim";
import Experiencia from '../../components/Experiencia/Experiencia';
import Footer from "../../components/Footer/Footer";

function AboutMe() {
    return (
        <>
            <Header />
            <About />
            <Experiencia />
            <Footer />
        </>
    )
}

export default AboutMe