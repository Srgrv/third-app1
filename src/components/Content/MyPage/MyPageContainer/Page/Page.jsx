import React from "react";
import classes from "./Page.module.css";
import Status from "./Status/Status";

const Page = (props) => {
  const posts = props.posts.map((item, index) => {
    return (
      <div className={classes.posts} key={index}>
        <div>
          <img src={props.avatar} alt="" />
        </div>
        <div>{item}</div>
      </div>
    );
  });

  return (
    <div className={classes.page}>
      <Status status={props.status} updateStatus={props.updateStatus} />
      <div>{props.aboutMe}</div>
      <div>
        <img src={props.photos} alt="" />
      </div>
      <div>
        <input
          value={props.inputValue}
          onChange={(e) => props.change(e.target.value)}
        />
        <button onClick={props.add}>add</button>
      </div>
      <div>{posts} </div>
    </div>
  );
};

export default Page;
