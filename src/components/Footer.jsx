import Logo2 from "../assets/logo-vertical.png"

export default function Footer() {
    return <footer className="font-sans footer">
        <div className="max-w-5xl mx-auto p-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <a href="/"><img className="w-20 h-40" src={Logo2} alt="Little Lemon vertical logo" /></a>
            <ul className="">
                <li><h4 className="mb-4 uppercase text-white font-bold text-xl">Doormat Navigation</h4></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">Home</a></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">About</a></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">Menu</a></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">Reservation</a></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">Order Online</a></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">Login</a></li>
            </ul>
            <ul>
                <li><h4 className="mb-4 uppercase text-white font-bold text-xl">Contact</h4></li>
                <li className="text-white">
                    <p>Little Lemon</p>
                    <p>Restaurant Street 54, Culinary City</p>
                    <p>60528, Kitchen</p>
                </li>
            </ul>
            <ul>
                <li><h4 className="mb-4 uppercase text-white font-bold text-xl">Social Media Links</h4></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">Facebook</a></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">Instagram</a></li>
                <li><a className="text-white hover:text-white hover:underline" href="#">X</a></li>
            </ul>
        </div>
    </footer>
}