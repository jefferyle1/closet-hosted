import styled from 'styled-components'
import React, { useState } from "react";
import { activeFilters, FiltersDB, ClosetDB } from '../../data/data'

function FilterTable(props) {

  const dispArr = [];

  // Loops through each category
  for (var filterCat in props.filters) {
    dispArr.push(<FilterCat cat={filterCat} key={filterCat} />);

    // Loops through each filter in each category
    props.filters[filterCat].forEach(filter => {
      dispArr.push(<IndFilter cat={filterCat} filter={filter} key={filter} />);
    });
  }

  return (
    <FilterText> <div>{dispArr} </div>
      <TagsButton onClick={() => { addTag(); }}> Add Custom Tag </TagsButton>
    </FilterText>
  );
}

function FilterCat(props) {
  
  let cat;
  
  if (props.cat === "allSeasons") {
    cat = "Seasons";
  } else if (props.cat === "allColours") {
    cat = "Colours";
  } else if (props.cat === "allTypes") {
    cat = "Types";
  } else {
    cat = "Tags";
  }

  return (
    <center><b>
      {cat}
    </b></center>
  );
}

// IndFilter creates each tag found in filtersDB
function IndFilter(props) {
  
  const name = props.filter;
  const category = props.cat;
  const [active, setActive] = useState(false);
  
  if (category === "UserTags") {
    return (
      <Row> <Ind
        
        onClick={() => { setFilter(active, setActive, name); }}
        style={active ? { fontWeight: "bold" } : { fontWeight: "normal" }}>
        {name}
      </Ind>
        <DeleteFilter onDoubleClick={() => { removeTag(name); }}> x </DeleteFilter></Row>
    );
  } else {
    return (
      <Ind
        
        onClick={() => { setFilter(active, setActive, name); }}
        style={active ? { fontWeight: "bold" } : { fontWeight: "normal" }}>
        {name}
      </Ind>
    );
  }
}

// setFilter sets a filter to active (colours and types can only have one tag active at a time)
function setFilter(active, setActive, name) {

  if (active === false) {

    if (FiltersDB.allColours.includes(name) && !activeFilters.some(r => FiltersDB.allColours.includes(r))) {
      setActive(true);
      activeFilters.push(name);
    } else if (FiltersDB.allTypes.includes(name) && !activeFilters.some(r => FiltersDB.allTypes.includes(r))) {
      setActive(true);
      activeFilters.push(name);
    } else if (FiltersDB.allSeasons.includes(name) || FiltersDB.UserTags.includes(name)) {
      setActive(true);
      activeFilters.push(name);
    }
  } else {
    setActive(false);
    let ind = activeFilters.indexOf(name);
    activeFilters.splice(ind, 1);
  }
}

// addTag adds tag to the closet
function addTag() {
  
  let inp = prompt("Enter a custom tag:");
  
  if (inp !== "" && inp !== null && !FiltersDB.UserTags.includes(inp)) {
    FiltersDB.UserTags.push(inp);
    localStorage["FiltersDB"] = JSON.stringify(FiltersDB);
  }

}

// removeTags remvoes tag from the closet
function removeTag(name) {

  // removes tag from FiltersDB
  let ind = FiltersDB.UserTags.indexOf(name);
  FiltersDB.UserTags.splice(ind, 1);
  localStorage["FiltersDB"] = JSON.stringify(FiltersDB);

  let i = 0;
  
  // removes tag from all clothing items 
  ClosetDB.forEach(clothing => {
    if (clothing.tags) {
      if (clothing.tags.includes(name)) {
        let ind = clothing.tags.indexOf(name);
        ClosetDB[i].tags.splice(ind, 1);
        localStorage["ClosetDB"] = JSON.stringify(ClosetDB);
      }
    }
    i++

  });

  // removes tag from active Filters
  if (activeFilters.includes(name)) {
    let ind = activeFilters.indexOf(name);
    activeFilters.splice(ind, 1);

  }
}

export default FilterTable;


// STYLING
const FilterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: arial;
  font-size: 14px;
  justify-content: space-between;
  margin-left: 5px;
  height: 100%;
`;

const Ind = styled.div`
  cursor:pointer;   
  width:fit-content;
  user-select: none;
`;

const TagsButton = styled.button`
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
  user-select: none;
  background-color: white;
`;

const DeleteFilter = styled.div`
  cursor:pointer;  
  border: 1px solid black; 
  display: flex;
  width: 11px;
  height: 10px;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Row = styled.div`
  display:flex; 
  justify-content: space-between;
  margin-right: 10px;
  word-break: normal;
`;