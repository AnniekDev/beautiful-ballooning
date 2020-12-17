class Modal{
    constructor(){
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()

       
    }

    events(){
      

        //listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal())
        //push any key
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e){
        //keycode escapekey = 27
        if(e.keyCode == 27){
            this.closeTheModal()
        }
    }

    openTheModal(){
         this.modal.classList.add("modal--is-visible")
    }

    closeTheModal(){
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML(){
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
        <div class="modal__inner">
          <h2 class="section-title section-title--blue section-title--less-margin"><i class="fas fa-envelope section-title__icon"></i> Get in Touch </h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">We will have an online booking system in place soon. Until then, connect with us on any of the platforms below!</p>
          </div>
    
          <div class="social-icons">
            <a href="#" class="social-icons__icon"><i class="fab fa-facebook-square" alt="Facebook"></i></a>
            <a href="#" class="social-icons__icon"><i class="fab fa-twitter-square" alt="Twitter"></i></a>
            <a href="#" class="social-icons__icon"><i class="fab fa-instagram-square" alt="Instagram"></i></a>
            <a href="#" class="social-icons__icon"><i class="fab fa-youtube-square" alt="YouTube"></i></a>
          </div>
        </div>
        <div class="modal__close">X</div>
        
      </div>

        `)

    }
}

export default Modal