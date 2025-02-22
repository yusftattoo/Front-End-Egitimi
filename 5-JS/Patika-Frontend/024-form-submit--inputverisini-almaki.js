//! FORM SUBMIT:

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() //! default islemi engellendi
    console.log("islem gerceklesti")
}


//! INPUT icindeki degeri(value) almak

let formDOM1 = document.querySelector("#userForm")
formDOM1.addEventListener('submit', formSubmit)


function formSubmit(event) {
    event.preventDefault() // default islemi engelledik...
    console.log("islem gerceklesti")
    
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)
}