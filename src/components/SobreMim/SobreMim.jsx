// Css
import './sobremim.css';

import perfil from "../../assets/Foto Perfil.jpg";
import seta from "../../assets/seta.png"

const SobreMim = () => {
    return (
        <section className='containerSobreMim'>

            <div className="containerNome">
                <img src={seta} alt="seta" className='seta' />
                <h3>Olá! Eu sou <b className='cor-roxa'>Victor dos Santos.</b></h3>
            </div>

            <div className='container-introducao'>
                <img src={perfil} alt="" className='perfil' />

                <div className='frase'>
                    <h2 className='fraseInspiradora1'>Explorando o limite</h2>
                    <h1 className='fraseInspiradora'>Entre o possível</h1>
                    <h1 className='fraseInspiradora'>E o extraordinário</h1>
                    <h1 className='fraseInspiradora'>Na <b className='cor-roxa'>tecnologia.</b></h1>
                    <h5 className=''>Criando o futuro, uma linha de código por vez.</h5>
                </div>
            </div>

            <div className='sobre'>
                <div>
                    <h1 className='tituloSobreMim'>Sou Desenvolvedor de Software <b className='cor-roxa'>Full-Stack.</b></h1>
                    <h1 className='tituloSobreMim'>Tenho 22 anos, sou de São Paulo - SP.</h1>
                </div>

                <div className='formacao-academica'>
                    <h1 className='tituloSobreMim'><b className='cor-roxa'>Formação Academica:</b></h1>
                    <h1 className='tituloSobreMim'>Técnico em Desenvolvimento de Sistemas.</h1>
                    <h1 className='tituloSobreMim'>Graduação em Ciência da Computação.</h1>
                    <h1 className='tituloSobreMim'></h1>
                </div>
            </div>

        </section >

    );
}

export default SobreMim;

