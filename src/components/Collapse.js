// ilk constructor --> state initialization
// render metodu ilk defa calisti
// onClick eventi çalıştı
// setState state nesnesini guncelledi --> triggered render
// render metodu guncel JSX i sayfada gosteriyor

import React from "react";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showContent: false
    }
  }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )}
        </button>

        {this.state.showContent ? (
          <div className="collapse show">
            {React.Children.map(this.props.children, (children) => children)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
