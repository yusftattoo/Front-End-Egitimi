// Function bolum sonu calismasi

let counter = 0
let counterDOM = document.querySelector(`#counter`)
let increaseDOM = document.querySelector(`#increase`)
let decreaseDOM = document.querySelector(`#decrease`)

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent )
decreaseDOM.addEventListener("click", clickEvent )

function clickEvent() {
    console.log(this.id)
    if (this.id == "increase") {
        counterDOM.innerHTML = counter += 1
    } else {
        counterDOM.innerHTML = counter -= 1
    }
}

//! daha kisa kod yazimi
//! function clickEvent() { itibari ile 
//!     console.log(this.id) -- 
//!     this.id =="increase" ? counter += 1 : counter -= 1
//!     counterDOM.innerHTML = counter 
//! } id uzerinde islem yapilirken click islemi ile  increase geliyorsa 1 arttır degilse counter 1 düsür komutu verildi. 