import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

class CoinSearch extends Component {
  state = {
    selectedOption: null,
    options: []
  };
  componentDidMount() {
    axios.get('/api/cryptocurrencies').then(res => {
      const options = [];
      res.data.forEach(coin => {
        options.push({
          value: coin.id,
          label: coin.name
        });
      });
      this.setState({
        options
      });
    });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <Select value={selectedOption} onChange={this.handleChange} options={this.state.options} />
    );
  }
}

export default CoinSearch;