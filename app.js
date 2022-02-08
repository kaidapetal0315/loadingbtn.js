const loader = document.querySelector('.load')
const btn = document.querySelector('.btn')
const loaderText = document.querySelector('.load-text')

function change(){
    loader.classList.toggle("active")
    loaderText.classList.toggle("text")

    if(btn.textContent == "Load Me"){
        btn.textContent = "Unload Me"
    }
    else{
        btn.textContent = "Load Me"
    }
    

}