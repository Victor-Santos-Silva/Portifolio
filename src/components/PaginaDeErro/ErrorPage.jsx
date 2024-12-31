import './ErroPage.css';
import Header from '../Header/Header';

function ErrorPager() {
    return (
        <section >
            <Header />
            <div className='pageErro'>
                <h1 >Erro 404! </h1>
                <h1>Pagina não encontrada.</h1>
            </div>
        </section>
    )
}

export default ErrorPager;