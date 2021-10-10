import { Link } from "react-router-dom"
import { Li, Ul } from "./style.js"

const Navbar = () => {
    return (
        <section>
            <header>
                <Ul>
                    <Li>
                        <Link exact to='/'>
                            Home
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/fellowship-drinks'>
                            Confraternização
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/wedding-drinks'>
                            Casamento
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/graduation-drinks'>
                            Formatura
                        </Link>
                    </Li>
                </Ul>
            </header>
        </section>
    )
}

export default Navbar