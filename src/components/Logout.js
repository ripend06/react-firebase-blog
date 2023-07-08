import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate(); //リダイレクト処理
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear(); //ローカルストレージクリア
      setIsAuth(false); //状態変数をfalseで、ログイアウト状態に
      navigate("/login"); //ログインページに、リダイレクト
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout