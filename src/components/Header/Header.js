import menu from "../../assets/menu.png"
import search from "../../assets/search.png"
import { BotaoNav, PrimeiroMenu } from "./styled"

function Header(props){

    const handlePageChange = () => {
        props.pagina()
    }

    return (
       <PrimeiroMenu>
            <BotaoNav onClick={handlePageChange}>
                <img src={props.imgPrimeira} alt=""/>
            </BotaoNav>
            <BotaoNav onClick={handlePageChange}>
                <img src={props.imgSegunda} alt=""/>
            </BotaoNav>
       </PrimeiroMenu>
    )
}

export default Header