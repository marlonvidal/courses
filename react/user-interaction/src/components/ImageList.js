import React from "react";

class ImageList extends React.Component {
  constructor(props) {
    super(constructor);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
      this.imageRef.current.addEventListener('load', this.alterSpan)
  }

  alterSpan = () => {
      var height = this.imageRef.current.clientHeight;
      console.log(height);
  }

  render() {
    if (this.props.images.length > 0) {
      var items = this.props.images.map(img => {
        return <div ref={this.imageRef} key={img.key}>{img.value}</div>;
      });

      return <div>{items}</div>;
    }

    return <div>No Items found</div>;
  }
}

export default ImageList;
