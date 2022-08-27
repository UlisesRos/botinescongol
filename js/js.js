//Buscar por el input
let input = document.querySelector("input");
let lupa = document.querySelector(".lupa")

lupa.addEventListener("click", function(){
    if(input.value.toLocaleLowerCase() === "nike mercurial vapor"){
        window.location.href = "../pages/producto.html"
        input.value = ""
    }
    else if(input.value.toLocaleLowerCase() === "mercurial vapor"){
        window.location.href = "../pages/producto.html"
        input.value = ""
    }
    else if(input.value.toLocaleLowerCase() === "nike legend"){
        window.location.href = "../pages/producto-dos.html"
        input.value = ""
    }
    else if(input.value.toLocaleLowerCase() === "legend"){
        window.location.href = "../pages/producto-dos.html"
        input.value = ""
    }
    else if(input.value.toLocaleLowerCase() === ""){
        alert("Debes escribir un producto")
    }
    else {
        alert("ESOS BOTINES NO ESTAN DISPONIBLES")
        input.value = ""
    }
})

input.addEventListener("keyup", function(e){
    if(e.code === "Enter"){
        if(input.value.toLocaleLowerCase() === "nike mercurial vapor"){
            window.location.href = "../pages/producto.html"
            input.value = ""
        }
        else if(input.value.toLocaleLowerCase() === "mercurial vapor"){
            window.location.href = "../pages/producto.html"
            input.value = ""
        }
        else if(input.value.toLocaleLowerCase() === "nike legend"){
            window.location.href = "../pages/producto-dos.html"
            input.value = ""
        }
        else if(input.value.toLocaleLowerCase() === "legend"){
            window.location.href = "../pages/producto-dos.html"
            input.value = ""
        } 
        else if(input.value.toLocaleLowerCase() === ""){
            alert("Debes escribir un producto")
        }
        else {
            alert("ESOS BOTINES NO ESTAN DISPONIBLES")
            input.value = ""
        }
    }
})

//Numero en el carrito
let boton = document.querySelectorAll(".botonsito")
let ac = 1

for(let i=0;i<boton.length;i++){
    boton[i].addEventListener("click", function(){
        document.querySelector(".carrito").textContent = ac++
    })
}


