import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Header(props) {
  return (
    <PageHeader>
      <Div>
        <TextHeader>
          <Link style={linkStyle} to="/add"><AddButton> <Plus>+</Plus>
            <AddText> Add A Piece of Clothing </AddText>
          </AddButton></Link>
        </TextHeader>

      </Div>

      <Link style={linkStyle} to="/"><TextHeader>The Cloud Closet</TextHeader>  </Link>
      

    </PageHeader>

  );
}

const PageHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
`;

const AddText = styled.div`
  width: 100px;
 
`;

const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  padding: 1px;
  cursor:pointer;  
  align-self: flex-start;
`;

const Plus = styled.div`
  width: 40px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextHeader = styled.p`
  font-size: 16px;
  margin-left: 5px;
  margin-right: 15px;
`;

const Div = styled.p`
 display: flex;
 justify-content: space-around;
 align-items: center;

`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black"
};

export default Header;
export {linkStyle};