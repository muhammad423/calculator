let enter = ""
let btnEl = document.querySelectorAll('.btn')

Array.from(btnEl).forEach((button) =>{
    button.addEventListener('click', (e) => {
    if(e.target.innerHTML == "="){
        enter = eval(enter)
        document.querySelector('.input').value = enter
    }else if (e.target.innerHTML == "C"){
        enter = ""
        document.querySelector('.input').value = enter}
    else{
    console.log(e.target)
    enter = enter + e.target.innerHTML
    document.querySelector('.input').value = enter
    }

    })
})