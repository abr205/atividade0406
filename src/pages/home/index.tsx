import { Link } from "react-router-dom"
import Layout from "../../components/layout"


export default function Home() {
    return(
        <Layout>
            <h1>Página inicial</h1>
            <p>Olá tudo bem? </p>
            <p>estamos fazendo um projeto com React, temos aqui por enquanto 3 página segue abaixo:</p>
            <br />
            <hr />
            <Link to='Tarefas'>Tarefas</Link>
            <br />
            <Link to='Contato'>Contato</Link>
            <br />
            <Link to='Sobre'>Sobre</Link>
        </Layout>
    )
}