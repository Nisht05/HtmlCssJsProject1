document.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .serv-1 {
            height: 300px;
            width: 100%;
            background-color: #354d2f;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .serv-1>h1 {
            font-size: 50px;
            color: white;
            margin-top: 30px;

        }

        .serv-1>p {
            font-size: 18px;
            padding-left: 200px;
            padding-right: 200px;
            color: white;
            margin-bottom: 40px;
            word-spacing: 4px;
            text-align: justify;
        }

        .serv-2 {
            height: 450px;
            width: 100%;
            background-color: whitesmoke;
        }

        .serv-head {
            height: 15%;
            width: 100%;
            /* background-color: darkblue; */
            display: flex;
            justify-content: center;
            align-items: center;
            color: #354d2f;
            font-size: 22px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }

        .serv-images {
            height: 80%;
            width: 100%;
            /* background-color: darkgreen; */
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            gap: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }

        .card-images-1 {
            height: 100%;
            width: 28%;
            /* background-color: lightpink; */
        }

        .card-img {
            height: 50%;
            width: 100%;
            /* background-color: darkred; */
        }

        .card-img>img {
            height: 100%;
            width: 100%;
            border: none;
            border-radius: 10px;
        }

        .card-cont {
            height: 50%;
            width: 100%;
            /* background-color: darkorchid; */
            display: flex;
            flex-direction: column;
        }

        .cont-l1 {
            height: 20%;
            width: 100%;
            /* background-color: lightseagreen; */
            display: flex;
            justify-content: start;
            align-items: center;
        }

        .cont-l1>h2 {
            margin-bottom: 20px;
            font-size: 30px;
            color: #354d2f;
        }

        .cont-l2 {
            height: 80%;
            width: 100%;
            /* background-color: lightskyblue; */
            display: flex;
        }

        .cont-l2 {
            font-size: 17px;
            word-spacing: 5px;
            padding-top: 10px;
            text-align: justify;
            line-height: 1.4;

        }

        .serv-3 {
            height: 180px;
            width: 100%;
            background-color: #354d2f;
            display: flex;
            flex-direction: column;
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            justify-content: center;
            align-items: center;
            font-size: 27px;
        }

        .serv-3>button {
            height: 50px;
            width: 150px;
            border: none;
            border-radius: 9px;
            color: #354d2f;
            cursor: pointer;
        }

        .serv-3>button:hover {
            background-color: whitesmoke;
        }



        @media only screen and (max-width:430px) {
            .serv-1 {
                height: fit-content;

            }

            .serv-1>p {
                padding-left: 20px;
                padding-right: 20px;

            }

            .serv-2{
                height: fit-content;
                /* flex-direction: column; */
                margin-top: 30px;
            }
            .serv-images{
                flex-direction: column;
            }
            .card-images-1{
                width: 100%;
            }
            .serv-3{
                height: 300px;
                margin-top: 20px;
            }
            .serv-3>h3{
                text-align: center;
               
            }
            .serve-3>button{
                /* margin-bottom: 20px; */
                padding-bottom: 30px;
            }
        }
    </style>
</head>

<body>

    <div class="serv-1">
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem commodi fugiat dignissimos illo cupiditate
            ipsa rerum distinctio, id excepturi, at, pariatur numquam ut error! Nam blanditiis debitis eius molestiae
            doloribus recusandae beatae a mollitia error et repellat vero culpa aliquid perspiciatis corporis odit
            asperiores, non dignissimos aspernatur soluta porro. Fuga deleniti nesciunt, rerum consectetur voluptas nisi
            voluptates expedita

            .</p>

    </div>

    <div class="serv-2">
        <div class="serv-head">
            <h1>
                Cleaning
            </h1>

        </div>
        <div class="serv-images">
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/High-rise-Building-Cleaning-1-1024x683.jpg"
                        alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>All Services provided</h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur, inventore



                    </div>


                </div>

            </div>
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/Water-fed-pole-m.jpg" alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>Water fed Pole</h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur, inventore



                    </div>


                </div>

            </div>
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://shinebldgcleaning.com/wp-content/uploads/2024/02/Glass-Cleaning.jpg" alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>Glass Cleaning</h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur, inventore


                    </div>


                </div>

            </div>

        </div>

    </div>

    <div class="serv-2">
        <div class="serv-head">
            <h1>
                Facade & postering
            </h1>

        </div>
        <div class="serv-images">
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>External Painting
                        </h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur,



                    </div>


                </div>

            </div>
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>Facade cladding Work
                        </h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur,


                    </div>


                </div>

            </div>
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>Facade Lighting
                        </h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur,



                    </div>


                </div>

            </div>

        </div>

    </div>

    <div class="serv-2">
        <div class="serv-head">
            <h1>
                Maintainance
            </h1>

        </div>
        <div class="serv-images">
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>Planned Preventive
                        </h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur,


                    </div>


                </div>

            </div>
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://images.pexels.com/photos/5691503/pexels-photo-5691503.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>Cradle Maintenance
                        </h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur,


                    </div>


                </div>

            </div>
            <div class="card-images-1">
                <div class="card-img">
                    <img src="https://images.pexels.com/photos/29445899/pexels-photo-29445899/free-photo-of-colorful-recycling-bins-in-sunlit-corridor.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="">

                </div>
                <div class="card-cont">
                    <div class="cont-l1">
                        <h2>Cradle Rental (AMC)
                        </h2>

                    </div>
                    <div class="cont-l2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur optio hic atque
                        nobis, incidunt labore adipisci? Facilis quam error adipisci minus consequatur,


                    </div>


                </div>

            </div>

        </div>

    </div>

    <div class="serv-3">
        <h3>Contact us today to Communicate with us for Bookings</h3>
        <button>BOOK NOW</button>

    </div>



</body>

</html>`)