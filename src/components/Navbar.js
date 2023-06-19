import React from 'react';
import { Link } from "react-router-dom";
import "./Navber.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム</Link>
      <Link to="/creatpost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿</Link>
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        ログイン</Link>

    </nav>
  )
}

export default Navbar