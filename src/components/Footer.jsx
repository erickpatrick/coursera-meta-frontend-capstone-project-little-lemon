import Logo2 from "../assets/Logo.svg"

export default function Footer() {
    return <footer>
        <img src={Logo2} alt="Little Lemon vertical logo" />
        <ul>
            <li><h4>Doormat Navigation</h4></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
        <ul>
            <li>
                <p>Little Lemon</p>
                <p>Restaurant Street 54, Culinary City</p>
                <p>60528, Kitchen</p>
            </li>
        </ul>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X</a></li>
        </ul>
    </footer>
}