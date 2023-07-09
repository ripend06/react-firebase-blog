import React, { useEffect, useState } from 'react';
import "./Home.css";
import { auth, db } from '../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'; //コレクションから複数のドキュメントを取得したいので、getDocsをインポート。

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

  const handleDelete = async (id) => { // 引数を受け取る　（id = post.id）
    await deleteDoc(doc(db, "posts", id)); //ドキュメントを削除する deleteDocを使用して。（idはドキュメントid）
    window.location.href = "/"; //リロードしないと、削除されないので、リダイレクト処理させる
  }

  return (
    <div className="homePage">
      {postList.map((post) => { //setPostListに格納したデータを展開　（postの中に、post.id が含まれてるので使いたい）

        /* タイトル→post.title。投稿→post.postext。ユーザー名→post.author.username。 */
        /* key={post.id} キーを設定する。エラー出るので。投稿のIDをキーとして設定 */
        /* onClick={ () => handleDelete(post.id) } 削除ボタンを押すと、handleDelete関数を実装　引数に、post.idを渡す */
        /* {post.author.id === auth.currentUser.uid && ()}
            ・post.author.idは、各ユーザーID。（map関数で展開してるので、一個一個見てる。）
            ・auth.currentUser.uidは、各投稿のID。
            ・三項演算子で記述。　もし各ユーザーIDが投稿IDと一致したら、削除ボタンを表示させる。
        */
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postext}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={ () => handleDelete(post.id) }>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>

  );
};

export default Home