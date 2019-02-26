import React, { Component } from 'react'

class ProfileForm extends Component {


    state = {
        user: {},
        errors: {},
        users: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //cómo harian para recolectar los datos del form
        // y guardarlos en el state en la llave user?????
        //1.- formamos el objeto
        let user = {
            username: e.target.username.value,
            email: e.target.email.value,
            tel: e.target.tel.value
        }
        //2.- ya que tenemos el obj, lo ponemos en state
        this.setState({ user })
    }

    onChangeName = (e) => {
        let value = e.target.value
        let { user } = this.state
        user.username = value
        this.setState({ user })
        //this.state.user.username = value
        //this.setState(state=>state.user.username = value)
    }

    // hacer otro metodo para el email
    onChangeEmail = (e) => {
        this.setState({ user: { ...this.state.user, ["email"]: e.target.value } })
    }

    //unique onchange alv
    onChange = e => {
        let { user } = this.state
        user[e.target.name] = e.target.value
        this.setState({ user })
        //validar
        let errors = {}
        if (user.username && user.username.length < 7) {
            errors.username = "Te faltan"
        }
        if (user.email && !user.email.includes("@")) {
            errors.email = "Y el arroba?"
        }
        this.setState({ errors })
    }

    agregarUsuario = () => {
        //cojes
        let { user, users } = this.state
        //modificas
        let freeObject = { ...user }
        //users.push(freeObject)
        let array = [...users, { ...user }]
        //devuelves
        this.setState({ users: array })
    }

    render() {
        let { user, errors, users } = this.state
        return (
            <div>
                <h1>{user.username}</h1>
                <h2>{user.email}</h2>
                <h3>{user.tel}</h3>
                <input onChange={this.onChange} placeholder="tu nombre" name="username" type="text" />
                <span style={{ color: "red" }} >{errors.username}</span>
                <br />
                <input onChange={this.onChange} placeholder="tu mail" name="email" type="email" />
                <span style={{ color: "red" }}>{errors.email}</span>
                <br />
                <input onChange={this.onChange} placeholder="tu tel" name="tel" type="number" />
                <span style={{ color: "red" }}>{errors.tel}</span>
                <br />
                <button onClick={this.agregarUsuario} >¡Agregar al carrito!</button>


                <ul>
                    {users.map((el, i) => <li key={i} >{el.username}</li>)}
                </ul>
            </div>
        )
    }
}

export default ProfileForm