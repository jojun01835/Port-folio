import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import React from "react";

const address = () => {
  return (
    <div>
      <p>
        {" "}
        <AiFillPhone /> 010-9486-1835
      </p>
      <p>
        <MdEmail /> jojun01835@gmail.com
      </p>
      <p>
        <AiFillGithub /> <a href="https://github.com/jojun01835">github</a>
      </p>
    </div>
  );
};

export default address;
