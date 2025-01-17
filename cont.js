document.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
        // Initialize EmailJS with your public key
        (function () {
            emailjs.init("GGRwIpkCB_gPpmImP");
        })();
    </script>

    <style>
        .par1 {
            height: 210px;
            width: 100%;
            background-color: #354d2f;

            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

            font-size: 25px;
            display: flex;

        }

        .par1>h1 {
            margin-left: 130px;
            margin-top: 80px;
        }

        .form-cont {
            height: 800px;
            width: 100%;
            /* background-color: lightcoral; */
            display: flex
        }

        .form-ele-1 {
            height: 600px;
            width: 60%;
            /* background-color: darkblue; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }

        .form-head {
            height: 25%;
            width: 80%;
            /* background-color: lightpink; */
            margin-left: 100px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


        }

        .form-head>h1 {
            font-size: 35px;
        }

        .form-head>p {
            font-size: 16px;
            word-spacing: 4px;
        }

        .form-body {
            height: 75%;
            width: 80%;
            /* background-color: lightseagreen; */
            margin-left: 100px;

        }

        .form-ele-2 {
            height: 90%;
            width: 40%;
            /* background-color: darkcyan; */

        }

        .formdiv {
            height: 85%;
            width: 85%;
            /* background-color: red; */
        }

        form>input {
            height: 40px;
            width: 106%;
            padding: 0px 10px;
            border: 1px solid black;
        }

        form>textarea {
            height: 100px;
            width: 106%;
            padding: 0px 10px;
            border: 1px solid black;

        }

        form>button {
            height: 50px;
            width: 110%;
            background-color: #354d2f;
            font-size: 17px;
            color: white;
            border: none;
            border-radius: 5px;
            letter-spacing: 2px;
            cursor: pointer;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 10px 0px 10px 0px;

        }

        .card-1 {
            height: 300px;
            width: 350px;
            border-radius: 15px;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 2px 0px 42px 4px lightgrey;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 13px;
            

        }

        .card-1>p {
            font-size: 20px;
            text-align: center;
            padding-left: 30px;
            padding-right: 30px;
            font-weight: 200;
        }
        .call-div{
            height: 250px;
            width: 100%;
            /* background-color: lightsalmon; */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .call-1{
            height: 100%;
            width: 25%;
            /* background-color: blanchedalmond; */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }
        .call-1>h1{
            font-size: 40px;
        }
        .callbtn{
            height: 45px;
            font-size: 15px;
            border: none;
            border-radius: 6px;
            background-color: #354d2f;
            color: white;
            width: 180px;
            cursor: pointer;
            box-shadow: 2px 0px 42px 4px lightgrey;

        }
        .callbtn:hover{
            background-color: #2d4727;
        }

        @media only screen and (max-width:430px){
            .par1{
                height: fit-content;
            }
            .par1>h1{
                padding-right: 80px;
                font-size: 35px;
            }
            .form-cont{
                height: fit-content;
                flex-direction: column;
            }
            .form-ele-1{
                width: 100%;
            }
            .form-head{
                width: 100%;
                margin-right: 90px;
            }
            .form-body{
                width: 100%;
                margin-right: 90px;
                margin-top: 20px;
            }
            
            .form-ele-2{
                width: 100%;
                height: fit-content;
            }
            .card-1{
                margin-left: 30px;
                margin-top: 30px;
            }
            .formdiv>input{
                padding-left: 20px;
            }
            .call-1{
                width: 100%;
            }
            .formdiv{
                width: 88%;
            }
        }

        
    </style>
</head>

<body>

    <div class="par1">

        <h1>Contact Us</h1>

    </div>

    <!-- form -->

    <div class="form-cont">
        <div class="form-ele-1">
            <div class="form-head">
                <h1>Book Now</h1>
                <p>Visit our website and fill out our convenient booking form. Simply select the type of service you need and provide your contact information. </p>

            </div>
            <div class="form-body">
                <div class="formdiv">
                    <form id="contact-form" onsubmit="sendEmail(event)">
                        <input placeholder="Name" type="text" name="" id="n">
                        <br><br>
                        <input placeholder="Email" type="email" name="" id="e">
                        <br><br>
                        <input placeholder="Your Number" type="number" name="" id="p">
                        <br><br>
                        <textarea placeholder="Your Message" name="" id="t"></textarea>
                        <br>
                        <button value="submit">SUBMIT</button>

                    </form>

                    <script>
                        function sendEmail(event) {
                            event.preventDefault();

                            // Get form values
                            const name = document.getElementById('n').value;
                            const email = document.getElementById('e').value;
                            const phone = document.getElementById('p').value;
                            const message = document.getElementById('t').value;

                            // const student = {};

                            // student.name = name;
                            // student.email = email;
                            // student.phone = phone;
                            // student.message = message;


                            // console.log(student);

                            // Prepare email parameters
                            const emailParams = {
                                to_name: name,
                                to_email: email,
                                to_phone: phone,
                                to_message: message,
                                from_name: "Your Website",
                            };

                            // Send email using EmailJS
                            emailjs.send("service_8c5lo0s", "template_7nmaw73", emailParams)
                                .then(response => {
                                    console.log("Email sent successfully!", response.status, response.text);
                                    alert("Form has been submitted successfully!");
                                })
                                .catch(error => {
                                    console.error("Failed to send email:", error);
                                    alert("There was an error submitting the form. Please try again.");
                                });
                        }
                    </script>

                </div>

            </div>

        </div>
        <div class="form-ele-2">
            <div style="margin-top: -100px;" class="carddiv">
                <div class="card-1">
                    <img src="clock1.svg" height="60px" alt="">
                    <h1>Saves your time</h1>
                    <p>To schedule your cleaning services or learn more about how we can save you time, contact us today at
                        Shine Building Cleaning.</p>
    
                </div>
                <br><br>
                <div class="card-1">
                    <img src="https://www.svgrepo.com/show/508716/paypal.svg" height="60px" alt="">
                    <h1>Cashless Payments</h1>
                    <p>We offer cashless payment solutions, making it easier than ever to settle your bill for our services..</p>
    
                </div>
                <br><br>
                <div class="card-1">
                    <img src="mess.svg" height="60px" alt="">
                    <h1>All over the world</h1>
                    <p>Our commitment to transparent and efficient communication means that you can always count on us to be responsive, attentive, and easy to reach.</p>
    
                </div>
    
            </div>
            
        </div>


    </div>

    <div class="call-div">
        <div class="call-1">
            <h1>Call Us</h1>
            <button  class="callbtn"><a href="tel:+917055852251"></a>+91 7055852251</button>

        </div>

    </div>




</body>

</html>`)