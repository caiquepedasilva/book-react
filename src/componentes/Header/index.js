import './estilo.css'
import Logo from '../Logo/'
import OpcoesHeader from '../OpcoesHeader'
import IconeHeader from '../IconesHeader'

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <IconeHeader />
        </header>
    )
}

export default Header