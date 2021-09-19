import React, { useState } from "react";
import styled from 'styled-components'
import { activeFilters, ClosetDB, FiltersDB, Clothing } from "../../data/data"
import Checkboxes from "./CheckBoxes";
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from './ImageUpload';



// addClothing adds the piece of clothing to ClosetDB 
function addClothing(index, name, brand, colour, type, season, tag, desc, img) {
  if (name.trim() !== "" && type.trim() !== ""
    && colour.trim() !== "" && season.length !== 0 && img !== "") {
    const clothing = Clothing(index, name, brand, colour, type, season, tag, desc, img);
    ClosetDB.push(clothing);
    localStorage["ClosetDB"] = JSON.stringify(ClosetDB);
    return true;

  } else {
    alert("Ensure that all non-optional inputs are filled and that you've uploaded an image.");
    return false;
  }
}

// renderSelection renders selection component given arr 
function RenderSelection(props) {
  const dispArr = [<option >{""}</option>];

  props.arr.forEach(element => {
    dispArr.push(<option >{element}</option>);
  });

  return (
    dispArr
  );
}

// arrToDict converts arr into a dictionary 
function arrToDict(arr) {
  let temp = arr.splice();

  for (let index = 0; index < arr.length; index++) {
    temp.splice(index, 1, {
      label: arr[index]
    });
  }

  return temp;
}

// dictToArr covnerts dict into an arr
function dictToArr(dict) {
  let temp = dict.splice();

  for (let index = 0; index < dict.length; index++) {
    temp[index] = dict[index].label;
  }

  return temp;
}

function AddPage(props) {

  activeFilters.length = 0;

  // State changes for text input
  const [name, setName] = useState("");
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const [brand, setBrand] = useState("");
  const onBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const [type, setType] = useState("");
  const onTypeChange = (event) => {
    setType(event.target.value);
  };

  const [colour, setColour] = useState("");
  const onColourChange = (event) => {
    setColour(event.target.value);
  };

  const [desc, setDesc] = useState("");
  const onDescChange = (event) => {
    setDesc(event.target.value);
  };

  const [seasons, setSeasons] = useState([]);
  const [tags, setTags] = useState([]);
  const [url, setUrl] = useState("");

  let navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let doNav = addClothing(ClosetDB.length, name, brand, colour, type, seasons,
      tags, desc, url);

    if (doNav) {
      navigate(`/`);
    }
  }

  return (
    <MainDiv>
      <Left>

        <form onSubmit={e => { handleFormSubmit(e) }} >

          <label>Name</label>
          <br />
          <input onChange={onNameChange} type='text' />
          <br />

          <label>Brand <Optional>(optional)</Optional> </label>
          <br />
          <input onChange={onBrandChange} type='text' />
          <br />

          <label>Choose Clothing Type </label>
          <br />
          <select onChange={onTypeChange} >
            <RenderSelection arr={FiltersDB.allTypes}></RenderSelection>
          </select>
          <br />

          <label>Choose Colour </label> <br />
          <select onChange={onColourChange}>
            <RenderSelection arr={FiltersDB.allColours}></RenderSelection>
          </select> <br />


          <label>Description <Optional>(optional)</Optional></label><br />
          <DescStyle onChange={onDescChange} type='text' /> <br />


          <label>Seasons</label>
          <br />
          <Checkboxes options={arrToDict(FiltersDB.allSeasons)} onChange={data => setSeasons(dictToArr(data))} />
          <br />

          <label>Tags <Optional>(optional)</Optional></label>
          <br />
          <Checkboxes options={arrToDict(FiltersDB.UserTags)} onChange={data => setTags(dictToArr(data))} />
          <br />


          <Submit type='submit' className='submitButton'
            value='Submit'> Add This Piece To Your Closet </Submit>

        </form>

      </Left>

      <ImageUpload url={url} setUrl={setUrl} />
    </MainDiv>
  );
}


export default AddPage;


// STYLING
const MainDiv = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 user-select: none;
 height: 85vh;
 font-family: arial;
 max-width: 90vw;
`;

const Left = styled.div`
 border-right: 2px solid black;
 padding: 10px;
  display: flex; 
  flex-direction: column;
  overflow: auto;
  border: 2px solid black;
  min-width: 200px;
`;


const DescStyle = styled.textarea`
  min-width: 180px;
  height: 200px;
  font-family: Helvetica;
`;

const Optional = styled.p`
  display: inline;
  font-size: 13px;
`;

const Submit = styled.button`
  cursor: pointer;
  font-size: 20px;
  margin-top: 30px;
  width: 95%;
  margin-left: 0px;
  background-color: white;
`;