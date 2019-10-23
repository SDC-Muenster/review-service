import React from 'react';
import Review from './Review.jsx';
import ViewSelector from '../ViewSelector/ViewSelector.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.currentView = this.currentView.bind(this);
  }

  currentView(selected = 1) {
    if (this.props.reviews) {
      if (this.props.reviews.length > 7) {
        var max = selected * 7;
        var min = max - 7;
        this.setState({reviewList: this.props.reviews.slice(min, max), 'selected': selected});
      } else {
        this.setState({reviewList: this.props.reviews, 'selected': selected});
      }
    }
  }

  componentDidMount() {
    this.currentView();
  }

  render(){
    if (this.state.reviewList) {
      return(
        <div>
          {this.state.reviewList.map((el, i) => <Review key={i} num={i} review= {el}/>)}
          <ViewSelector
            currentView={this.currentView}
            reviewCount={this.props.reviews.length}
            selected={this.state.selected}
          />
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default ReviewList;