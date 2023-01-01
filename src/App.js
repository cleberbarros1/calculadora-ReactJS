import { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./components/Button/Button";
import Input from "./components/Input/Input";

var opStr = false;
var operator;

 function App() {

  const [currentNumber, setCurrentNumber] = useState(0);
 
  function operacao(valor)  {

    if(opStr == true) {

      if (valor == 'C') {
        setCurrentNumber(0);
        opStr = false;
        return;
      }

      if (valor == '+' || valor == '-' || valor == '/' || valor == '*') {
        console.log(`Operacao ${currentNumber.split('').pop()} em Andamento`);
        return;
      }   

      if(valor == "=") {

        let operandos = currentNumber.split(operator);
        console.log(operandos);

        if(operandos[1] == '') {
          alert('Precisa Digitar o 2° operando!');
          return;
        }

        if(operator == '+') {
          let resultado = parseInt(operandos[0]) + parseInt(operandos[1]);
          setCurrentNumber(resultado);
        }

        if(operator == '-') {
          let resultado = parseInt(operandos[0]) - parseInt(operandos[1]);
          setCurrentNumber(resultado);
        }

        if(operator == '*') {
          let resultado = parseInt(operandos[0]) * parseInt(operandos[1]);
          setCurrentNumber(resultado);
        }

        if(operator == '/') {
          let resultado = parseInt(operandos[0]) / parseInt(operandos[1]);
          setCurrentNumber(resultado);
        }
        
        opStr = false;
        return;

      }

      setCurrentNumber(currentNumber + valor);
      return;

    }



    if(valor == 'C') {setCurrentNumber(0); return;}

    if(valor == "=") {return;}

    if(currentNumber == 0) {setCurrentNumber(valor); return;}

    if(valor == '+' || valor == '-' || valor == '*' || valor == '/') {

      opStr = true;
      operator = valor;
      console.log(opStr)

    }

    setCurrentNumber(currentNumber + valor);
    return;
  }

  return (
    <AppDiv>
      <Wrapper>
       <Input value={currentNumber}/>
        <DivMain>

          <LineCalc>
              <ButtonComponent onClick={() => operacao('7')} name="7"/>
              <ButtonComponent onClick={() => operacao('8')} name="8"/>
              <ButtonComponent onClick={() => operacao('9')} name="9"/>
              <ButtonComponent onClick={() => operacao('-')} name="-"/>
          </LineCalc>

          <LineCalc>
              <ButtonComponent onClick={() => operacao('4')} name="4"/>
              <ButtonComponent onClick={() => operacao('5')} name="5"/>
              <ButtonComponent onClick={() => operacao('6')} name="6"/>
              <ButtonComponent onClick={() => operacao('+')} name="+"/>
          </LineCalc>

          <LineCalc>
              <ButtonComponent onClick={() => operacao('1')} name="1"/>
              <ButtonComponent onClick={() => operacao('2')} name="2"/>
              <ButtonComponent onClick={() => operacao('3')} name="3"/>
              <ButtonComponent onClick={() => operacao('C')} name="C"/>
          </LineCalc>

          <LineCalc>
              
              <ButtonComponent onClick={() => operacao('/')} name="/"/>
              <ButtonComponent onClick={() => operacao('0')} name="0"/>
              <ButtonComponent onClick={() => operacao('*')} name="*"/>
              <ButtonComponent onClick={() => operacao('=')} name="="/>
          </LineCalc>

        </DivMain>
      </Wrapper>
    </AppDiv>
  );
}


export default App;

let AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #CACACA;
`

let Wrapper = styled.div`
  padding: 0px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

let LineCalc = styled.div`
  display: flex;
  justify-content: space-between;
`

let DivMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  Justify-content: space-between;

`