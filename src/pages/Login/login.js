import React, { useRef, useEffect } from "react";

import auth from "../../API/auth";

import Layout from "../../components/Layout/Layout";

const Login = () => {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = e.target.value;
    const data = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    const response = await auth(method, data);
    console.log(
      "🚀 ~ file: login.js ~ line 23 ~ handleSubmit ~ response",
      response
    );

    username.current.value = null;
    email.current.value = null;
    password.current.value = null;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      username: "jose",
      email: "gabx7@hotmail.com",
      password: "pass1234",
      data: { email: "jose@mail.com" },
    };

    const updateUser = async (method, data) => {
      return await auth(method, data);
    };

    console.log(
      "🚀 ~ file: login.js ~ line 32 ~ useEffect ~ updateUser",
      updateUser("Update", data)
    );
  };

  return (
    <>
      <Layout>
        <form>
          <input type="text" placeholder="Nombre de usuario" ref={username} />
          <input type="email" placeholder="Email" ref={email} />
          <input type="password" placeholder="Password" ref={password} />
          <input type="submit" value="SignUp" onClick={handleSubmit} />
          <input type="submit" value="SignIn" onClick={handleSubmit} />
          <input type="submit" value="SignOut" onClick={handleSubmit} />
          <input type="submit" value="Session" onClick={handleSubmit} />
          <input type="submit" value="UserData" onClick={handleSubmit} />
          <input type="submit" value="AuthStateChange" onClick={handleSubmit} />
          <input type="submit" value="ResetPass" onClick={handleSubmit} />
          <input type="submit" value="UpdateUserEmail" onClick={handleUpdate} />
        </form>
      </Layout>
    </>
  );
};

export default Login;
