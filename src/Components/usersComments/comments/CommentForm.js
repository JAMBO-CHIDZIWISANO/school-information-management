import { useState } from "react";
import Comments from './Comments'
import Comment from './Comment'


import './index.css'

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  // fetching and displying comments from database

  // const PostList = () => {
  //   const [data, setData] = useState([]);
  
  //   const loadData = async () => {
  //       const response = await axios.get("http://localhost:4000/api/smis/getAllPosts");
  //       setData(response.data);    
  //   };
  //   // refresh window
  
  //       useEffect(() => {
  //           loadData();
  //       }, []);
  
   
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <div>
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
        <div></div>
    </div>
  );

};

export default CommentForm;
