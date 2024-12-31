import './Experiencia.css';

//imagens
import html from "../../assets/Html.png"
import css from "../../assets/Css.png"
import javaScript from "../../assets/JavaScript.png";
import react from "../../assets/React.png";
import node from "../../assets/NodeJs.png";
import java from "../../assets/Java.png"
import mysql from "../../assets/MySQL.png";

const Experiencia = () => {
    return (
        <section>
            <div className='tecnologias-usadas'>
                <h1 className='titulo'>Tecnologias:</h1>

                <div className='icones-tecnologias'>

                    <div className='container-tecnologias'>
                        <h1>Front End:</h1>
                        <img src={html} alt="icone MySQL" className='imagem' />
                        <img src={css} alt="icone MySQL" className='imagem' />
                        <img src={javaScript} alt="icone JavaScript" className='imagem' />
                        <img src={react} alt="icone React" className='imagem' />
                    </div>

                    <div className='container-tecnologias'>
                        <h1>Back End:</h1>
                        <img src={node} alt="icone Node Js" className='imagem' />
                        <img src={java} alt="icone MySQL" className='imagem' />
                        <img src={mysql} alt="icone MySQL" className='imagem' />
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
