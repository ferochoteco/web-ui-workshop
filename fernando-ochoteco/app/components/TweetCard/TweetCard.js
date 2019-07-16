import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { 
  RetweetIcon, 
  LikeIcon, 
  CommentIcon
} from '../../components/Icons';
import { getDateDifference } from "helpers/";

import CounterActionBtn from '../../components/CounterActionBtn/CounterActionBtn';

const comment_count = 0;

const TweetCard = ({ tweet }) => (
  <div className="tweet-card">
    <div className="user-photo">
      <img src={tweet.user.profile_image_url} />
    </div>
    <div className="tweet-info">
      <div className="top-content">
        <span className="user-name"><b>{tweet.user.name}</b></span>
        <span className="user-screen-name">{tweet.user.screen_name}</span>
        <span className="timestamp">{getDateDifference(tweet.created_at)}</span>
      </div>
      <div className="mid-content">
        <p>{tweet.text}</p>
      </div>
      <div className="bottom-content">
        <CounterActionBtn count={tweet.favorite_count}>
          <LikeIcon />
        </CounterActionBtn>
        <CounterActionBtn count={tweet.retweet_count}>
          <RetweetIcon />
        </CounterActionBtn>
        <CounterActionBtn count={comment_count}>
          <CommentIcon />
        </CounterActionBtn>
      </div>
    </div>
  </div>
);

TweetCard.propTypes = {
  tweet: PropTypes.object.isRequired
};

TweetCard.defaultProps = {};

export default TweetCard;
