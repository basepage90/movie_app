import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history} = this.props;
    if (location.state === undefined) {
        history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
        const state = location.state;
      return <span>{state.trans_title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;


// trans_title,
// trans_subtitle,
// pubDate,
// trans_director,
// trans_actor,
// userRating,
// link,
// HQPoster : state.HQPoster