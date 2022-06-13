import styles from '../../styles/Home.module.css'
function HeaderComponent(){
    return(
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>Lotthereum</h1>
            </div>
            <nav>
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Sobre Nosotros</a></li>
                    <li><a>Contacto</a></li>
                </ul>
            </nav>
            <div>
                <button>Conectar Wallet</button>
            </div>
      </header>
    )
}
export default HeaderComponent