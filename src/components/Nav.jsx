export default function Nav() {
    return <nav className="w-full">
        <ul className="py-4 flex justify-between">
            <li><a className="font-semibold hover:underline" href="#">Home</a></li>
            <li><a className="font-semibold hover:underline" href="#">About</a></li>
            <li><a className="font-semibold hover:underline" href="#">Menu</a></li>
            <li><a className="font-semibold hover:underline" href="#">Reservation</a></li>
            <li><a className="font-semibold hover:underline" href="#">Order Online</a></li>
            <li><a className="font-semibold hover:underline" href="#">Login</a></li>
        </ul>
    </nav>
}