import Header from "../../Header/Header"
import Seta from "../../../assets/seta.png"
import Ponto from "../../../assets/ponto.png"
import Group from "../../../assets/group.png"
import DonutGrande from "../../../assets/Frame 9.png"
import { BotaoAddCard, BotaoMore, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProdutos, TextDonuts, TextMore, TextNumber, TituloDonuts } from "./styled"


function Details(props){
    return(
        <>
        <Header
            pagina={props.pagina}
            imgPrimeira = {Seta}
            imgSegunda = {Ponto}
        />
        
        <ContainerDetalhes>
            <ImagemGrande src={DonutGrande}/>
            <ContainerDiv>

                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>

                <TextDonuts>
                    A fluffy fresh cooked donut covered by a creamy strawberry flavour with raindbow sprinkles.
                </TextDonuts>

                <MaisProdutos>
                    <img src={Group}/>
                    <TextNumber>7800</TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore>Need more?</TextMore>
                    <BotaoMore>Add more</BotaoMore>
                </MaisProdutos>

                <BotaoAddCard>Add to cart</BotaoAddCard>

            </ContainerDiv>
        </ContainerDetalhes>

        </>
    )
}

export default Details
