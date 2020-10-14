const displayText400 = () => {
    if (document.getElementById("spring").classList.contains("iscourses")) {
        console.log(document.getElementById("spring").textContent);

        console.log(document.getElementById("spring").getElementsByClassName("400level").textContent);
        //I'm not sure why this undefined when it works for the one above 
    }
}

displayText400();
