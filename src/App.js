import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Menu from "./Componentes/Menu/Menu";
import './styles/estilosGlobais.scss'
import banner from '../src/Componentes/Menu/banner.png'
import style from '../src/Componentes/Menu/PaginaInicial.module.scss'
import Rodape from "./Componentes/Rodape/Rodape";
import Galeria from "./Componentes/Galeria/Galeria";
import Populares from "./Componentes/Populares/Populares";


export default function App() {
  return (
    <>
      <Cabecalho/>
      <main>
        <section className={style.principal}>
          <Menu/>
          <div className={style.principal__imagem}>
            <h1>Galeria mais completa do espaço</h1>
            <img src={banner} alt="imagem do espaço"/>
          </div>
        </section>
        <div className={style.galeria}>
          <Galeria/>
        </div>
      </main>
      <Rodape/>
    </>
  );
}


