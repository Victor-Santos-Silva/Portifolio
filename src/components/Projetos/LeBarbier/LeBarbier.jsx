import './leBarbier.css'

import html from "../../../assets/Html.png"
import css from "../../../assets/Css.png"
import typeScript from "../../../assets/TypeScript.png";
import postgress from "../../../assets/Postgress SQL.png";
import NestJS from "../../../assets/NestJS.png";
import Next from "../../../assets/Next.png";
import azure from "../../../assets/Microsoft_Azure.png";

import imgLeBarbier from '../../../assets/barbearia site teste.png'
import { Link } from 'react-router-dom';

const LeBarbier = () => {
    return (
        <>
            <section className='container-lebarbier'>
                <h1>Barbearia LeBarbier</h1>
                <img src={imgLeBarbier} alt="" className='imgLeBarbier' />

                <h2>Tecnologias usadas:</h2>
                <img src={html} alt="icone JavaScript" className='imagem' />
                <img src={css} alt="icone JavaScript" className='imagem' />
                <img src={typeScript} alt="icone JavaScript" className='imagem' />
                <img src={Next} alt="icone JavaScript" className='imagem' />
                <img src={NestJS} alt="icone JavaScript" className='imagem' />
                <img src={postgress} alt="icone JavaScript" className='imagem' />
                <img src={azure} alt="icone JavaScript" className='imagem' />

                <h2>Descrição:</h2>
                <p>Em breve...</p>
                <Link to='https://lebarbier.vercel.app/' target='_blank' className='buttonVejaMais'><b>Veja mais</b></Link>
            </section>
        </>
    )
}

export default LeBarbier;