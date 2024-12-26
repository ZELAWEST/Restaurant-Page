import resPicture from'./restaurant.png'
const divContent = document.querySelector('#content')
function pageLoad() {
	//Add heading
	const restaurantHeading = document.createElement('h1')
	restaurantHeading.textContent = 'The Soul Of Food Restaurant'
    divContent.append(restaurantHeading)
// console.log(homepicture)
//Add homepage image

const img = document.createElement('img')
// img.src = homepicture



      const homePicDiv = document.createElement('p')
	 // homePicDiv.append(img)
	  homePicDiv.style.width = '100px'
	    homePicDiv.style.height = '30%'
	   homePicDiv.style.backgroundImage = 'url('+ resPicture + ')'

	


divContent.append(homePicDiv)

}

export {pageLoad}