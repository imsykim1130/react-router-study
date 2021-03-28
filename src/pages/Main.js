import queryString from "query-string";
import { Link } from "react-router-dom";

const Main = ({ location }) => {
  const { id } = queryString.parse(location.search) || "비회원";
  return (
    <div>
      <h1>환영합니다 {id} 님!</h1>
      <Link to="/">로그아웃</Link>
    </div>
  );
};

export default Main;
