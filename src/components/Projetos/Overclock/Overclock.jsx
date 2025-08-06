import './overclock.css'

import imgOverclock from '../../../assets/HomePageOverclock.png'
import { Link } from 'react-router-dom';

const Overclock = () => {
    return (
        <>
            <section className='container-overclock'>
                <h1>Overclock</h1>
                <img src={imgOverclock} alt="imgOverclock" className='imgOverclock' />
                <h2>Descrição:</h2>
                <p>Um "clone" do site da Overclock.</p>
                <Link to='https://site-overclock-bebida-gamer.vercel.app/' target='_blank' className='buttonVejaMais'><b>Veja mais</b></Link>
            </section>
        </>
    )
}

export default Overclock;