const url = new URLSearchParams(window.location.search)

const user = url.get("user")

function home() {
    window.location.href = `/`;
}

function ranking() {
    window.location.href = `/ranking`;
}

function perfil() {
    if (localStorage.length > 0) {
        window.location.href = `/perfil`;
    } else {
        window.location.href = `/cadastro`;
    }
}

function login() {
    window.location.href = `/login`;
}

function cacaNiquel() {
    window.location.href = `/cacaniquel`;
}

function deslogar(){
    window.location.href = `/`;
}