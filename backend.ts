




const senhainput = document.querySelector ("#email")
const emailinput = document.querySelector ("#senha")
const cadastrarinput = document.querySelector ("#cadastrar")

cadastrarinput?.addEventListener("click", (e) =>{

    e.preventDefault();

    if(!emailinput){
        console.log(123)
    }
    else if(!senhainput){
        console.log(321)
    }

})
console.log("teste")
