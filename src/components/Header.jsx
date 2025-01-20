import Nav from './Nav'
import Logo from '../assets/Logo.svg'

export default function Header() {
    return <header className="flex header">
        <img className="logo" src={Logo} alt="Little Lemon logo" />
        <Nav />
    </header>
}