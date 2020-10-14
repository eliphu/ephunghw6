const changePara = () => {
    for (i = 0; i < document.body.querySelectorAll("p").length; i++){
        document.body.querySelectorAll("p")[i].style.fontWeight = "900";
        document.body.querySelectorAll("p")[i].style.backgroundColor = "yellow";
    }
}
changePara();