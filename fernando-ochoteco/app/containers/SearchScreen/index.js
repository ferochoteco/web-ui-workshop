import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getTrends, getSearchResults } from './actions';
import { 
  makeSelectTrends,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocations 
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import SearchScreen from './SearchScreen';

const mapDispatchToProps = (dispatch) => ({
  onGetTrends: () => dispatch(getTrends()),
  // onSearchClick: () => dispatch(getSearchResults(value))
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  locations: makeSelectLocations(),
  error: makeSelectError(),
  trends: makeSelectTrends()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'search', reducer });
const withSaga = injectSaga({ key: 'search', saga });

export default compose(withReducer, withSaga, withConnect)(SearchScreen);
export { mapDispatchToProps };

