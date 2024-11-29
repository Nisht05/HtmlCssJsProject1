document.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <style>
        .nav-bar {
            height: 130px;
            width: 100%;
            background-color: white;
            display: flex;
        }

        .logo {
            height: 100%;
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .logo>img {
            height: 80%;
            width: 40%;

        }

        .nav-list {
            height: 100%;
            width: 75%;
            display: flex;
            justify-content: end;
            align-items: center;
        }

        .resnav-mob{
            display: none;
        }

        .nav-list>ul {
            width: 50%;
            /* background-color: pink; */
            display: flex;
            
        }

        .nav-list>ul>li {
            list-style: none;
            margin: auto;
            font-size: 21px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .nav-list>ul>li>a {
            text-decoration: none;
            /* font-size: 16px; */
            color: black;
        }

        .nav-list>ul>li>a:hover {
            font-size: 25px;
            color: rgb(92, 161, 104);
        }

        .toggle{
            height: 40px;
            width: 40px;
            display: none;
            padding: 12px 8x 12px 8px;
            margin-right: 10px;
            background-color: #354d2f;
            border: none;

        }
        .toggle>div{

            border: solid 1px white;
            color: white;
            width: 12px;
            margin-top: 4px;
            padding-left: 10px;
           
            
            
        }

        @media only screen and (max-width:430px) {
            .logo {
               
                width: 50%;
            }

            .logo>img {
                height: 50%;
                width: 50%;
            }

            .nav-list {
                
                width: 50%;
            }

            .nav-list>ul {
                display: none;
            }
            .toggle{
                display: block;
            }
            .nav-list>ul{
                display: none;
            }
            .resnav-mob{
               display: none;
            }
        }
    </style>
</head>

<body>
    <div class="nav-bar">
        <div class="logo">
            <img src="logo1.jpg" alt="">

        </div>
        <div class="nav-list">
            <ul class="resnav">
                <li><a href="index.html">Home</a></li>
                <li><a href="pagemain.html">About</a></li>
                <li><a href="servmain.html">Services</a></li>
                <li><a href="contmain.html">Contact</a></li>
            </ul>

            <ul style="display: none;" class="resnav-mob" id="show">
                <li><a href="index.html">Home</a></li>
                <li><a href="pagemain.html">About</a></li>
                <li><a href="servmain.html">Services</a></li>
                <li><a href="contmain.html">Contact</a></li>
            </ul>

            <button class="toggle" id="btncross">
                <div></div>
                <div></div>
                <div></div>
            </button>

        </div>



    </div>

    <script>

        document.getElementById('btncross').addEventListener('click', function(){
            const a = document.getElementById('show')
            const b = document.getElementById('btncross')

            if(a.style.display === 'block'){
                a.style.display = 'none'
                b.innerHTML = " <div></div><div></div><div></div>"
            }else{
                a.style.display = 'block'
                b.innerHTML = 'X'
            }
        })
        
    </script>

</body>

</html>`)