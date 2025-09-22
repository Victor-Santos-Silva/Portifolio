import './Experiencia.css';

//imagens
import html from "../../assets/Html.png"
import css from "../../assets/Css.png"
import javaScript from "../../assets/JavaScript.png";
import react from "../../assets/React.png";
import Next from "../../assets/Next.png";
import flutter from "../../assets/flutter.png";
import reactNative from "../../assets/react-Native (1).png";
import node from "../../assets/NodeJs.png";
import java from "../../assets/Java.png"
import mysql from "../../assets/MySQL.png";
import postgress from "../../assets/Postgress SQL.png";
import typescript from "../../assets/Typescript.png";
import NestJS from "../../assets/NestJS.png";
import MongoDB from "../../assets/MongoDB.png";
import azure from "../../assets/Microsoft_Azure.png";
import gcp from "../../assets/cgp cloud.png";

const Experiencia = () => {
    return (
        <section>
            <div className='tecnologias-usadas'>
                <h1 className='titulo'>Tecnologias:</h1>

                <div className='icones-tecnologias'>

                    <div className='container-tecnologias'>
                        <h1>Linguagens:</h1>
                        <img src={javaScript} alt="icone JavaScript" className='imagem' />
                        <img src={typescript} alt="icone Node Js" className='imagem' />
                        {/* <img src={java} alt="icone Node Js" className='imagem' /> */}
                    </div>

                    <div className='container-tecnologias'>
                        <h1>Front End:</h1>
                        <img src={html} alt="icone MySQL" className='imagem' />
                        <img src={css} alt="icone MySQL" className='imagem' />
                        <img src={react} alt="icone React" className='imagem' />
                        <img src={Next} alt="icone React" className='imagem' />
                    </div>

                    <div className='container-tecnologias'>
                        <h1>Mobile:</h1>
                        <img src={flutter} alt="icone MySQL" className='imagem' />
                        <img src={reactNative} alt="icone MySQL" className='imagem' />
                    </div>

                    <div className='container-tecnologias'>
                        <h1>Back End:</h1>
                        <img src={node} alt="icone Node Js" className='imagem' />
                        {/* <img src={NestJS} alt="icone Node Js" className='imagem' /> */}
                    </div>

                    <div className='container-tecnologias'>
                        <h1>Banco de Dados:</h1>
                        <img src={mysql} alt="icone MySQL" className='imagem' />
                        <img src={postgress} alt="icone MySQL" className='imagem' />
                        {/* <img src={MongoDB} alt="icone MySQL" className='imagem' /> */}
                    </div>
                    
                    <div className='container-tecnologias'>
                        <h1>Cloud:</h1>
                        <img src={azure} alt="icone MySQL" className='imagem' />
                        {/* <img src={gcp} alt="icone MySQL" className='imagem' /> */}
                    </div>
                </div>
            </div>

            <div className='frase-objetivo'>
                <h1>"Busco um ambiente de trabalho que combine aprendizado contínuo e desenvolvimento de soluções que melhorem a vida das pessoas."</h1>
            </div>
        </section>

    )
}

export default Experiencia;
