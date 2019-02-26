import axios from 'axios'
import toastr from 'toastr'

export function getSelfProfile() {
    let url = "http://api.github.com/users/hectorbliss"
    return axios.get(url)
        .then(res => {
            toastr.info("Tus datos se cargaron! t(*_*t)")
            return res.data
        })
        .catch(e => {
            toastr.error("No se pudo cargar, intenta de nuevo")
            return e
        })
}