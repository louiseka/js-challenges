const images = ["./assets/post-courbet.jpg", "./assets/post-ducreux.jpg", "./assets/post-vangogh.jpg"]

let currentIndex = 0

const slider = document.getElementById("slider")

function updateImage() {
    slider.src = images[currentIndex]
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    updateImage()
})

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    updateImage()
})

updateImage()

//Create an array of image URLs. Build a simple slider to switch images with a button click.
