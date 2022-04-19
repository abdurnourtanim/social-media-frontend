import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
