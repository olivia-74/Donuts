// import Header from "./components/Header/Header"
import StyledGlobal, { CorFundo } from "./styledGlobal";
import Home from "./components/Page/Home/Home";
import { useState } from "react";

function App() {
  const [trocarDePagina, setTrocarDePagina] = useState()
  const changePage = (change) =>{
      setTrocarDePagina(change)
  }
  
  return (
    <>
    <CorFundo>
      <StyledGlobal/>
      {trocarDePagina === "0"? (
        <Home pagina={() => changePage("0")}/>
      ):(
        <Detalhes pagina={() => changePage("1")}/>
      )}
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <Details/> */}
    </CorFundo>
    
    </>
  );
}

export default App;
