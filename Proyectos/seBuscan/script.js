






let modalSD = document.getElementById("modalSD");
let modalAZY = document.getElementById("modalAZY");

function verDetalle(numeroCard) {
    switch (numeroCard) {
        case 1:
            modalSD.setAttribute("style", "display: flex");
            modalAZY.setAttribute("style", "display: flex");

            break;
        case 2:
            modalSD.setAttribute("style", "display: flex");

            modalAZY.setAttribute("style", "display: none");
            break;
        case 3:
            modalAZY.setAttribute("style", "display: flex");

            modalSD.setAttribute("style", "display: none");
            break;
    }
}