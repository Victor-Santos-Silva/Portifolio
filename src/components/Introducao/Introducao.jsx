import './Introducao.css';
import perfil from "../../assets/Foto Perfil.jpg";
import seta from "../../assets/seta.png"


function Introducao() {
    return (
        <section>
            <div className="containerNome">
                <img src={seta} alt="seta" className='seta' />
                <h3>Olá! Eu sou <b className='cor-roxa'>Victor dos Santos.</b></h3>
            </div>

            <div className='container-introducao'>
                <img src={perfil} alt="" className='perfil' />

                <div className='frase'>
                    <h2 className='fraseInspiradora1'>Explorando o limite</h2>
                    <h1 className='fraseInspiradora'>Entre o possível</h1>
                    <h1 className='fraseInspiradora'>E o extraordinário</h1>
                    <h1 className='fraseInspiradora'>Na <b className='cor-roxa'>tecnologia.</b></h1>
                    <h5 className=''>Criando o futuro, uma linha de código por vez.</h5>
                </div>
            </div>
        </section>
    )
}

export default Introducao;