import Header from "../../Header/Header"
import Card from "../../Card/Card"
import Nav from "../../Nav/Nav"
import TituloHeader from "../../TituloHeader/TituloHeader"
import { SectionCard } from "./styled"
import menu from "../../../assets/menu.png"
import lupa from "../../../assets/lupa.png"

function Home(props){
    return(
        <>
        <Header pagina={props.pagina}
        imgPrimeira={menu}
        imgSegunda={lupa}
        />
        <TituloHeader/>
        <Nav/>
        <SectionCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SectionCard>
        </>
    )
}

export default Home