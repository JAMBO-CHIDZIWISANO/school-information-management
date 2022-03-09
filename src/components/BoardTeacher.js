import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
const BoardTeacher = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getTeacherBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div >
      {/* <header>
        <h3>{content}</h3>
        
      </header> */}

      <div className="h-screen mx-auto antialised flex justify-between">
        
        <div className="h-screen bg-gray-900 fixed">

          <h1 className="text-white font-black py-4">SMIS</h1>

          <div className="px-4 space-y-2">
            {/* home*/}
            <div className="relative flex items-center hover:text-gray-200 hover:bg-gray-800 space-y-2 rounded-md p-2 cursor-pointer">
              
               Home
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardTeacher;