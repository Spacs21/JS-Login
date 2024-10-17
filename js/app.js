const form = document.querySelector(".login")
const inpUsername = document.querySelector(".content input[type=text]")
const inpPassword = document.querySelector(".content input[type=password]")
const BASE_URL = "https://fakestoreapi.com"
form.addEventListener("submit", e =>{
    e.preventDefault()
    let user = {
        username: inpUsername.value,
        password: inpPassword.value
    }
    fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            return res.json()
        }
        throw Error("username or password is incorrect")
    })
    .then(res => {
        console.log({res});
        localStorage.setItem("accessToken", res.token)
        open("/pages/profile.html","_self")
    })
    .catch(err => {
        console.log(err);
        alert(err.message)
    })
})

const burger = document.querySelector('.burger');