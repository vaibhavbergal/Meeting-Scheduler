import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  return (
    <div className="fixed z-50 px-3 py-3 rounded-full shadow-md cursor-pointer hover:scale-105 bottom-6 right-8 w-fit bg-slate-400">
      <FontAwesomeIcon icon={faComments} className="text-xl" color="white" />
    </div>
  );
};

export default Chatbot;
