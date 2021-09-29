import React from "react";
import auth from "./auth";

export default function AppLayout(props) {
  return (
    <div>
      <h1>App Layout</h1>
      <button className="btn btn-danger"
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}
