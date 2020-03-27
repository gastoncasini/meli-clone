import React, { useState } from "react";
import { connect } from "react-redux";
import { doLoginAction, doLogoutAction } from "../../redux/userDuck";
import Card from "../../components/Card";
import "./styles.css";

function Message({ msg, type }) {
  return <div className="message">{msg}</div>;
}

function LoginModule({ doLoginAction, error }) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const mapHooks = {
    username: setUsername,
    password: setPassword
  };

  function handleChange(e) {
    const { name, value } = e.target;
    mapHooks[name](value);
  }

  function login(e) {
    e.preventDefault();
    doLoginAction(username, password);
  }

  return (
    <form className="form" onSubmit={login}>
      {error && <Message msg={error} type={"error"} />}
      <div className="input-block">
        <label htmlFor="username" className="input-block__label">
          username
        </label>
        <input
          className="input-block__input"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>

      <div className="input-block">
        <label htmlFor="password" className="input-block__label">
          password
        </label>
        <input
          className="input-block__input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={"button button--yellow"}>
        login
      </button>
    </form>
  );
}

function LoginPage({ loggedIn, user, doLogoutAction, ...rest }) {
  function logout() {
    doLogoutAction();
  }

  if (loggedIn) {
    return (
      <Card>
        <div className="login-page">
          <h1 className="title">Welcome {`${user}`}</h1>

          <button className={"button button--grey"} onClick={logout}>
            Logout
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="login-page">
        <h1 className="title">Login Page</h1>
        <LoginModule {...rest} />
      </div>
    </Card>
  );
}

function mapStateToProps({ user }) {
  return {
    error: user.error,
    loggedIn: user.loggedIn,
    user: user.user
  };
}

export default connect(mapStateToProps, { doLoginAction, doLogoutAction })(
  LoginPage
);
