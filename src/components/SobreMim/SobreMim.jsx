// Css
import './sobremim.css';

import foto from '../../assets/Foto Perfil.jpg'

const SobreMim = () => {
    return (
        <section className='containerSobreMim'>

            <div >
                <img src={foto} alt="foto do criador do site" className='imagem-sobremim' />
            </div>


            <div className='sobre'>
                <div>
                    <h1 className='tituloSobreMim'>Olá, eu sou Victor, um desenvolvedor de 23 anos da zona leste de São Paulo, apaixonado por tecnologia e inovação.</h1>
                    <br />
                    <h1 className='tituloSobreMim'>Tenho experiência em desenvolvimento front-end e back-end utilizando tecnologias como HTML, CSS, JavaScript, React JS, Node JS. Também possuo conhecimento básico de MySQL e criação de APIs simples com Node.</h1>
                    <br />
                    <h1 className='tituloSobreMim'>Meu interesse por programação começou quando criei meus primeiros projetos e percebi o impacto que a tecnologia pode ter na vida das pessoas</h1>
                    <br />
                    <h1 className='tituloSobreMim'>Busco constantemente evoluindo como desenvolvedor, aprendendo novas tecnologias e contribuindo para projetos que fazem a diferença.</h1>
                    <br />
                    <h1 className='tituloSobreMim'>Fora do código, gosto de explorar novas ideias, assistir séries e estar em contato com inovações tecnológicas.</h1>
                    <br />
                    <h1 className='tituloSobreMim'>Atualmente, estou cursando o 6º semestre da graduação em Ciência da Computação e me formei como Técnico em Desenvolvimento de Sistemas, o que me fornece uma base sólida e prática para o desenvolvimento de soluções tecnológicas.</h1>
                </div>
            </div>

        </section >

    );
}

export default SobreMim;

