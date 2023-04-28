import React from 'react';
import datafetching from './api';
import Cards from './card';
import Countries from './CountryPicker';
import styles from './App.module.css';
import image from './images/image.png';
import flame from './images/flame.gif';
import { Button, TextField } from '@material-ui/core';

class App extends React.Component {

  state = {
    dataS: { positive:28714654 , negative:74450990 }
  }

  async componentDidMount() {
    const data = await datafetching(this.dateS);
    this.setState({ data });
  }

  handleCountryChange = async (date) => {
    const data = await datafetching(date);
    console.log(data);
    this.setState({dataS: data});
  }
  
  render() {
    const { dataS } = this.state;
    return (
      <div>
        <img className={styles.image}  style={ { opacity:0.9 }} src={image} alt="COVID-19" />  <br />  <br />
        <Cards data={dataS} />
        <div style={ { display: 'flex' , justifyContent: 'center' , alignItems: 'center' } }>
        <p> Select a Date : &nbsp;</p>
        <Countries handleCountryChange={this.handleCountryChange} /> <br /> <br />
        </div>
        <img src={flame} alt="Graph" />
      </div>
    );
  }
}


export default App;
