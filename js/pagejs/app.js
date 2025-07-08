/*


window.addEventListener('resize', (e)=> {
    console.log(e)
})
    */

const media = window.matchMedia('(max-width:760Px)');
const openMenu = document.querySelector('.open-menus')

window.addEventListener('resize', (e)=> {
    console.log(e)
    if(media.matches){
        openMenu.classList.add('open-menu')
    }
    else{
        openMenu.classList.remove('open-menu')
    }
})


console.log(media.matches)