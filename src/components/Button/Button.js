import styled from "styled-components";

function ButtonComponent(props) {

    return(
        <Button onClick={props.onClick}>{props.name}</Button>
    );
    
};

export default ButtonComponent;

//CSS
let Button = styled.button`
    width: 60px;
    opacity: .5;
    transition: .2s ease all;
    font-size: 24px;
    cursor: pointer;
    padding: 10px 20px;

    :hover {
    background-color: black;
    color: white;
    scale: 1;
    opacity: 1;
    }

    :active {
        scale: .7;
        opacity: .5;
        }
    `





