import aboutPic from './about.jpg'
export default class About {

    constructor() {
        this.aboutElement = document.createElement('div')
        this.aboutElement.id = 'menu'
        this.img = document.createElement('img')
    }
    setDivPic = () => {
       this.img.src = aboutPic
       this.aboutElement.append(this.img)
       console.log(this.img.src)
       return this.aboutElement
    }
    appendMainDiv = (contentDiv) =>{
         contentDiv.innerHTML = ''
        contentDiv.append(this.setDivPic())
       }

}