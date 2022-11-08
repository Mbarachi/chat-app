import React from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (error) => {
          // Handle unsuccessful uploads
          setErr(err)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL
            })
            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hammer Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong!</span>}
        </form>
        <p>
          You have an account?
          <a href="">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
