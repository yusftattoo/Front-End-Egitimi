//! Local Storage Islemleri:
//! Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.

let user = {userName: "hakanyalcinkaya", isActive: true}
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user) )


let userInfo = localStorage.getItem('userInfo') //! bilgiyi al komutu
userInfo = JSON.parse(userInfo)
console.log(userInfo)


//! 2. egzersiz:
let items = [1,2,3, user]
//! localStorage.setItem('newItems', items) // hatali 
localStorage.setItem('newItems', JSON.stringify(items))

let newItems = JSON.parse( localStorage.getItem('newItem') ) 