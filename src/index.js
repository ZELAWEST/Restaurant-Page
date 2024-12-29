// import resPicture from'./restaurant.png'
import { pageLoad } from './initialPageLoder.js'
import About from './aboutpage.js'
import "./styles.css";
import Menu from './menupage.js'
const divContent = document.querySelector('#content')

pageLoad(divContent)
const menu = new Menu()
const about = new About()

function render(mainContentDiv) {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        console.log(button)
        if (button.id === '') {
            
            pageLoad(divContent)
        }
        else if (button.id === 'home') {
           
            button.addEventListener('click',function(){ pageLoad(mainContentDiv)})
            return
        }
        else if (button.id === 'menu') {
            
           
            button.addEventListener('click', function(){menu.appendMainDiv(mainContentDiv)})
            return
        }
        else if(button.id === 'about'){
            
        
            button.addEventListener('click', function(){about.appendMainDiv(mainContentDiv)})
            return

        }
    })

}
render(divContent)

