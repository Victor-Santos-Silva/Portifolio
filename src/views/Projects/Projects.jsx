import "./Projects.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SaintMichel from "../../components/Projetos/TCC/SaintMichel"
import LeBarbier from "../../components/Projetos/LeBarbier/LeBarbier"
import Overclock from "../../components/Projetos/Overclock/Overclock";
import EletroNet from "../../components/Projetos/EletroNet/EletroNet"

function Projects() {
    return (
        <section>
            <Header />
            <h1 className="titleprojetos">Meus Projetos</h1>
            <div className="container-projetos">
                <div className="projeto"><LeBarbier /></div>
                <div className="projeto"><SaintMichel /></div>
                {/* <div className="projeto"><EletroNet /></div> */}
                <div className="projeto"><Overclock /></div>
            </div>
            <Footer />
        </section>

    )
}

export default Projects;