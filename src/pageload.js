import resPicture from './restaurant.png'
const divContent = document.querySelector('#content')



function pageLoad() {
	//Add heading
	const restaurantHeading = document.createElement('h1')
	restaurantHeading.textContent = 'The Soul Of Food Restaurant '
	divContent.append(restaurantHeading)

	//Add homepage image
	
	const img = document.createElement('img')
	 img.src = resPicture
     img.alt = "Restaurant Home Picture"

	const homePicDiv = document.createElement('p')
	 homePicDiv.append(img)
	 divContent.append(homePicDiv)
	//Add message
	const welcomeMgs = document.createElement('p')
	welcomeMgs.textContent = "Welcome to our Food Soul Restaurant Enjoy !"
	divContent.append(welcomeMgs)

    


	

}

export { pageLoad }