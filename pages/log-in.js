//new login with React
import React, { Component, useState, useCallback } from "react";
import axios from "axios";
import { setCookie } from "nookies";
import { JwtTokenTypeConfiguration } from "aws-sdk/clients/kendra";

export default class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: "",
      password: "",
    };

    axios
      .post("http://localhost:9000/.netlify/functions/sign-up", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // With JWT
    // try {
    //   const response = axios.post(
    //     "http://localhost:9000/.netlify/functions/sign-up",
    //     {
    //       email: "",
    //       password: "",
    //     }
    //   );

    //   setCookie({ res }, "jwt", response.jwt, {
    //     httpOnly: true,
    //     secure: env.NEXTAUTH_UR !== "development",

    //     path: "./signin.js",
    //   });

    //   res.status(200).end();
    // } catch (e) {
      // e.status(400).send(e.response.message[0].messages[0]);
      // consol.log("problem");
    //   console.log("problem");
    // }
  };
  // };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => (this.email = e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <button className="btn btn-primary btn-block">Sign Up</button>
      </form>
    );
  }
}
