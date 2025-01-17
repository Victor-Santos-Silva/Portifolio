import './footer.css';

import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <footer className="footerHome">
            <h1 className='textoFooter-titulo'>Contato:</h1>
            <h1 className='textoFooter'>Atualmente, estou procurando me juntar a uma equipe multifuncional que valoriza melhorar a vida das pessoas por meio do design acessível. Ou tem um projeto em mente? Vamos nos conectar. </h1>
            <h1 className='textoFooter'></h1>
            <h1 className='texto-email'>Email: victorsantos.ctt@gmail.com</h1>
            <h1 className='texto-redes-sociais'>Redes Sociais:</h1>

            <a href="https://www.instagram.com/victoor_dev/" target='_blank' rel="noopener noreferrer" className='linkImagem'>
                <img src={instagram} alt="imagem do instagram" className='img-footer' />
            </a>
            <a href="https://www.linkedin.com/in/victor-dos-santos-da-silva/" target='_blank' rel="noopener noreferrer" className='linkImagem'>
                <img src={linkedin} alt="imagem do linkedin" className='img-footer' />
            </a>

        </footer>
    )
}

export default Footer;