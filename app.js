let btn1 = document.querySelectorAll(".bir");

btn1.forEach(element => {
    element.addEventListener("click", (event) => {
        const b = event.target.nextElementSibling;
        const icon = event.target.querySelector("i");
     

        if (b.style.display === "none" || b.style.display === "") {
            b.style.display = "block";
            icon.classList= "fa-solid fa-angle-up"; 
        } else {
            b.style.display = "none";
            icon.classList= "fa-solid fa-angle-down"; 
        }
    });
});
