import React, { useState } from "react";
import call from "../images/ic_baseline-phone.svg";
import message from "../images/ic_outline-message.svg";
import dmessage from "../images/darkmessage.svg";
import contact from "../images/contact.svg";
import "../App.css";
const Home = () => {
  const [name, setname] = useState("");
  const namehandler = (e) => {
    setname(e.target.value);
  };
  const [text, settext] = useState("");
  const texthandler = (e) => {
    settext(e.target.value);
  };
  const [email, setemail] = useState("");
  const emailhandler = (e) => {
    setemail(e.target.value);
  };
  const formhandler=(e)=>{
    e.preventDefault()
    setemail("")
    setname("")
    settext("")
  }
  return (
    <>
      <div className="md:mt-12 md:ml-32 mt-4 ml-6  ">
        <h1 className="md:text-5xl text-4xl mb-4 uppercase font-bold">Contact Us</h1>
        <p className="md:w-2/3   text-gray-700">
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className="flex md:flex-row  md:gap-10">
        <div className="md:ml-32 ml-6">
          <div className="flex md:flex-row flex-col md:gap-8 gap-3 mt-8 mb-5">
            <button className="bg-black flex items-center gap-1 w-8/12 md:w-auto uppercase justify-center px-4 py-2 text-white rounded hover:scale-95">
              <img src={message} alt="" /> Via support chat{" "}
            </button>
            <button className="bg-black flex items-center gap-1  w-8/12 md:w-auto uppercase justify-center px-4 py-2 text-white rounded hover:scale-95">
              <img src={call} alt="" /> Via call{" "}
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center gap-2 w-64 md:w-11/12  font-bold uppercase text-black bg-transparent border-2  border-black px-4 py-2 hover:scale-105">
              <img src={dmessage} className="text-black" alt="" />
              via email form
            </button>
          </div>
          <div className=" mt-5  w-96 ">
            <form onSubmit={formhandler} className="flex flex-col md:ml-4 ">
              <label className="font-semibold name bg-white " htmlFor="name">
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                className="py-1 md:w-10/12 w-8/12 px-1 border-2 border-gray-700 mb-5  focus:outline-none focus:border-blue-500"
                name="name"
                placeholder="Enter Name"
                value={name} onChange={namehandler}
              />
              <label
                className="font-semibold absolute left-44 email bg-white "
                htmlFor="emailfield"
              >
                {" "}
                E-Mail{" "}
              </label>
              <input
                type="email"
                className="py-1 md:w-10/12 px-1 w-8/12 border-2 border-gray-700 mb-4  focus:outline-none focus:border-blue-500"
                name="emailfield"
                placeholder="Enter Email"
                value={email} onChange={emailhandler}
              />
              <label
                htmlFor="textfield"
                className="text font-semibold absolute left-44 email bg-white "
              >
                TEXT
              </label>
              <textarea
                name="textfield"
                className="py-1 md:w-10/12 w-8/12 px-1 border-2 border-gray-700  focus:outline-none focus:border-blue-500"
                placeholder="Write"
                rows="4"
                value={text} onChange={texthandler}
              ></textarea>
              <button className="bg-black text-white w-8/12 font-bold md:w-40 md:ml-36 hover:scale-95 mt-3 rounded-md py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="p-0 ">
          <img  className="image md:block hidden" src={contact} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
