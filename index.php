<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link rel="stylesheet" href="css/loginstyle.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

</head>

<body>

    <section class="main">

        <figure class="main__figure">
            <img src="img/login-bro.svg" class="main__img">
        </figure>

        <div class="main__contact">

            <h2 class="main__title">Bienvenido a Alba</h2>
            <p class="main__paragraph">Coloca los datos proporcionados por la empresa</p>

            <form class="main__form" action="validar.php" method="post">

                <input type="text" placeholder="Nombre de usuario" class="main__input">

                <input type="password" placeholder="Contraseña" class="main__input">

                <input type="submit" value="Iniciar sesión" class="main__input main__input--send">

            </form>
        </div>

    </section>



</body>

</html>