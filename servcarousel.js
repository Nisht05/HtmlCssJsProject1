document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    
.third-div1{
    height: 13%;
    width: 100%;
    /* background-color: lightblue; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    color: #354d2f;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.third-div2{
    height: 87%;
    width: 100%;
    /* background-color: lightcoral; */
    display: flex;
    justify-content: center;
}
.sliderinthird{
    height: 80%;
    width: 80%;
    /* background-color: darkgreen; */
    position: relative;
    overflow: hidden;
    padding-top: 50px;
}
/* slider */
.slider {
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.slider-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slider-wrapper img {
    width: 200px;
    height: 310px;
    margin-right: 10px;
    border: 2px solid #ddd;
    border-radius: 4px;
    border: 1px grey solid;
    border-radius: 10px;
}

.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
}

.nav-button:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

    </style>
</head>
<body>

    <div class="third-cont"></div>
        <div class="third-div1">
            <h1>Our Projects</h1>

        </div>
        <div class="third-div2">
            <div class="sliderinthird">
                <!-- slider -->
                <button class="nav-button prev" onclick="moveSlide(-1)">&#10094;</button>
                <div class="slider">
                    <div class="slider-wrapper">
                        <!-- Add 11 images here -->
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.19-PM-225x300.jpeg" alt="Image 1">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.08-PM-1-225x300.jpeg" alt="Image 2">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.07-PM-3-225x300.jpeg" alt="Image 3">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.19-PM-2-225x300.jpeg" alt="Image 4">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.19-PM-1-225x300.jpeg" alt="Image 5">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.17-PM-225x300.jpeg" alt="Image 6">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.16-PM-2-225x300.jpeg" alt="Image 7">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.16-PM-1-225x300.jpeg" alt="Image 8">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.08-PM-2-225x300.jpeg" alt="Image 9">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.15-PM-225x300.jpeg" alt="Image 10">
                        <img style="height: 310px; width: 200px;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.15-PM-225x300.jpeg" alt="Image 11">
                    </div>
                </div>
                <button class="nav-button next" onclick="moveSlide(1)">&#10095;</button>
            </div>
          

        </div>
      
    </div>

    <script>
        let currentIndex = 0;

function moveSlide(direction) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const images = document.querySelectorAll('.slider-wrapper img');
    const imageWidth = images[0].offsetWidth + 10; // Width + margin-right
    const maxIndex = images.length - Math.floor(sliderWrapper.offsetParent.offsetWidth / imageWidth);

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    sliderWrapper.style.transform = translateX(-(currentIndex * imageWidth)px);
}

    </script>
   
    
</body>
</html>`)