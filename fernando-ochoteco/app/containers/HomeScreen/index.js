import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getTweets } from './actions';
import { 
  makeSelectTweets,
  makeSelectLoading,
  makeSelectError 
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomeScreen from './HomeScreen';

const mapDispatchToProps = (dispatch) => ({
  onGetTweets: () => dispatch(getTweets())
});

const mapStateToProps = createStructuredSelector({
  tweets: makeSelectTweets(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomeScreen);
export { mapDispatchToProps };

