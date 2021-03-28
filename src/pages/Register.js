import React, { useState } from "react";

import registerNewAccount from "../utils/functions";

const Register = ({ history }) => {
  const [newId, setNewId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const warning = document.querySelector(".warning");

  const registerHandler = (e) => {
    e.preventDefault();

    if (localStorage.getItem(newId)) {
      warning.innerText = "이미 존재하는 아이디 입니다.";
    } else {
      const userInfo = {};
      userInfo.password = newPassword.toString();
      registerNewAccount(newId, userInfo);
      history.push("/");
    }
  };

  return (
    <form>
      <h1>회원가입 하세요</h1>
      <input
        type="text"
        value={newId}
        onChange={(e) => setNewId(e.target.value)}
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={registerHandler}>가입</button>
      <div className="warning"></div>
    </form>
  );
};

export default Register;
