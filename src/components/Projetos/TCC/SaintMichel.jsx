import './saintMichel.css'
import html from '../../../assets/Html.png'
import css from '../../../assets/Css.png'
import javaScript from '../../../assets/JavaScript.png'
import react from '../../../assets/React.png'
import node from '../../../assets/NodeJs.png'
import mysql from '../../../assets/MySQL.png'
import azure from '../../../assets/Microsoft_Azure.png'
import imgSaintMichel from '../../../assets/HomePageSaintMichel.png'
import { Link } from 'react-router-dom';

const SaintMichel = () => {
    return (
        <>
            <section className='container-saint-michel'>
                <h1>Hospital Saint Michel</h1>
                <img src={imgSaintMichel} alt="imgSaintMichel" className='imgSaintMichel' />
                
                <h2>Tecnologias usadas:</h2>
                <img src={html} alt="icone JavaScript" className='imagem' />
                <img src={css} alt="icone JavaScript" className='imagem' />
                <img src={javaScript} alt="icone JavaScript" className='imagem' />
                <img src={react} alt="icone JavaScript" className='imagem' />
                <img src={node} alt="icone JavaScript" className='imagem' />
                <img src={mysql} alt="icone JavaScript" className='imagem' />
                <img src={azure} alt="icone JavaScript" className='imagem' />
                
                <h2>Descrição:</h2>
                <p>Criado para um ambiente hospitalar, esse sistema resolve um dos maiores desafios da área da saúde: agendamentos confusos e demorados. Com ele, pacientes agendam consultas de forma prática e intuitiva, enquanto a equipe médica ganha mais controle e organização. (Projeto de TCC)</p>
                <Link to='https://hospitalsaintmichel.vercel.app/' target='_blank' className='buttonVejaMais'><b>Veja mais</b></Link>
            </section>
        </>
    )
}

export default SaintMichel;