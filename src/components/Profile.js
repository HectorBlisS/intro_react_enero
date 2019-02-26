import React, { Component } from 'react'

class Profile extends Component {

    render() {
        let { avatar_url, name } = this.props
        return (
            <div>
                <img width="100" src={avatar_url} alt="lol" />
                <h1>{name}</h1>
            </div>)
    }
}

export default Profile