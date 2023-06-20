import React, { useState } from 'react';
import "./CreatPost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';


const CreatPost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

    // console.log(title);
    // console.log(postText);

    const navigate = useNavigate();

    const creatPost = async () => {
      await addDoc(collection(db, "posts"), {
        title: title,
        postext: postText,
        author: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      });

      navigate("/");
    };

  return (
    <div className="creatPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={creatPost}>投稿する</button>
      </div>
    </div>
  )
}

export default CreatPost