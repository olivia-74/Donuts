import { BotaoEstilo } from "./styled"

function Button(props){
    return(
            <BotaoEstilo>
                {props.titulo}
            </BotaoEstilo>
    )
}


export default Button