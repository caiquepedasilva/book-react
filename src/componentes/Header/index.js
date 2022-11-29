import Logo from '../Logo/'
import OpcoesHeader from '../OpcoesHeader'
import IconeHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconeHeader />
        </HeaderContainer>
    )
}

export default Header