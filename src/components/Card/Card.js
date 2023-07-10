import { CardContainer, ImagemCard, TextoCard, TituloCard, DivCard } from "./styled";

function Card (){

    return(
        <CardContainer>
            <ImagemCard src=""/>
            <TituloCard>
                Unicorn Sprinkles
            </TituloCard>
            <TextoCard>
                Strawberry Creamy
            </TextoCard>
            <DivCard>
                <p> 7.800</p>
                <a>Mais</a>
            </DivCard>
        </CardContainer>
    )
}
export default Card