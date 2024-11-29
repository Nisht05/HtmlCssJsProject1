document.write(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .foot-div {
                height: 400px;
                width: 100%;
                background-color: whitesmoke;
                display: flex;
                gap: 2px;
            }
    
            .foot-div-1 {
                height: 100%;
                width: 30%;
                /* background-color: darkblue; */
                display: flex;
                justify-content: end;
                align-items: start;
            }
    
            .foot-1-img {
                height: 70%;
                width: 300px;
                /* background-color: lightblue; */
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
                padding-top: 30px;
    
            }
    
            .foot-1-img>img {
                padding-left: 80px;
            }
    
            .foot-1-img>p {
                font-size: 19px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: 580;
    
            }
    
            .foot-div-2 {
                height: 100%;
                width: 23%;
                /* background-color: darkcyan; */
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
            }
            
            .foot-div-2>h1 {
                padding-top: 30px;
                font-size: 25px;
                color: #354d2f;
            }
    
            .foot-div-2>ul {
                /* background-color: hotpink; */
                height: 120px;
                width: 100px;
                margin-top: -5px;
            }
    
            .foot-div-2>ul>li {
                margin: auto;
                padding-right: 30px;
                list-style: none;
                text-align: center;
                font-size: 19px;
                font-weight: 540;
                margin-bottom: 10px;
    
            }
    
            .foot-div-2>ul>li>a {
                text-decoration: none;
                color: black;
            }
    
            .foot-div-2>ul>li>a:hover {
                color: #354d2f;
            }
    
            .foot-div-3 {
                height: 100%;
                width: 23%;
                /* background-color: darkcyan; */
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
            }
    
            .foot-div-3>h1 {
                padding-top: 30px;
                font-size: 25px;
                color: #354d2f;
            }
    
            .foot-div-3>ul {
                /* background-color: hotpink; */
                /* height: 120px;
                width: 100px; */
                margin-top: -5px;
            }
    
            .foot-div-3>ul>li {
                margin: auto;
                padding-right: 30px;
                list-style: none;
                text-align: center;
                font-size: 19px;
                font-weight: 540;
                /* margin-bottom: 10px; */
    
            }
    
            .foot-div-4 {
                height: 100%;
                width: 23%;
                /* background-color: darkcyan; */
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
            }
    
            .foot-div-4>h1 {
    
                padding-right: 90px;
                padding-top: 30px;
                font-size: 25px;
                color: #354d2f;
            }
    
            .foot-div-4>ul>li {
                margin: auto;
                padding-right: 30px;
                list-style: none;
                text-align: start;
                font-size: 19px;
                font-weight: 540;
                margin-bottom: 10px;
    
            }
    
            .divlasfoot {
                height: 120px;
                width: 100%;
                background-color: whitesmoke;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                border-top: solid 2px darkgray;
    
                color: rgb(133, 122, 122);
            }
    
            @media only screen  and (max-width:430px){
                .foot-div{
                    height: fit-content;
                    flex-direction: column ;
                    
                }
                .foot-div-1{
                    height: fit-content;
                    flex-direction: column;
                    width: 100%;
                }
                .foot-1-img>img{
                    height: 80%;
                    width: 80%;
                    /* padding-left: 30px; */
                }
                .foot-1-img>p{
                    padding-left: 30px;
                    font-size: 15px;
                }
    
                .foot-div-2{
                    height: fit-content;
                    width: 100%;
                    /* display: flex;
                    justify-content: center;
                    align-items: center; */
                }
                .foot-div-2>ul>li{
                font-size: 17px;
            }
    
                .foot-div-3{
                    height: fit-content;
                    width: 100%;
                    /* display: flex;
                    justify-content: center;
                    align-items: center; */
                }
                .foot-div-3>ul>li{
                font-size: 17px;
            }
    
                .foot-div-4{
                    height: fit-content;
                    width: 100%;
                    text-align: center;
                    /* display: flex;
                    justify-content: center;
                    align-items: center; */
                }
                .foot-div-4>ul>li{
                font-size: 17px;
                margin-bottom: 15px;
            }
    
                .divlasfoot{
                    height: 100px;
                    font-size: 16px;
                    text-align: center;
                }
    
    
            }
        </style>
    </head>
    
    <body>
    
        <div class="foot-div">
            <div class="foot-div-1">
                <div class="foot-1-img">
                    <img height="50%" width="70%"
                        src="logo1.jpg"
                        alt="">
    
                    <p>We’re committed to providing top-quality cleaning services to our valued clients.
    
                    </p>
                </div>
    
            </div>
            <div class="foot-div-2">
                <h1>Quick links</h1>
                <ul>
                    <li><a href="">Home</a></li>
    
                    <li><a href="">Services</a></li>
    
                    <li><a href="">About</a></li>
    
                    <li><a href="">Contact</a></li>
                </ul>
    
            </div>
            <div class="foot-div-3">
                <h1>Services</h1>
                <ul>
                    <li>High-rise cleaning</li>
                    <li>Water pol</li>
                    <li>Mirror glass cleaning</li>
                    <li>External Designing</li>
                    <li>Facade Postering</li>
                    <li>Night Lighting</li>
                    <li>Mirror glass cleaning</li>
                    <li>External Designing</li>
                    <li>Facade Postering</li>
                    <li>Night Lighting</li>
                </ul>
            </div>
            <div class="foot-div-4">
    
                <h1>Contact Us</h1>
                <ul>
                    <li><img style="height: 20px ;" src="https://www.svgrepo.com/show/507811/phone.svg" alt="">+91
                        7055852251</li>
                    <li>info@ nishtkumar461@gmail.com</li>
                    <li> The freak tower 05 flat 12 California nad AREA. America</li>
                </ul>
    
            </div>
    
    
    
        </div>
        <div class="divlasfoot">
            Copyright © 2024 SOMPAIVE online services | Designed by Infosys
    
    
    
        </div>
    
    </body>
    
    </html>`)