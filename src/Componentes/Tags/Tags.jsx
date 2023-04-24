import React from 'react'
import styles from './Tags.module.scss'
import fotosJson from '../Galeria/fotos.json'

export default function Tags({tags, filtrarFotos, setFotos}){
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {
                    tags.map((tag) => { //Para caga tag, retorno uma tag da lista, que será em modo lista(li).
                        return (
                            <li 
                                key={tag} 
                                className={styles.tags.li}
                                onClick={() => filtrarFotos(tag)} //Quando clicado na tag de Estrela, ou Galáxia ect, chamará o método e passará a tag clicada sob parâmetro no método. () => é inserido para ser função callback, que só chamará a função quando o evento do clique for iniciado.
                            >
                                {tag}
                            </li>
                        )  
                    })
                }
                <li onClick={() => setFotos(fotosJson)}>
                    Todas
                </li>
            </ul>
        </div>
    )
}