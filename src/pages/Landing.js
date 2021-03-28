import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h1>랜딩 페이지</h1>
      <Link to="/login">로그인</Link>
      <Link to="/register">회원가입</Link>
    </>
  );
};

export default Landing;
