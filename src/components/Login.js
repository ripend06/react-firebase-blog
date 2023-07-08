import { signInWithPopup } from 'firebase/auth'; //Googleログイン機能 利用のため、signInWithPopupをインポート
import React from 'react';
import { auth, provider } from '../firebase'; //認証機能利用するために、auth, providerインポート
import { useNavigate } from 'react-router-dom'; //リダイレクトするために　useNavigate　をインポート


const Login = ({ setIsAuth }) => { //引数で、setIsAuth、をprposで、受け取ってる
  const navigate = useNavigate(); //リダイレクト処理 navigateの変数に格納
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => { //ポップアップログイン機能の記述の雛形
      //console.log(result);
      localStorage.setItem("isAuth", true); //ローカルストレージに保存  localStorage.setItem("キー名", true);
      setIsAuth(true); //状態変数で、ログイン状態をtrueに
      navigate("/"); //リダイレクト先 navigate関数起動
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login