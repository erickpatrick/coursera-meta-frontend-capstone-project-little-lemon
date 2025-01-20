import Nav from './Nav'
import Logo from '../assets/Logo.svg'

export default function Header() {
    return <header className="max-w-5xl mx-auto p-8 sm:flex justify-between sm:gap-16 md:gap-32">
        <img className="max-sm:mx-auto max-sm:mb-4" src={Logo} alt="Little Lemon logo" />
        <Nav />
    </header>
}