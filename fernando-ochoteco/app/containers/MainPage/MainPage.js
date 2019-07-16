import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from "react-router-dom";
import { updateBodyClass } from "helpers";
import TabContainer from 'components/TabContainer';
import TabNavigator from 'components/TabNavigator';
import './style.scss';


class MainPageContainer extends React.PureComponent {
  state = {
    tabValue: 0
  }

  // componentDidMount() {
  //   updateBodyClass("main-page");
  // }

  // componentWillUnmount() {
  //   updateBodyClass("main-page");
  // }

  handleTabChange = (e, tabValue) => {
    const { history } = this.props;
    this.setState({
      tabValue
    });
    if (tabValue === 0) {
      history.push("/");
    } else if (tabValue === 1) {
      history.push("/search");
    } else if (tabValue === 2) {
      history.push("/settings");
    }
  }

  render() {
    const { tabValue } = this.state;
    return (
      <div className="main-screen">
        <Helmet>
          <title>Title</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <TabNavigator value={tabValue} handleChange={this.handleTabChange} />
        <TabContainer />
      </div>
    );
  }
}

export default withRouter(MainPageContainer);