window.onload = iniciar

function iniciar () {

    const encab1 = document.body.querySelector("h1")

    encab1.style.backgroundColor = "grey"

    with(document.body.style){
        backgroundColor = "yellow"
        color = "orange"
        border = "2px solid green"
        margin = "20px"
        padding = "15px"
        fontFamily = "sans"
    }

    // setTimeout(() => {
    //     document.body.style.visibility = "hidden"
    // }, 1000);

    setInterval(() => {
        if(document.body.style.visibility == "hidden"){
            document.body.style.visibility = "visible"
        }else{
            document.body.style.visibility = "hidden"
        }
    }, 3000);
}