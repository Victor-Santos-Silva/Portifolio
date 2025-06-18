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
                <p>dsadadsadasd</p>
                <Link to='https://hospitalsaintmichel.vercel.app/' target='_blank'><b>Veja mais</b></Link>
            </section>
        </>
    )
}

export default SaintMichel;