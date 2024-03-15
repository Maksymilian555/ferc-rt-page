import "./style.css";

const Header = (props) => (
    <div className = "header">
        <nav className = "nav">
            <ul className = "navList">
                <li>
                    <button className = "navButton">Galeria</button>
                </li>
                <li>
                    <button className = "navButton">Kontakt</button>
                </li>
                <li>
                    <button className = "navButton">O nas</button>
                </li>
                <li>
                    <button className = "navButton">Projekty</button>
                </li>
            </ul>
        </nav>
    </div> 
)

export default Header;