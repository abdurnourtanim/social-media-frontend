import React from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
};

export default Home;
