document.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .about1 {
            height: 170px;
            width: 100%;
            background-color: #354d2f;

            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .about2 {
            height: 450px;
            width: 100%;
            /* background-color: lightcoral; */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .about-2-1 {
            height: 80%;
            width: 30%;
            /* background-color: darkblue; */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .about-2-a {
            height: 80%;
            width: 60%;
            /* background-color: blanchedalmond; */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


        }

        .about-2-a>h4 {
            font-size: 25px;
            margin-bottom: 13px;
            padding-left: 20px;

        }

        .about-2-a>p {
            font-size: 18px;
            margin-bottom: 13px;
            word-spacing: 4px;
            padding-left: 20px;
            padding-right: 20px;
            text-align: justify;

        }

        .about3 {
            height: 500px;
            width: 100%;
            background-color: #f3f5f5;
        }

        .about3-head {
            height: 15%;
            width: 100%;
            /* background-color: darkcyan; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin-top: 20px;

        }

        .about3-body {
            height: 50%;
            width: 100%;
            /* background-color: darkgreen; */
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }

        .imgbody1 {
            height: 80%;
            width: 20%;
            /* background-color: lightblue; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

            text-align: center;
        }

        .about3-end {
            height: 25%;
            width: 100%;
            /* background-color: darkolivegreen; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }

        .about3-end>p {
            padding-left: 150px;
            padding-right: 150px;
            text-align: center;

        }
        .about4{
            height: 330px;
            width: 100%;
            background-color: lightpink;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            background-image: url('https://images.pexels.com/photos/586414/pexels-photo-586414.jpeg?auto=compress&cs=tinysrgb&w=600');
            background-size: cover;
            background-position: center center;
            background-attachment: fixed;
        
        }
        .about-4-1{
            height: 30%;
            width: 80%;
            /* background-color: darkblue; */
            margin-bottom: 4px;
            display: flex;
            justify-content: center;
            align-items: center;

            color: white;
            font-size: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }
        .about-4-2{
            height: 30%;
            width: 90%;
            background-color: #354d2f;
            margin-bottom: 8px;
            margin-top: 8px;
            display: flex;
            /* flex-direction: column; */
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

            border-radius: 10px;

        }
        .abt-4-2-a{
            height: 60%;
            width: 70%;
            /* background-color: lightblue; */
            color: white;
            font-size: 25px;
            padding-bottom: 30px;
        }
       
        .abt-4-2-b{
            height: 60%;
            width: 20%;
            /* background-color: lightsalmon; */
            display: flex;
            /* flex-direction: column; */
            justify-content: center;
            align-items: center;
        }
        .abt-4-2-b>button{
            height: 50px;
            width: 170px;
            font-size: 17px;
            border-radius: 8px;
            border: none;
            color: #354d2f;
            cursor: pointer;
        }
        .about-5{
            height: 620px;
            width: 100%;
            /* background-color: darkcyan; */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .about-5-1{
            height: 80%;
            width: 40%;
            /* background-color: lightcoral; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .about-5-2{
            height: 80%;
            width: 50%;
            /* background-color: lightslategray; */
        }
        .abt-5-a{
            height: 45%;
            width: 100%;
            /* background-color: darkolivegreen; */
            margin-bottom: 4px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }
        .abt-5-a>h2{
            font-size: 35px;
        }
        .abt-5-a>p{
            font-size: 19px;
            word-spacing: 4px;
            padding-right: 30px;

        }
        .abt-5-b{
            height: 50%;
            width: 100%;
            /* background-color: darkolivegreen; */
            margin-bottom: 4px;
            
        }
        .abt-5-lines{
            height: 30px;
            width: 60%;
            /* background-color: lightskyblue; */
            display: flex;
            margin-top: 10px;

        }
        .lines-img{
            height: 100%;
            width: 10%;
            /* background-color: darkblue; */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .lines-par{
            height: 100%;
            width: 90%;
            /* background-color: darkgreen; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        

        }
        .lines-par>p{
            padding-right: 40px;
        }

        
        @media only screen and (max-width:430px) {
            .about1 {
                height: fit-content;
                /* width: 80%; */
                height: auto;
                font-size: 20px;
            }

            .about2 {
                height: fit-content;
                flex-direction: column;
            }

            .about-2-1 {
                height: auto;
                width: 100%;
                margin-top: 10px;
            }

            .about-2-a {
                width: 100%;
                height: auto;
            }

            .about3 {
                height: fit-content;
            }

            .about3-head {
                font-size: 22px;
            }

            .about3-body {
                height: fit-content;
                flex-direction: column;
            }

            .imgbody1 {
                width: 100%;
                height: auto;
            }

            .about3-end>p {
                height: auto;
                width: 100%;
                text-align: justify;
                padding-left: 20px;
                padding-right: 20px;
            }

            .about4 {
                height: fit-content;
            }

            .about-4-1 {
                /* width: 100%; */
                font-size: 15px;
            }

            .about-4-2 {
                height: auto;
                flex-direction: column;
            }

            .abt-4-2-a {
                text-align: center;
                font-weight: 300;
            }

            .abt-4-2-b {
                width: 100%;
                padding-bottom: 30px;
            }

            .about-5 {
                height: fit-content;
                flex-direction: column;

            }

            .abt-5-a {
                text-align: justify;
            }

            .abt-5-a>p {
                padding-left: 10px;
                padding-right: 10px;
            }

            .about-5-1 {
                width: 100%;
                height: auto;
            }

            .abt-5-lines {
                width: 100%;
            }
            .about-5-2{
                height: auto;
                width: 100%;
                margin-top: 30px;
            

            }

        }

    </style>
</head>

<body>

    <div class="about1">
        <h1>About us</h1>

    </div>
    <div class="about2">
        <div class="about-2-1">
            <img style="height: 80%; width: 85%;"
                src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="">

        </div>
        <div class="about-2-a">
            <h4>Know more about us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quasi sequi esse, alias assumenda
                fugiat repudiandae hic dolore rerum, dolores maxime? Unde placeat expedita, ex quia omnis, saepe
                voluptatum possimus quaerat atque voluptates, non iusto rerum! Ratione nobis laboriosam, assumenda
                aperiam aut eveniet, aliquam sit tempore illo pariatur, blanditiis beatae nostrum ab? Iure doloribus
                repudiandae praesentium odit recusandae molestiae nihil, expedita iusto, quasi reiciendis molestias
                placeat, fugit aut nisi voluptate cum provident corporis numquam harum accusamus dignissimos.
                Perspiciatis aliquam illum repudiandae earum quia? Harum ut inventore similique ipsa ea commodi
                aspernatur, dignissimos reiciendis excepturi eaque, quis odit aliquid optio impedit accusantium
                consectetur cupiditate a, nostrum fugiat sint. Vero, eveniet aperiam!</p>

        </div>

    </div>

    <div class="about3">
        <div class="about3-head">
            <h1>We Promise You!</h1>

        </div>
        <div class="about3-body">
            <div class="imgbody1">
                <img style="height: 70px; width: 70px; margin-top: 20px;"
                    src="https://www.svgrepo.com/show/315941/medal-gold.svg" alt="">
                <p>Professional Quality Guarantee</p>

            </div>
            <div class="imgbody1">
                <img style="height: 70px; width: 70px; margin-top: 20px;"
                    src="https://www.svgrepo.com/show/524055/hand-stars.svg" alt="">
                <p>Excellence into every field</p>

            </div>
            <div class="imgbody1">
                <img style="height: 70px; width: 70px; margin-top: 20px;"
                    src="https://www.svgrepo.com/show/196307/cup-trophy.svg" alt="">
                <p>Best product and Guarantee</p>

            </div>


        </div>
        <div class="about3-end">
            <p>We promise you: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro quibusdam voluptatum
                aut. Aut perspiciatis excepturi veniam aliquam nostrum. Iste, amet? Ipsa ea quae debitis perferendis
                nihil impedit optio fuga, consectetur expedita ab deserunt vel asperiores molestias doloremque.</p>

        </div>

    </div>

    <div class="about4">
        <div class="about-4-1">
            <h1>Limited Time Offer!</h1>

        </div>
        <div class="about-4-2">
            <div class="abt-4-2-a">
                <h4>Schedule Meeting Now & Get Free Estimated</h4>
            </div>
            <div class="abt-4-2-b">
                <button>CONTACT</button>
            </div>
            
        </div>

    </div>

    <div class="about-5">
        <div class="about-5-1">
            <div class="abt-5-a">
                <h2>Our cleaning Experts</h2>
                <p>Our cleaning experts are more than just professionals – they’re dedicated individuals with years of experience and a passion for delivering exceptional service.</p>

            </div>
            <div class="abt-5-b">
                <div class="abt-5-lines">
                    <div class="lines-img">
                        <img style="height: 70%; width: 70%;" src="tick.svg" alt="">

                    </div>
                    <div class="lines-par">
                        <p style="padding-right: 50px;">Team Collaboration and Support </p>

                    </div>

                </div>
                <div class="abt-5-lines">
                    <div class="lines-img">
                        <img style="height: 70%; width: 70%;" src="tick.svg" alt="">

                    </div>
                    <div class="lines-par">
                        <p style="padding-right: 80px;">Passion for Cleaning Service  </p>

                    </div>

                </div>
                <div class="abt-5-lines">
                    <div class="lines-img">
                        <img style="height: 70%; width: 70%;" src="tick.svg" alt="">

                    </div>
                    <div class="lines-par">
                        <p style="padding-right: 47px;">Safety and Compliance Standards</p>

                    </div>

                </div>
                <div class="abt-5-lines">
                    <div class="lines-img">
                        <img style="height: 70%; width: 70%;" src="tick.svg" alt="">

                    </div>
                    <div class="lines-par">
                        <p style="padding-right: 66px;">Communication and Customer</p>

                    </div>

                </div>
                <div class="abt-5-lines">
                    <div class="lines-img">
                        <img style="height: 70%; width: 70%;" src="tick.svg" alt="">

                    </div>
                    <div class="lines-par">
                        <p style="padding-right: 55px;">Team Collaboration and Support </p>

                    </div>

                </div>
                
            </div>

        </div>
        <div class="about-5-2">
            <img style="height: 100%; width: 100%;" src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-2.51.18-PM-e1708506584508-1024x712.jpeg" alt="">
        </div>

    </div>





</body>

</html>`)