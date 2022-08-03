import React from 'react'
import "./Terminal.css"
import { complex } from "../../modules/src/Complex"

let arr: any = Array(10, 0);

console.log(arr);

arr[Symbol.iterator] = function () {
  let i = 0;
  let str = this;
  return {
    next: function () {
      if (i >= str.length) {
        return { done: true };
      }
      const value = str[i] + "a";
      i++;
      return { value, done: false };
    }
  }
}

for (const i of arr) {
  console.log(i);
}

// console.log(arr);

const Terminal = () => {
  return (
    <div className="terminal-container"></div>
  )
}

export default Terminal;