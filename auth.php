<?php

include_once 'header.php';

?>


<?
// Страница авторизации

// Соединямся с БД
$dbconn = pg_pconnect("host=10.2.1.83 port=5432 dbname=theis user=retr0 password=Beroslav43");


if (isset($_POST['login_btn'])) {
    // Вытаскиваем из БД запись, у которой логин равняеться введенному
    $query = pg_query($dbconn, "SELECT email, passwd FROM users WHERE login='" . pg_escape_string($dbconn, $_POST['login']) . "' LIMIT 1");
    $data = pg_fetch_assoc($query);

    // Сравниваем пароли
    if ($data['passwd'] === md5(md5($_POST['password']))) {

        // Ставим куки
        setcookie("id", $data['login'], time() + 60 * 60 * 24 * 30, "/");
        setcookie("hash", $hash, time() + 60 * 60 * 24 * 30, "/", null, null, true); // httponly !!!

        // Переадресовываем браузер на страницу проверки нашего скрипта
        header("Location: check.php");
        exit();
    } else {
        echo "Вы ввели неправильный логин/пароль";
    }
}
?>


    <div class="container">
        <div class="logo-text-block">
            <p class="logo-text">Вход в учётную запись.</p>
        </div>
        <form class="form" method="post" action="#">
            <div class="input login">
                <input name="login" class="input-login" type="email" required placeholder=" ">
                <label class="form-label">Введите вашу почту.</label>
            </div>
            <div class="input password">
                <input name="passwd" class="input-password" type="password" required placeholder=" ">
                <label class="form-label">Введите ваш пароль.</label>
            </div>
            <p class="prompt-txt">Используйте вашу почту для входа в аккаунт.</p>
            <div class="input button">
                <button name="login_btn" type="submit" class="btn-input">Вход</button>
            </div>
        </form>
    </div>


<?php

include_once 'footer.php';
?>