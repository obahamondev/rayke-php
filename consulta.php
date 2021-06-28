<?php

            if (isset($_POST['contactForm'])) {

                $nombre = $_POST["nombre"];
                $correo = $_POST["correo"];
                $mensaje = $_POST["mensajeConsulta"];

                if (!empty('nombre') || !empty('correo') ||!empty('mensajeConsulta') ) {   

                    $correo_contenido ="Mensaje Enviado por:".$nombre.'\r\n';
                    $correo_contenido.="Desde el Correo:".$correo.'\r\n';
                    $correo_contenido.="El mensaje de consulta es el siguiente: ".'\r\n'.$mensaje;

                    //

                    $titutloMail = "Mensaje de consulta enviado desde la web de REYKE.";

                    //
                    
                    $destinatario = "oscar.bahamonde.dev@gmail.com";
                    
                    $subject = "Mensaje de consulta enviado desde la web de REYKE.";

                    //
                    
                    $headers = "From:" .$nombre.'\r\n';
                    $headers.= "Reply-To: ".$correo.'\r\n';
                    $headers.= "X-Mailer: PHP/" . phpversion();

                    $envio = mail($destinatario, $subject, $email_content, $headers);

                    if($envio) {
                        sleep(2);
                        header("Location:./exito.php");
                     }
                     else {
                        echo "¡Error!";
                     }
                }

            }
?>

