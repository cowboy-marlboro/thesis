<?php

$dbconn = pg_pconnect("host=sheep port=5432 dbname=mary user=lamb password=foo");

if ($dbconn){
    echo "YES< BETCH";
} else{
    echo "NO BETCH";
}