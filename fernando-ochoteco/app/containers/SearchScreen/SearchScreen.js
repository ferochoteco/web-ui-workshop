import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LoadingIndicator from 'components/LoadingIndicator';

class SearchScreen extends React.PureComponent {
  componentDidMount() {
    console.log(this.props);
    debugger;
    const { onGetTrends } = this.props;
    onGetTrends();
  }
  render() {
    const { trends, loading, error } = this.props;
    return (
      <div className="search-container">
        { loading && <LoadingIndicator /> }
        { 
          trends && trends.map((item) => {
            return <p>Hola</p>
          }) 
        }
      </div>
    );
  }
}

SearchScreen.propTypes = {};

SearchScreen.defaultProps = {};

export default SearchScreen;
