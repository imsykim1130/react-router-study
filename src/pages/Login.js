import { useState } from "react";

const Login = ({ history }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const warning = document.querySelector(".warning");

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginConfirm = (e) => {
    e.preventDefault();

    try {
      const registeredPassword = JSON.parse(localStorage.getItem(id)).password;
      if (password === registeredPassword) {
        history.push(`/main?id=${id}`);
      } else {
        warning.innerText = "비밀번호가 틀렸습니다.";
        setPassword("");
      }
    } catch (e) {
      warning.innerText = "존재하지 않는 아이디입니다.";
      setId("");
      setPassword("");
    }
  };

  return (
    <form action="">
      <h1>Log in</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="id"
        value={id}
        onChange={idChangeHandler}
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="password"
        value={password}
        onChange={passwordChangeHandler}
      />
      <button onClick={loginConfirm}>log in</button>
      <p className="warning"></p>
    </form>
  );
};

export default Login;
