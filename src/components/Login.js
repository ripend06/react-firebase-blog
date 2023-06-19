import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Login = ({ setIsAuth }) => {
  const navigate = useNavigate(); //リダイレクト処理
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      //console.log(result);
      localStorage.setItem("isAuth", true); //ローカルストレージに保存
      setIsAuth(true);
      navigate("/"); //リダイレクト先
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