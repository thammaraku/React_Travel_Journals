// import React, {useState} from "react";
import React from "react";
// import API  from "../utils/API";
// import AuthManager from "../utils/AuthManager";

function Oauth() {

  // const [isUserLoggedIn, undefined] = useState(AuthManager.isAuthenticated());

  // const loadJournals = () => {
  //   API.getJournals().then(response => {
  //     console.log(response.data);
  //   });
  // }

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-4 col-offset-md-4 col-xs-12 mt-5">
        {/* {
            isUserLoggedIn ?
            <a href="http://localhost:3001/google/logout">Logout</a> : */}

        {/* // <a className="btn btn-lg btn-google btn-block btn-outline border rounded" href="http://localhost:3001/google"> */}
        <a className="btn btn-lg btn-google btn-block btn-outline border rounded" href={process.env.REACT_APP_URL && `${process.env.REACT_APP_URL}/google` || "http://localhost:3001/google"}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" style={{ marginRight: '7px', marginBottom: '3px' }} />
                Login With Google
            </a>

        {/* } */}
      </div>
    </div>
  );
}

export default Oauth;
