import React, { useEffect, useState } from 'react';
import "./CreatPost.css";
import { addDoc, collection } from "firebase/firestore"; //データを格納するためにaddDocをインポート。collectionは必要なものって認識
import { auth } from "../firebase"; //ログインしたときの情報を取得したいから必要 authをインポート
import { db } from "../firebase"; //必要
import { useNavigate } from 'react-router-dom'; //リダイレクトしたいので、useNavigateインポート


const CreatPost = ({ isAuth }) => { //App.jsからpropsでisAuthを受け取る
  const [title, setTitle] = useState(); //タイトルの状態変数　文字を格納するために使用
  const [postText, setPostText] = useState(); //投稿の状態変数 文字を格納するために使用

    // console.log(title); //文字取得確認
    // console.log(postText); //文字取得確認

    const navigate = useNavigate();

    const creatPost = async () => {
      await addDoc(collection(db, "posts"), { // addDocを使用して、「posts」というドキュメントに保存
        title: title, //タイトル情報
        postext: postText, //投稿情報
        author: { //ログインしたときの情報を取得したい firebaseが用意してあるもの
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      });

      navigate("/"); //ホームにリダイレクト
    };

    useEffect(() => {
      if (!isAuth) { //creatpostに行ったときに、ログインしていなければ、ログイン画面にリダイレクト
        navigate("/login");
      }
    });

  /* onChange={(e) => setTitle(e.target.value)} 今打ち込んでる文字をsetTitleに入れてる */
  /* onChange={(e) => setPostText(e.target.value)} 今打ち込んでる文字をsetPostTextに入れてる */
  /* onClick={creatPost} 投稿ボタンでcreatPost関数起動 */
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