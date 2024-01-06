import React from "react";

function Contact() {
  return (
    <div className="bg-black h-screen w-full flex flex-col justify-center items-center">
      <p className="font-bold text-white text-5xl inline">Contact Me</p>
      <form className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="my-5"
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="mb-5"
        ></input>

        <button className="bg-white">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
