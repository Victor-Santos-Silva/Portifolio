import './eletroNet.css'

import imgEletroNet from '../../../assets/HomePagEeletroNet.png'
import { Link } from 'react-router-dom';

const EletroNet = () => {
    return (
        <>
            <section className='container-eletro-net'>
                <h1>EletroNet</h1>
                <img src={imgEletroNet} alt="imgEletroNet" className='imgEletroNet' />
                <h2>Descrição:</h2>
                <p>E-commerce simples (Em Manutenção)</p>
                <Link to='https://projeto-eletronet.vercel.app/' target='_blank'><b>Veja mais</b></Link>
            </section>
        </>
    )
}

export default EletroNet;