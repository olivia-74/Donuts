import filtro from "../../assets/filtro.png";
import { ContainerNav } from "./styled";
import Button from "../Button/Button";

function Nav(){
    return(
        <ContainerNav>
            <Button titulo={"Donuts"}/>
            <Button titulo={"Ice Cream"}/>
            <Button titulo={"Bomboloni"}/>
            <img src={filtro} alt=""/>
        </ContainerNav>
    )
}

export default Nav