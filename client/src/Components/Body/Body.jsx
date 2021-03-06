import React, {Component} from 'react';
import Review from './ReviewList/Review.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import styles, {main} from './Body.css';

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    var reviews = this.props.house.user_reviews;
    if (reviews) {
      return (
      <div className={main}>
        <ReviewList reviews={reviews}/>
      </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Body;