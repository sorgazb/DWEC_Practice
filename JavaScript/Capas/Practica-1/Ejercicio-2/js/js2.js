window.onload = inicar

function inicar(){
    
    const div1 = document.body.firstElementChild
    div1.style.backgroundColor = "green"

    const tabla = div1.firstElementChild
    const ultFila = tabla.firstElementChild.lastElementChild
    ultFila.style.color = "red"

    const div2 = div1.nextElementSibling

    const ultPeri = div2.lastElementChild
    ultPeri.textContent = "Diario AS"
    ultPeri.href = "https://as.com/"


    const div3 = div2.nextElementSibling
    
    const mesNoviembre = div3.firstElementChild.lastElementChild.previousElementSibling
    mesNoviembre.style.backgroundColor="blue"

    const meses = div3.firstElementChild.children

    for(let mes of meses){
        mes.style.backgroundColor="yellow"
    }

    with(document.body.style){
        backgroundColor = "#90EE90"
    }
}