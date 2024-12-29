import menuPic from './menu.png' 
export default class Menu {

    constructor() {
        this.menuElement = document.createElement('div')
        this.menuElement.id = 'menu'
        this.img = document.createElement('img')
    }
    setDivPic = () => {
       this.img.src = menuPic
       this.menuElement.append(this.img)
       return this.menuElement
    }
    appendMainDiv = (contentDiv) =>{
         contentDiv.innerHTML = ''
        contentDiv.append(this.setDivPic())
       }

}