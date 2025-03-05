import {Link} from "react-router-dom"

function Home(){
    return(
        <div>
            <h1>Bem vindo ao sistema de eventos</h1>
            <Link to="/eventos">Eventos</Link>
            <h3></h3>
            <Link to="/organizador">Organizadores</Link>
            <h3></h3>
            <Link to="/ingresso">Ingressos</Link>
        </div>
    )
}

export default Home;