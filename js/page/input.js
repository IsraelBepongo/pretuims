export class InputOpen {
    input 
    buttonInput
    constructor(){
        this.input = document.querySelector('.selection')
        this.buttonInput = document.querySelector('.navbar-seacher')
        window.addEventListener('resize', (e)=> {
            this.#mediaQueryInput()
        })
        this.buttonInput.addEventListener('click',  ()=>{
            this.#openMenus()
        })
     
       

    }
    #mediaQueryInput(){
        const Query = window.matchMedia('(min-width:950Px)')
        if(Query.matches){
            if(this.input.classList.contains('open-input')){
                this.input.classList.remove('open-input')
            }
           this.buttonInput.removeEventListener('click', this.#openMenus.bind(this))
           
        }
    }
    #openMenus(){
        if(this.input.classList.contains('open-input') === false){
           this.input.style.opacity = 0
           this.input.style.transition= null;
        }
        setTimeout(()=>{
            this.input.style.opacity = 1
            this.input.style.transition= '.4s';    
        }, 100)
        this.input.classList.toggle('open-input')
    }
}
