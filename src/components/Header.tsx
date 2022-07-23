//css module - evita que o css de um componente afete outro componente fora do seu escopo
import styles from './Header.module.css'

//assim como o css, as imagens são importadas pelo javaScript
import igniteLogo from '../assets/ignite-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="logo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>        
    )
}