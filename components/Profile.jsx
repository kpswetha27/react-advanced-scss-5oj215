import React from 'react';
import styles from './Profile.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState([]);
  const getPosts = () => {
    return axios.get(url).then((res) => {
      const filteredData = res.data.filter(
        (data) => data.userId === 1 && data.id <= 2
      );
      setData(filteredData);
    });
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="profile-container">
          {data.map((post, index) => {
            return (
              <div className="profile-inner-container">
                <div className="profile-left">
                  <div className="thumbnail">
                    <img
                      src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaSlpeAtQ_XSYVOS1IG-PiKwFmW2dJeF5uzpe8ZnfBg&s'
                      }
                      width="145px"
                      height="145px"
                    />
                  </div>
                  <div className="profile-link">
                    <img src={'/images/infinity.svg'} />
                    <img src={'/images/in.svg'} />
                    <img src={'/images/path.svg'} />
                  </div>
                </div>
                <div className="profile-right">
                  <p className="name">Ashok Kumar</p>
                  <p className="title">{post.title}</p>
                  <p className="description">{post.body}</p>
                  <div className="follower-details">
                    <div className="follower-details--panel">
                      <p className="count">2423</p>
                      <p className="label">Followers</p>
                    </div>
                    <div className="follower-details--panel">
                      <p className="count">324</p>
                      <p className="label">Following</p>
                    </div>
                    <div className="follower-details--panel">
                      <p className="count">12</p>
                      <p className="label">Projects</p>
                    </div>
                  </div>
                  <div className="action-container">
                    <button className="btn-follow">Follow</button>
                    <button className="btn-message">
                      <span className="message-lock-img-span">
                        <img src={'/images/lock.svg'} />
                      </span>
                      Message
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
