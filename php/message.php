<?php
// if(rand(1,3) == 1){
//     /* Fake an error */
//     header("HTTP/1.0 404 Not Found");
//     die();
// }

/* Send a string after a random number of seconds (2-10) */
sleep(rand(2,4));
echo(round(microtime(true) * 1000));
?>