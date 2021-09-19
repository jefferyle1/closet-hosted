import styled from 'styled-components'
import {ClosetDB} from '../../data/data';
import {Link} from "react-router-dom";
import {linkStyle} from "../Header"

// ClothingCard is visual card of each clothing displayed in home page
function ClothingCard(props) {
  props.clothing.num = props.num;
  let clothing = props.clothing;

  return (
    <CardStyle>
      <ClothesImg src={clothing.img}/>
      <ClothesText>
        <div> {clothing.brand} </div>
        <b> {clothing.colour} {clothing.name} </b>
      </ClothesText>
    </CardStyle>
  );
}

// RenderCloset renders clothes of closetDB 
function RenderCloset(props) {

  const dispArr = [];

  for (var i = 0; i < props.closet.length; i++) {
    let ind = ClosetDB.indexOf(props.closet[i]);

    // here, each clothing is given its unique page
    dispArr.push(<Link to={`/closet-hosted/item/:${ind}`} style={linkStyle}>
      <ClothingCard clothing={props.closet[i]} num={ind} /> </Link>);
  }

  return (
    <DispStyle>{dispArr} </DispStyle>
  );
}

export default RenderCloset;

const CardStyle = styled.div`
 display: flex;
 justify-content: flex-end;
 flex-direction: column;
 width: 200px;
 margin: 10px;
 font-family: Arial, Helvetica, sans-serif;
 border-top: 3px solid black;
`;

const DispStyle = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
`;

const ClothesText = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 height: 60px;
 border-top: 3px solid black;
 text-align: center;
`;

const ClothesImg = styled.img`
  object-position: center;
  height: 270px;
  width: 200px;
  object-fit: cover;
`;