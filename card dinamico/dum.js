var producto = [];
var precio = [];


function card() {

    var vestimenta = document.getElementById("vestimenta").value;
    var cantidad = document.getElementById("cantidad").value;


    var contenedoraux = document.getElementById("contenedor");
    var elem = document.getElementById("div1");
    contenedoraux.removeChild(elem);

    for (var i = 1; i <= cantidad; i++) {

        var div0 = document.createElement("div")
        div0.className = "row gx-5";
        div0.id = "div1"
        contenedoraux.appendChild(div0)

        switch (vestimenta) {
            case "zapatillas":
                producto = ["", "zapatillas ", "zapatillas", "zapatillas", "zapatillas", "zapatillas", "zapatillas"];
                precio = [" ", "$", "$", "$", "$", "$", "$"];
                break;



            case "buzo":
                producto = ["", "Buzo negro puma", "Buzo blanco puma", "Buzo adidas rosa", "Buzo adidas negro", "Buzo adidas verde", "Buzo adidas"];
                precio = [" ", "17.000$", "19.000$", "17.000$", "14.000$", "21.300$", "4.200$"];
                break;



            case "pantalones":
                producto = ["", "pantalones", "jean ", "jean ", "jean ", "jean ", "jean"];
                precio = [" ", "$", "$", "$", "$", "$", "$"];
                break;
            default:
                break;
        }
        
        var contenedor1 = document.getElementById("div1")
        var div1 = document.createElement("div")
        div1.className = "col-5"
        div1.id = "div1" + i
        contenedor1.appendChild(div1)

        var div1b = document.getElementById("div1" + i)
        var div2 = document.createElement("div")
        div2.className = "p-3"
        div2.id = "div2" + i
        div1b.appendChild(div2)

        var div2b = document.getElementById("div2" + i)
        var div3 = document.createElement("div")
        div3.className = "card"
        div3.id = "div3" + i
        div2b.appendChild(div3)

        var div3b = document.getElementById("div3" + i)
        var div4 = document.createElement("div")
        div4.id="divcuatro"
        div4.className = "card"
        div4.style = "width: 18rem"
        div3b.appendChild(div4)

        var refposicion=document.getElementById("divcuatro"+i)   
        var div5 = document.createElement("img")
        div5.src = "/img/" + vestimenta + i + ".jpg"
        div5.className = "card-img-top"
        div5.alt = "..."
        div3b.appendChild(div5)

        var div6 = document.createElement("div")
        div6.className = "card-body"
        div6.id = "div6" + i
        div3b.appendChild(div6)
        
        var div6b = document.getElementById("div6" + i)
        var div7 = document.createElement("h4")
        div7.className = "card-title"
        div7.innerHTML = "Vestimenta"
        div6b.appendChild(div7)

        var div8 = document.createElement("p")
        div8.className = "card-text"
        div8.innerHTML = producto[i] 
        div6b.appendChild(div8)

        var div9=document.createElement("p")
        div9.innerHTML ="  precio  " + precio[i]
        div6b.appendChild(div9)

        var div10=document.createElement("p")
        div6b.appendChild(div10)

        var button = document.createElement("button");
        button.className = "btn btn-primary"
        button.innerHTML = "comprar"
        div10.appendChild(button);



    }

}