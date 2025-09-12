import "./Projects.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SaintMichel from "../../components/Projetos/TCC/SaintMichel"
import LeBarbier from "../../components/Projetos/LeBarbier/LeBarbier"
import Overclock from "../../components/Projetos/Overclock/Overclock";
import VirtutesetGratia from "../../components/Projetos/VirtutesEtGratia/VirtutesEtGratia"
import EletroNet from "../../components/Projetos/EletroNet/EletroNet"
import FoodGo from "../../components/Projetos/FoodGo/FoodGo";
import TenisGo from "../../components/Projetos/TenisGo/TenisGo";

function Projects() {
    return (
        <section>
            <Header />
            <h1 className="titleprojetos">Meus Projetos</h1>
            <div className="container-projetos">
                <div className="projeto"><TenisGo /></div>
                <div className="projeto"><FoodGo /></div>
                <div className="projeto"><VirtutesetGratia /></div>
                <div className="projeto"><LeBarbier /></div>
                <div className="projeto"><SaintMichel /></div>
                <div className="projeto"><EletroNet /></div>
                <div className="projeto"><Overclock /></div>
            </div>
            <Footer />
        </section>

    )
}

export default Projects;