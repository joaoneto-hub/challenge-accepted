import Logo from '../../../public/images/logo-white.png'

import './styles.css'

function Header(){
  return(
    <header className="Wrapper">
      <img src={Logo} alt="Logo climatempo" />
    </header>
  )
}

export default Header;