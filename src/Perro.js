import React from "react";
class Perro extends React.Component {
  state = {
    perro: []
  };
  async componentDidMount() {
    await this.fetchPerro();
  }

  fetchPerro = async () => {
    let result = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await result.json();
    this.setState({ data });
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>A continuacion... un perro:</h1>
        <img src={this.state.perro.message} alt="a dog"></img>
      </div>
    );
  }
}

export default Perro;
