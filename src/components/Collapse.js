// 1.constructor --> state initialization
// 2.render work
// 3.onClick eventi çalıştı 
// 4.showMore worked
// 5.setState state nesnesini guncelledi --> 6.triggered render
// 7.render metodu guncel JSX i sayfada gosteriyor

import React from "react";

class Collapse extends React.Component {
  constructor() {
    console.log("constructor olusturuldu...");
    super();
    this.state = {
      showContent: false,
    };
  }
  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  componentDidMount() {
    console.log("Component Olusturuldu");
  }

  componentDidUpdate() {
    console.log("Component Guncellendi");
  }

  render() {
    console.log("render calisti...");
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
