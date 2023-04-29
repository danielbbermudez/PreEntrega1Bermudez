import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>B@NDERATEC</h1>
        <nav>
            <ul>
                <li>Celulares</li>
                <li>Laptops</li>
                <li>Consolas</li>

            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar