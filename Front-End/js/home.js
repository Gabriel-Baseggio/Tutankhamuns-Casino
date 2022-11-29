const url = new URLSearchParams(window.location.search)

const user = url.get("user")

function ranking(){
    window.location.href = `/ranking`;
}

function perfil(){
    window.location.href = `/perfil`;
}

function cacaNiquel(){
    window.location.href = `/cacaniquel`;
}