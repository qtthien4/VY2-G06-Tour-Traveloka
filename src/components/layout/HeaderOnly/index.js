import Header from "components/Header";
import { AuthContext } from "context/AuthProvider";
import React, { useContext, useEffect, useState } from "react";

export default function HeaderOnly({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  //handleOnclickXperience

  useEffect(() => {
    setUser(user);
  }, [user]);
  // useEffect(()=>{

  return (
    <div>
      <Header user1={user} />
      <div className="contained">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
