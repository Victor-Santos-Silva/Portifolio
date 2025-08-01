import './leBarbier.css'

import imgLeBarbier from '../../../assets/barbearia site teste.png'
import { Link } from 'react-router-dom';

const LeBarbier = () => {
    return (
        <>
            <section className='container-lebarbier'>
                <h1>Barbearia LeBarbier</h1>
                <img src={imgLeBarbier} alt="" className='imgLeBarbier' />
                <h2>Descrição:</h2>
                <p>Em breve...</p>
                {/* <Link to='https://hospitalsaintmichel.vercel.app/' target='_blank'><b>Veja mais</b></Link> */}
            </section>
        </>
    )
}

export default LeBarbier;