import React from "react";
import { PropsCardBase } from "./PropsCardBase";

const CardBase = (props: PropsCardBase) => {
  return (
    <div className="flex relative cursor-pointer items-center justify-center gap-3 w-72 h-24 border-sky-500 p-5 border border-sm rounded-lg">
      <h2 className="text-xl absolute -top-3 bg-white w-36 text-center">
        Pokemon
      </h2>
      <span className="truncate">
        {
          props.name
        }
      </span>
    </div>
  )
}

export default CardBase;