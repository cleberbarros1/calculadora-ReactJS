import styled from "styled-components";


function Input(props){
    return(<InputContainer value={props.value}disabled/>);
}


export default Input;

let InputContainer = styled.input`
    padding: 0;
    font-size: 40px;
    width: 240px;
    height: 75px;
    background-color: black;
    display: flex;
    align-items: center;
    text-align: right;
    color: white;
    border: none;
`