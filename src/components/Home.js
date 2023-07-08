import React, { useEffect, useState } from 'react';
import "./Home.css";
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'; //コレクションから複数のドキュメントを取得したいので、getDocsをインポート。

const Home = () => {
  const [postList, setPostList] = useState([]); //状態変数　取得してきたfirebaseのデータを保存したいので利用。初期値は空に。

  useEffect(() => { //リロードしたときに一度だけ、データを取得したいので、useEffectで第二引空に設定 (※ここでasync記述しても起動しない)
    const getPosts = async () => { //※ useEffectで、asyncを利用する場合は、もう一度中に関数を作成する必要あり
      const data = await getDocs(collection(db, "posts")); //getDocsで取得を取得
      // console.log(data); //かなり階層が深い　よくわからないオブジェクトを取ってきている
      // console.log(data.docs); //docsで絞れるが、まだかなり深い
      // console.log(data.docs.map((doc) => ({ doc }))); //map関数でオブジェクトを一個一個展開してみてる
      // //console.log(data.docs.map((doc) => ({ ...doc })));
      // console.log(data.docs.map((doc) => ({ ...doc.data()}))); //★スプレッド構文で、オブジェクトを展開してみて、deta()関数を指定すると、中身を簡単に取得できる。（deta()関数はfirebaseに既存であるもの）
      // console.log(data.docs.map((doc) => ({ ...doc.data().author.username })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //スプレッド構文でID属性を追加。（...[オブジェクト], [属性名]:[属性]）。setPostListに格納
    };
    getPosts(); //getPosts関数起動
  }, []);
  return (
    <div className="homePage">
      {postList.map((post) => { //setPostListに格納したデータを展開
        /* タイトル→post.title。投稿→post.postext。ユーザー名→post.author.username。 */
        return (
          <div className="postContents">
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postext}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>

  );
};

export default Home