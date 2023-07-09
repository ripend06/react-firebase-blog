import React from 'react';
import { Link } from "react-router-dom"; //リーティング設定の Linkコンポーネントを読み込む
import "./Navber.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //fortawesomeアイコン
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons' //fortawesomeアイコン 各アイコン

/* Linkコンポーネント to=リンク先 */
const Navbar = ({isAuth}) => { //ログイン・ログアウトの状態変数を、propsで受け取る

  /* 三項演算子で、isAuthがtrueの場合　isAuthがfalseの場合の処理。ログイン・ログアウトの文字変化 */
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </Link>
          <Link to="/creatpost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
        </>
      )}

    </nav>
  )
}

export default Navbar