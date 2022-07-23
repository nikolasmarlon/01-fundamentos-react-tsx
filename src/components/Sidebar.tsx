import { PencilLine } from 'phosphor-react'

//importação css Sidebar.module.css
import styles from './Sidebar.module.css'

import capa from '../assets/capa.jpg'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

            <img className={styles.profileCover} src={capa} />

            <div className={styles.profile}>
                <Avatar src="https:github.com/nikolasmarlon.png"/>

                <strong>Nikolas Marlon</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#"> <PencilLine size={20} /> Editar seu perfil</a>
            </footer>
            
        </aside>
    )
}