import React from "react";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer"; 

const Home = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-yellow-800 to-yellow-900 text-white overflow-hidden">
      <Sidebar />
      <MessageContainer /> {/* This will now fill remaining space */}
    </div>
  );
};
export default Home;
