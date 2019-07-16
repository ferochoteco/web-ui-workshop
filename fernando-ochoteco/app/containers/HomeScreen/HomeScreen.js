import React from 'react';
import PropTypes from 'prop-types';
import TweetCard from 'components/TweetCard';
import './style.scss';
import LoadingIndicator from 'components/LoadingIndicator';

class HomeScreen extends React.PureComponent {
  componentDidMount() {
    const { onGetTweets } = this.props;
    onGetTweets();
  }
  render() {
    const { tweets, loading, error } = this.props;
    return (
      <div className="home-container">
        { loading && <LoadingIndicator /> }
        { 
          tweets && tweets.map((item) => {
            return <TweetCard tweet={item} key={item.id} />
          }) 
        }
      </div>
    );
  }
}

HomeScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};

HomeScreen.defaultProps = {};

export default HomeScreen;
