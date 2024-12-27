 import homePicture from './reservation-seat.jpg'




function pageLoad(contentDiv) {
	//Add heading
	contentDiv.innerHTML = ''
	const restaurantHeading = document.createElement('h1')
	restaurantHeading.textContent = 'The Soul Of Food Restaurant '
	restaurantHeading.id = 'title'
	contentDiv.append(restaurantHeading)

	

	const homePicDiv = document.createElement('p')
	
	homePicDiv.id = 'home'
	//  homePicDiv.append(img)
	

	 const menuDivImg = document.createElement('img')
	 menuDivImg.src = homePicture
	 menuDivImg.id = 'image'
      homePicDiv.append(menuDivImg)

	 contentDiv.append(homePicDiv)
	//Add message
	const welcomeMgs = document.createElement('p')
	welcomeMgs.textContent = "Welcome to our Food Soul Restaurant Enjoy !"
	welcomeMgs.id = 'welcome'
	contentDiv.append(welcomeMgs)
     

	
    


	

}

export { pageLoad }