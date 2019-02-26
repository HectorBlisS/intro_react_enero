import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import { getSelfProfile } from './services/githubApi'
import Repo from './components/Repo';
import ProfileForm from './components/ProfileForm';

let loader = "http://www.ciser.com.br/chefe-secreto-ciser/site/themes/chefe-secreto/public/images/loading.gif"
let bliss = "https://miro.medium.com/fit/c/240/240/0*jp3IFb08Sy3_k3N_."

class App extends Component {

  state = {
    userInfo: {
      avatar_url: bliss,
      name: "Héctor BlisS"
    },
    fetched: true,
    repos: [
      {
        id: 1,
        name: "react repo",
        stars: 5
      }, {
        id: 2,
        name: "express repo",
        stars: 100
      }, {
        id: 3,
        name: "mordisco repo",
        stars: 0
      }, {
        id: 4,
        name: "game repo",
        stars: 12
      }
    ]
  }

  componentDidMount() {
    // getSelfProfile()
    // .then(data => {
    //   this.setState({ userInfo: data, fetched: true })
    // })
  }

  render() {
    let { fetched, userInfo, repos } = this.state
    return (
      <div>
        {fetched && <Profile {...userInfo} />}
        {fetched || <img src={loader} />}

        <ProfileForm />

        {repos.map(el => <Repo key={el.id} {...el} />)}

      </div>
    );
  }
}

export default App;
