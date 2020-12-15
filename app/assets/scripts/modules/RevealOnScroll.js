class RevealOnScroll {
    constructor(){
        this.itemsToReveal = document.querySelectorAll(".feature-item")
        this.hideInitially()
        this.events()
    }

    events(){
        window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(element => {
                this.calculateIsScrolledto(element)
            })
        })
    }

    calculateIsScrolledto(element){
        let scrollPercent = (element.getBoundingClientRect().y / window.innerHeight) * 100
        if(scrollPercent < 75 ){
            element.classList.add("reveal-item--is-visible")
        }

    }

    hideInitially(){
        this.itemsToReveal.forEach(element => element.classList.add("reveal-item"))
    }


}

export default RevealOnScroll;
