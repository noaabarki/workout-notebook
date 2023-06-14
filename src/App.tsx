import "./variables.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { OverviewPage } from "./app/overview/OverviewPage";
import React from "react";
import { Sidebar } from "./app/shared/components/layout/Sidebar";
import styled from "styled-components";

function App() {
  return (
    <Layout className="app">
      <Sidebar />
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/settings" element={<div>Settings</div>} />
            <Route path="/" element={<OverviewPage />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 3fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar main";
`;

const Main = styled.div`
  grid-area: main;
`;

export default App;
