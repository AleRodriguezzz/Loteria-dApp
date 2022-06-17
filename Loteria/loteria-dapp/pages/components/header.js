import Web3 from 'web3'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import localContract from '../../blockchain/loteria'

function HeaderComponent(props){

    const [loggedIn, setLoggedIn] = useState(false)

    const connectWalletHandler = async () => {
        if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            try{
                await window.ethereum.request({method: "eth_requestAccounts"})
                const web3 = new Web3(window.ethereum)
                props.setWeb3(web3)
                setLoggedIn(true) 
                const cuenta = await web3.eth.getAccounts()
                props.setCuentas(cuenta[0])
                const localContractCopy = localContract(web3)
                props.setLocalContract(localContractCopy)
            }catch(err){
                console.log(err.message)
            }
        }else{
            console.log("Instale MetaMask")
        }
    }
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
                { !loggedIn ? <button onClick={connectWalletHandler}>Conectar Wallet</button>
                : <p>Bienvenido: {props.cuentas}</p>}
            </div>
      </header>
    )
}
export default HeaderComponent