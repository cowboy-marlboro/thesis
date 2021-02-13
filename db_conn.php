<?php

# Строка подключения к базе данных;
$dbconn = pg_pconnect("host=10.2.1.13 port=5432 dbname=diplom user=postgres password=Beroslav43");

if ($dbconn){
    echo "YES< BETCH";
} else{
    echo "NO BETCH";
}
