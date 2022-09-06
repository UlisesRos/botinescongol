//Variables
let buscar1 = document.querySelector(".buscar1")
let botines = document.querySelector("#botines")

//Al apretar la lupa se desplega el input
buscar1.addEventListener("click", function(){
    botines.classList.toggle("buscador")
    botines.classList.toggle("scale-in-hor-right")
})

//Buscar en el input los diferentes botines
botines.addEventListener("keyup", function(e){
    if(e.code === "Enter"){
        if(botines.value.toLocaleLowerCase() === "nike mercurial vapor" || botines.value.toLocaleLowerCase() === "mercurial vapor"){
            window.location.href = "../pages/nike-mercurial-vapor.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike legend" || botines.value.toLocaleLowerCase() === "legend"){
            window.location.href = "../pages/Nike-legend.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike mercurial superlify" || botines.value.toLocaleLowerCase() === "mercurial superlify"){
            window.location.href = "../pages/nike-mercurial-superlify.html"
        }
        else if(botines.value.toLocaleLowerCase() === "adidas predator" || botines.value.toLocaleLowerCase() === "predator"){
            window.location.href = "../pages/adidas-predator.html"
        }
        else if(botines.value.toLocaleLowerCase() === "adidas speedportal" || botines.value.toLocaleLowerCase() === "speedportal"){
            window.location.href = "../pages/adidas-speedportal.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike mercurial speed" || botines.value.toLocaleLowerCase() === "mercurial speed"){
            window.location.href = "../pages/nike-mercurial-speed.html"
        }
        else if(botines.value.toLocaleLowerCase() === "adidas nemeziz" || botines.value.toLocaleLowerCase() === "nemeziz"){
            window.location.href = "../pages/adidas-nemeziz.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike phantom" || botines.value.toLocaleLowerCase() === "phantom"){
            window.location.href = "../pages/nike-phantom.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike mercurial dream" || botines.value.toLocaleLowerCase() === "mercurial dream"){
            window.location.href = "../pages/nike-mercurial-dream.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike tiempo legend" || botines.value.toLocaleLowerCase() === "tiempo legend"){
            window.location.href = "../pages/nike-tiempo-legend.html"
        }
        else if(botines.value === ""){
            alert("Debes ingresar un nombre")
        }
        else{
            alert("Esos botines no estan disponibles")
            botines.value = ""
        }
    }
    else if(e.code == "NumpadEnter"){
        if(botines.value.toLocaleLowerCase() === "nike mercurial vapor" || botines.value.toLocaleLowerCase() === "mercurial vapor"){
            window.location.href = "../pages/nike-mercurial-vapor.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike legend" || botines.value.toLocaleLowerCase() === "legend"){
            window.location.href = "../pages/Nike-legend.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike mercurial superlify" || botines.value.toLocaleLowerCase() === "mercurial superlify"){
            window.location.href = "../pages/nike-mercurial-superlify.html"
        }
        else if(botines.value.toLocaleLowerCase() === "adidas predator" || botines.value.toLocaleLowerCase() === "predator"){
            window.location.href = "../pages/adidas-predator.html"
        }
        else if(botines.value.toLocaleLowerCase() === "adidas speedportal" || botines.value.toLocaleLowerCase() === "speedportal"){
            window.location.href = "../pages/adidas-speedportal.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike mercurial speed" || botines.value.toLocaleLowerCase() === "mercurial speed"){
            window.location.href = "../pages/nike-mercurial-speed.html"
        }
        else if(botines.value.toLocaleLowerCase() === "adidas nemeziz" || botines.value.toLocaleLowerCase() === "nemeziz"){
            window.location.href = "../pages/adidas-nemeziz.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike phantom" || botines.value.toLocaleLowerCase() === "phantom"){
            window.location.href = "../pages/nike-phantom.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike mercurial dream" || botines.value.toLocaleLowerCase() === "mercurial dream"){
            window.location.href = "../pages/nike-mercurial-dream.html"
        }
        else if(botines.value.toLocaleLowerCase() === "nike tiempo legend" || botines.value.toLocaleLowerCase() === "tiempo legend"){
            window.location.href = "../pages/nike-tiempo-legend.html"
        }
        else if(botines.value === ""){
            alert("Debes ingresar un nombre")
        }
        else{
            alert("Esos botines no estan disponibles")
            botines.value = ""
        }
    }
})
