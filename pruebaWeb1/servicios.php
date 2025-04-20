<?php
header('Content-Type: application/json');

// Llamar al endpoint real con cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://ciisa.coningenio.cl/v1/services/");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer ciisa"
]);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Devolver la misma respuesta al frontend
http_response_code($httpcode);
echo $response;
