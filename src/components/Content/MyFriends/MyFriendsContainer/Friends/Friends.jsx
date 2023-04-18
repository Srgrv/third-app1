import React from "react";
import classes from "./Friends.module.css";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
  return (
    <div className={classes.friends}>
      {props.users.map((item, index) => {
        return (
          <div className={classes.users} key={index}>
            <NavLink to={`/page/${item.id}`} className={classes.image}>
              <img
                src={
                  item.photos.small
                    ? item.photos.small
                    : "../../../../../logo192.png"
                }
                alt=""
              />
            </NavLink>
            <div className={classes.button}>
              {item.followed ? (
                <button
                  disabled={props.following.some((id) => id === item.id)}
                  className={classes.button}
                  onClick={() => {
                    props.unfollowThunk(item.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  className={classes.button}
                  disabled={props.following.some((id) => id === item.id)}
                  onClick={() => {
                    props.followThunk(item.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
            <div className={classes.name}>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
