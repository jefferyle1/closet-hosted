import React, { useState} from "react";
import styled from 'styled-components'
import FilterTable from './FilterBarSec'
import RenderCloset from './ClosetSec'
import {activeFilters, FiltersDB, ClosetDB} from '../../data/data'

// filterCloset determines what clothes from closet should be displayed given active filters
function filterCloset(activeFilters, closet, setCloset) {

  let filtCloset = closet.slice();
  activeFilters.forEach(filter => {
    filtCloset.forEach(clothing => {

      if (FiltersDB.allSeasons.includes(filter)) {
        filtCloset = filtCloset.filter(clothing => clothing.season.includes(filter));
      } else if (FiltersDB.allColours.includes(filter)) {
        filtCloset = filtCloset.filter(clothing => clothing.colour === filter);
      } else if (FiltersDB.allTypes.includes(filter) && clothing.type !== filter) {
        filtCloset = filtCloset.filter(clothing => clothing.type === filter);
      } else if (FiltersDB.UserTags.includes(filter) && !clothing.tags.includes(filter)) {
        filtCloset = filtCloset.filter(clothing => clothing.tags.includes(filter));
      }
    });
  })
  setCloset(filtCloset);
}


function MainPage(props) {
  const [closet, setCloset] = useState(ClosetDB);

  return (
    <Div >
      {/* filterCloset runs whenver any filter in filterbar is clicked on*/}
      <FilterStyle onClick={() => {filterCloset(activeFilters, ClosetDB, setCloset); }}>
        <FilterTable filters={FiltersDB} />
      </FilterStyle>
      <ClosetStyle>
        <RenderCloset closet={closet} />
      </ClosetStyle>
    </Div>
  );
}

export default MainPage;


// STYLING
const Div = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: left;
 user-select: none;
 height: 90vh;
 width: 95vw;
`;

const FilterStyle = styled.div`
 display: flex;
 flex-direction: column;
 width: 200px;
 border: 2px solid black;
  justify-content: space-between;
  overflow: auto;
`;

const ClosetStyle = styled.div`
 display: flex;
 flex-direction: row;
 border: 2px solid black;
 width: 100%;
 overflow: auto;
`;
