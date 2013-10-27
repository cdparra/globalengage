<?php
   $json = $_POST['json'];
   $data = json_decode( $json, true );
   if (json_decode($json) != null) { /* sanity check */
     $event_name = $data['event_name'];
     $file = fopen('hangouts/'+$event_name+'.json','w+');
     fwrite($file, $json);
     fclose($file);
   } else {
     // handle error 
   }
?>