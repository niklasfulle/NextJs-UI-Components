"use client";
import React from "react";
import CodeBlockDemo from "./CodeBlock";

interface InputBeispiel {
  id: string;
  name: string;
  code: string;
  children: any;
}

const Beispiel: React.FC<InputBeispiel> = ({ id, name, code, children }) => {
  code = `
async function sayHello(name) {
    console.log('Hello', name);
}
`;
  return (
    <div
      id={id}
      className="w-full md:max-w-[40rem] flex flex-col items-center justify-center"
    >
      <div className="">
        <h1 className="md:text-2xl text-xl ">{name}</h1>
        <div className="mb-6 mt-4">
          <p>
            dopaiw dopi ahwd iao whdio awhd ioa whd ioawdh oaiw hd oipawdh da sd
            as d as d
          </p>
        </div>
        <div className="">
          <CodeBlockDemo code={code} language="jsx" />
        </div>
        <div className="mt-4 w-full flex items-center flex-row">{children}</div>
      </div>
    </div>
  );
};

export default Beispiel;
