import { Link } from "react-router-dom"
import Layout from "../../components/layout"

export default function Sobre() {
    return(
        <Layout>
            <h1>Sobre</h1>
            <div>
                &copy; Códigos desenvolvidos em aulas por Nicolas Gabriel de Souza Bernardino RA: 1050292311043
            </div>
            <hr />
            <Link to="/">Home</Link>
            <br />
            <Link to="/Tarefas">Tarefas</Link>
            <br />
            <Link to="/Contato">Contato</Link>
        </Layout>
    )
}