import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
   constructor(props){
    super(props);
    console.log("props : ",this.props)
    this.state = {
      a:10
    }
  }

  static defaultProps = {
    cardTitle: "Default Card Title"
  }

  componentDidMount() {
    console.log("cdm is worked..")
    this.setState({a:20})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("cdu is worked..")
    console.log("prevProps",prevProps)
    console.log("prevState",prevState);
  }

  shouldComponentUpdate(){
    console.log("shoudl is worked");
    return true;
  }

  componentWillUnmount(){ 
    console.log("cwum is worked...")
  }

  render() {
    console.log("render is worked..")
    return (
      <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardText: PropTypes.string.isRequired
}

export default Card;


