import { Home, MenuOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
const BoardAdmin = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getAdminBoard().then(
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
    <div className="container">
      <header className="divide-y ml-18">
        
        
          <div className="uppercase">
            {content}
          </div>

          

         
        
        
        
      </header>
      <div>
     
        </div>
    </div>
  );
};
export default BoardAdmin;