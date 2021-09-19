import React, { useState} from "react";
import styled from 'styled-components';
import { useParams, useNavigate } from "react-router-dom";
import { ClosetDB, activeFilters, FiltersDB } from '../../data/data';

// RenderSelection creates a Select component given an array arr  
function RenderSelection(props) {
  const dispArr = [<option >{""}</option>];

  if (props.arr) {
    props.arr.forEach(element => {
      dispArr.push(<option >{element}</option>);
    });
  }

  return (
    dispArr
  );
}

// DetailsPage is the page generated for each clothing item
function DetailsPage(props) {

  // deleteClothing removes clothing from ClosetDB 
  function deleteClothing(clothing, ClosetDB) {
    let ind = ClosetDB.indexOf(clothing);
    ClosetDB.splice(ind, 1);
    localStorage["ClosetDB"] = JSON.stringify(ClosetDB);
    navigate(`/`);
  }

  // displays description only if it exists
  function Description(props) {
    if (clothing.Description) { 
      return (<div> <SubHeading> <div> "Description"</div></SubHeading>
      <Desc> {clothing.desc} </Desc></div>
      
      
      );
    } else { 
      return (<div></div>);
    }
  }

  // DisplaySeasons creates a text header with clothing's seasons
  function DisplaySeasons(props) {
    let dispArr = [];
    
    clothing.season.forEach(element => {
      dispArr.push(<StyledP> {element} </StyledP>);
    });

    return (
      <SeasonsStyle>{dispArr}</SeasonsStyle>
    );
  }

  // DissplayTags displays the tags of the clothing
  function DisplayTags(props) {
    let dispArr = [];
    clothing.tags.forEach(element => {
      dispArr.push(<div> - {element} </div>);
    });

    return (
      <div>{dispArr}</div>
    );
  }

  const [addedTag, setAddedTag] = useState("");
  const onAddChange = (event) => {
    setAddedTag(event.target.value);
  };

  // handleTagAdd allows user to add tag to clothing
  const handleTagAdd = (e) => {
    if (addedTag !== "" && !clothing.tags.includes(addedTag)) {
      ClosetDB[id].tags.push(addedTag)
      localStorage["ClosetDB"] = JSON.stringify(ClosetDB);
      navigate(`/item/:${id}`);
    }
  }


  const [deletedTag, setDeletedTag] = useState("");
  const onDeleteChange = (event) => {
    setDeletedTag(event.target.value);
  };

  // handleTagDelete allows user to remove tag from clothing
  const handleTagDelete = (e) => {
    if (deletedTag !== "" && clothing.tags.includes(deletedTag)) {
      let ind = clothing.tags.indexOf(deletedTag);
      ClosetDB[id].tags.splice(ind, 1);
      localStorage["ClosetDB"] = JSON.stringify(ClosetDB);
      navigate(`/item/:${id}`);
    }
  }
  
  activeFilters.length = 0;
  let id = useParams().id.substring(1);
  let clothing = ClosetDB[id];
  let navigate = useNavigate();


  if (!clothing) {
    return (
      <h2>Sorry, this page doesn't exist!</h2>
    )
  }

  return (
    <Div>
      <Title> {clothing.colour} {clothing.brand}  {clothing.name} </Title>
      <StyledP> {clothing.type} </StyledP>

      <DisplaySeasons />
      <Main>
         <ClothesImg src={clothing.img} />
      

        <Right>
          <DeleteButton onClick={() => { deleteClothing(clothing, ClosetDB); }}> Delete</DeleteButton >

          <DescAndTag>
            <Description/> 
            

            <SubHeading> Tags </SubHeading>
            <DisplayTags/>

          </DescAndTag>
          <Horizontal>
            <TagHandling>
              <div>
                <button onClick={e => {handleTagDelete(e)}}>Delete A Tag</button>
                <br />
                <select onChange={onDeleteChange} style={{ width: 200 }}>
                  <RenderSelection arr={clothing.tags}></RenderSelection>
                </select>
              </div>
            </TagHandling>
            <TagHandling>
              <div>
                <button onClick={e => { handleTagAdd(e) }}>Add A Tag</button>
                <br />
                <select onChange={onAddChange} style={{ width: 200 }}>
                  <RenderSelection arr={FiltersDB.UserTags.filter(item => !(clothing.tags.includes(item)))}></RenderSelection>
                </select>
              </div>
            </TagHandling>
          </Horizontal>
        </Right>
      </Main>
    </Div>
  );
}


export default DetailsPage;

// STYLING
const Div = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 user-select: none;
 height: 90vh;
 width: 95vw;
`;

const DeleteButton = styled.button`
height: 30px; 
align-self: flex-end;
background-color: white;
cursor: pointer;
border: 2px solid white;
border-left: 1px solid black;
border-bottom: 1px solid black;
`;

const Title = styled.h1`
margin-top: 0px;
margin-bottom: 5px;
`;

const SeasonsStyle = styled.p`
margin-bottom: 10px;
margin-top: 0px;
display: inline;
`;

const StyledP = styled.p`
  margin: 0px;
  opacity: 75%;
  display: inline;
  align-self: center;
`;

const Main = styled.div`
  width: auto;
  height: 450px;
  display: flex;
  flex-direction: row;
`;



const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 5px;
  border: 1px solid black;
`;

const TagHandling = styled.div`
  border: 2px solid black;
  margin: 5px;
  padding: 2px;
  font-size: 13px;
`;

const Horizontal = styled.div`
  display: flex;
`;


const Desc = styled.p`
  white-space: pre-wrap;
  margin-top: 0px;
  text-align: center;
  font-size: 14px;
`;

const SubHeading = styled.p`
 text-align: center;
  margin-bottom: 2px;
  font-weight: bold;
`;

const ClothesImg = styled.img`
  object-fit: cover;
  width: auto;
  height: 100%;
  max-width: 400px;
`;

const DescAndTag = styled.div`
  width: auto;
  height: 100%;
  margin: 5px;
`;
