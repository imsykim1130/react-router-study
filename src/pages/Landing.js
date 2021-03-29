import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      <Link to="/login">로그인</Link>
      <Link to="/register">회원가입</Link>
    </div>
  );
};

export default Landing;
