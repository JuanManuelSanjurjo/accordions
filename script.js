const accordionItems = document.querySelectorAll(".accordionItem")

accordionItems.forEach( item => {
    item.addEventListener("click", function(){
        this.classList.toggle("active")
    })
})