import React, { useState } from "react";
import { connect } from "react-redux";
import { doLoginAction, doLogoutAction } from "../../redux/userDuck";
import Card from "../../components/Card";
import "./styles.css";

function Message({ msg, type }) {
  return <div className="message">{msg}</div>;
}

function Login({ doLoginAction, doLogoutAction, error, loggedIn, user }) {
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

    setPassword("");
    setUsername("");
  }
  function Logout() {
    doLogoutAction();
  }

  if (loggedIn) {
    return (
      <Card>
        <div className="login-page">
          <h1 className="title">Login page</h1>

          <p>Welcome {`${user}`}</p>

          <button className={"button button-grey"} onClick={Logout}>
            Logout
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="login-page">
        <h1 className="title">Login page</h1>

        <form className="form" onSubmit={login}>
          {error && <Message msg={error} type={"error"} />}
          <div className="input-block">
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>

          <div className="input-block">
            <label htmlFor="password">password</label>
            <input
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
  Login
);
