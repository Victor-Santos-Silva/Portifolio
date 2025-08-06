import './saintMichel.css'

import imgSaintMichel from '../../../assets/HomePageSaintMichel.png'
import { Link } from 'react-router-dom';

const SaintMichel = () => {
    return (
        <>
            <section className='container-saint-michel'>
                <h1>Hospital Saint Michel</h1>
                <img src={imgSaintMichel} alt="imgSaintMichel" className='imgSaintMichel' />
                <h2>Descrição:</h2>
                <p>Criado para um ambiente hospitalar, esse sistema resolve um dos maiores desafios da área da saúde: agendamentos confusos e demorados. Com ele, pacientes agendam consultas de forma prática e intuitiva, enquanto a equipe médica ganha mais controle e organização. (Projeto de TCC)</p>
                <Link to='https://hospitalsaintmichel.vercel.app/' target='_blank' className='buttonVejaMais'><b>Veja mais</b></Link>
            </section>
        </>
    )
}

export default SaintMichel;