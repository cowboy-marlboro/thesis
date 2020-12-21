<?php

include_once 'header.php';
include_once 'db_conn.php';

?>


<?php

//// Соединямся с БД
$dbconn = pg_pconnect("host=10.2.1.13 port=5432 dbname=diplom user=postgres password=Beroslav43");


if (isset($_POST['login_btn'])) {
    // Это пример его не трогать!!!
    //$query = pg_query($dbconn, "SELECT email, passwd FROM users WHERE login='" . pg_escape_string($dbconn, $_POST['login']) . "' LIMIT 1");

    $login = pg_query($dbconn, "SELECT email FROM users WHERE login='" . pg_escape_string($dbconn, $_POST['email']) . "'");
    $pass = pg_query($dbconn, "SELECT password FROM users WHERE password='" . pg_escape_string($dbconn, $_POST['passwd']) . "'");
}
//    // Вытаскиваем из БД запись, у которой логин равняеться введенному

$data = pg_fetch_assoc($query);

    // Сравниваем пароли
    if ($data['passwd'] === md5(md5($_POST['passwd']))) {

        // Переадресовываем браузер на страницу проверки нашего скрипта
        header("Location: index.html");
        exit();
    } else {
        echo "Вы ввели неправильный логин/пароль";
    }


?>


    <div class="container">
        <div class="logo-text-block">
            <p class="logo-text">Вход в учётную запись.</p>
        </div>
        <form class="form" method="post" action="">
            <div class="input login">
                <input name="email" class="input-login" type="email" required placeholder=" ">
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