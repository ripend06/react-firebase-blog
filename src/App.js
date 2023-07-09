import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" //ルーティング設定に必要なものをインポート　(BrowserRouter → Router　わかりやすいように変換)
import Home from './components/Home'; //ホーム コンポーネント
import CreatPost from './components/CreatPost'; //記事機能コンポーネント
import Login from './components/Login'; //ログイン コンポーネント
import Logout from './components/Logout'; //ログアウト コンポーネント
import Navbar from './components/Navbar'; //ナビゲーション コンポーネント
import { useState } from 'react'; //useStateを使用

function App() {
  const [isAuth, setIsAuth] = useState(false); //状態変数を使用　初期はfalseで、ログインしてない状態に

  /* Router > Routes > Route 記述は、決まりみたいなもの　*/
  /* path=リンクのpathを定義 。element=読み込むコンポーネント */
  /* setIsAuth={setIsAuth}　→　propsで、Loginコンポーネントに、setIsAuth変数（状態）を渡してる　*/
  /* isAuth={isAuth} ログイン・ログアウトの状態変数を、Navberコンポーネントへ、propsで渡す */
  /* isAuth={isAuth} ログイン・ログアウトの状態変数を、CreatPostコンポーネントへ、propsで渡す */
  return (
    <Router>
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/creatpost" element={<CreatPost isAuth={isAuth} />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
