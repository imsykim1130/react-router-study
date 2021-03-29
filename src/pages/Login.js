import { useEffect, useState } from "react";
import Input from "../components/Input";

const Login = ({ history }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    return () => {
      history.push(`/main?id=${id}`);
    };
  }, [loginSuccess]);

  const loginBtnClickHandler = (e) => {
    e.preventDefault();
    try {
      if (id && pw) {
        const pwFromDb = JSON.parse(
          localStorage.getItem(id)
        ).password.toString();

        if (pwFromDb && pwFromDb === pw) {
          setLoginSuccess(true);
        } else {
          console.log("다시 입력하세요.");
        }
      } else {
        console.log("빠짐없이 입력해주세요");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form action="">
      <h1>Log in</h1>
      <Input type="text" placeholder="id" value={id} changeHandler={setId} />
      <Input
        type="password"
        placeholder="password"
        value={pw}
        changeHandler={setPw}
      />
      <button onClick={loginBtnClickHandler}>log in</button>
      <p className="warning"></p>
    </form>
  );
};

export default Login;
