import Web3 from 'web3'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
function HeaderComponent(){
    const [web3, setWeb3] = useState()
    const [cuentas, setCuentas] = useState()
    const connectWalletHandler = async () => {
        if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            try{
                await window.ethereum.request({method: "eth_requestAccounts"})
                const web3 = new Web3(window.ethereum)
                setWeb3(web3)
                const cuentas = await web3.eth.getAccounts()
                setCuentas(cuentas[0])
                const btn = document.getElementById('metamaskbtn')
                btn.style.display = "none"
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
                <button id='metamaskbtn' onClick={connectWalletHandler}>Conectar Wallet</button>
            </div>
      </header>
    )
}
export default HeaderComponent