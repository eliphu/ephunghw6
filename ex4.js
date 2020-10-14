const addLink = () => {
    //I created a class id for the links section
    document.getElementById("links").insertAdjacentHTML("beforeBegin", <a href="https://www.csulb.edu/college-of-business">College of Business</a>);
}
addLink();