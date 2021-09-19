import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./components/HomePage/HomeMain";
import AddPage from "./components/AddPage/AddMain";
import DetailsPage from './components/ItemDetailsPage/DetailsMain';

function App() {
  return (

    <BrowserRouter>

      <Routes>

        {/* MAIN PAGE */}
        <Route path="/" element={<Page> <Header /> <MainPage /> </Page>} />

        {/* ADD CLOTHING PAGE */}
        <Route path="add" element={<Page> <Header/> <AddPage /> </Page>} />

        {/* UNIQUE CLOTHING DETIALS PAGE */}
        <Route path="item/:id" element={<Page> <Header /> <DetailsPage /> </Page>} />

        {/* INVALID LINK  */}
        <Route path="*" exact={true} element={<Page><Header/> <h2> Sorry, this page doesn't exist!</h2></Page>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// STYLING 
const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin:0px;
  padding: 0px;
  min-height: 98vh;
  user-select: none;
  align-items: center;
  font-family: Helvetica;
`;