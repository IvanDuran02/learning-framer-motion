import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-16">
      <h1 className="text-white">This is the Home Screen.</h1>
      <div>
        <Link
          to="/modal"
          className="flex text-center justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:scale-110 ease-linear transition-transform"
        >
          <h1 className="underline font-bold">ModalScreen</h1>{" "}
          <p className="text-white pt-2 pl-2">{`<-- Click me!`}</p>
        </Link>
      </div>
    </div>
  );
}
