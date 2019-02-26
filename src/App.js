import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import axios from 'axios'
import toastr from 'toastr'

let loader = "http://www.ciser.com.br/chefe-secreto-ciser/site/themes/chefe-secreto/public/images/loading.gif"

class App extends Component {

  state = {
    userInfo: null,
    fetched: false
  }

  componentDidMount() {
    let url = "http://ap.github.com/users/hectorbliss"
    axios.get(url)
      .then(res => {
        toastr.info("Tus datos se cargaron! t(*_*t)")
        this.setState({ userInfo: res.data, fetched: true })
      })
      .catch(e => {
        toastr.error("No se pudo cargar, intenta de nuevo")
      })
  }

  render() {
    let { fetched, userInfo } = this.state
    return (
      <div>

        {fetched && <Profile {...userInfo} />}

        {fetched || <img src={loader} />}
      </div>
    );
  }
}

export default App;
