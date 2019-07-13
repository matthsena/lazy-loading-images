document.addEventListener("DOMContentLoaded", () => {
	
	const offscreens = document.getElementsByClassName('offscreen')
	
	Object.keys(offscreens).map(i => {
			
		var distanceTop = offscreens[i].getBoundingClientRect().top
		var pageHeight = window.innerHeight
			
		if (setImage(distanceTop, pageHeight)) {
				offscreens[i].src = offscreens[i].dataset.img
				offscreens[i].dataset.officialImage = true
				offscreens[i].dataset.status = "official"
		}
		
		document.addEventListener('scroll', () => {

			if (!offscreens[i].dataset.officialImage) {
			
				distanceTop = offscreens[i].getBoundingClientRect().top
				pageHeight = window.innerHeight
			
				if (setImage(distanceTop, pageHeight)) {
					setTimeout(() => {
						offscreens[i].src = offscreens[i].dataset.img
						offscreens[i].dataset.officialImage = true
						offscreens[i].dataset.status = "official"
					}, 250)
				}
			}
		})
	}) 
})


function setImage (distanceTop, pageHeight) {
	
	if (distanceTop >= 0 && distanceTop <= pageHeight)
		return true
	else 
		return false
}
