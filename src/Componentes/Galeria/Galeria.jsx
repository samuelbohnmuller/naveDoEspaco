import React, { useState } from 'react'
import Tags from '../Tags/Tags'
import styles from './Galeria.module.scss'
import fotosJson from './fotos.json'

import Cards from './Cards/Cards'

export default function Galeria() {
    const [fotos, setFotos] = useState(fotosJson)
    const tags = [...new Set(fotosJson.map((valor) => valor.tag))] //Pega cada tag(atributo do JSON(Array de objetos)) e coloca ela em uma posição sem se repetir.

    const filtrarFotos = (tag) => {
        const novasFotos = fotosJson.filter((foto) => { //Recebe o retorno da foto que tem tag igual a tag passado na chamada do método.
            return foto.tag === tag 
        })

        setFotos(novasFotos) //Seto no state as fotos que tem tag igual a tag que foi passado na chamada do método.
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags 
                tags={tags} 
                filtrarFotos={filtrarFotos}
                setFotos={setFotos}
            />
            <Cards 
                fotos={fotos}
                styles={styles}
            />
        </section>
    )
}