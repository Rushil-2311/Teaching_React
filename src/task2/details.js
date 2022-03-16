import React from 'react'
import {DetailState} from '../task2/context.js'
import Data from "../task2/data.js";
import "../App.css";

const Details = () => {
  const { detail } = DetailState();
  console.log(detail);
  return (
    <>
       {detail.map((item) => {
       return <Data item={item} key={item.id} />;
      })}
    </>
  )
}

export default Details