import React, { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [sneakin, setSneakin] = useState(0);
  return (
    <div className="navbar">
      <span
        style={{ cursor: "pointer" }}
        className="logo"
        onClick={() => {
          setSneakin(sneakin + 1);
          console.log(sneakin);
        }}
      >
        {sneakin === 5 ? "Made by @jagritx" : "PeerSilk"}
      </span>
      <div className="user">
        <span>{currentUser.displayName}</span>
        <img src={currentUser.photoURL} alt="-" />
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
