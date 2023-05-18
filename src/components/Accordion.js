import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function Accordion({ question, answer }) {
  const [hidden, setHidden] = useState(true)
   const toggleFaq = () => {
    setHidden(!hidden)
   }


  return (
    <div className="mb-5 border-b-2 pb-5">
      <div className="flex justify-between text-xl">
        <div>
        <p>{question}</p>
        </div>
        <div onClick={()=>toggleFaq()} className="bg-[#89437e] p-2 h-8 cursor-pointer">
          <ChevronDownIcon className="w-5 text-white" />
        </div>
      </div>
      <div></div>
      {!hidden && ( <p>{answer}</p>) }
     
    </div>
  );
}

export default Accordion;
