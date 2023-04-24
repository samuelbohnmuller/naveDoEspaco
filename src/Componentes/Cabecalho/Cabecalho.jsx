import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do app"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="Pesquise no universo"/>
                <img src={search} alt="lupa"/>
            </div>
        </header>
    )
}