<?php
header('Content-Type: application/json');

// Llamar al endpoint real con cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://ciisa.coningenio.cl/v1/about-us/");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer ciisa"
]);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// Si la respuesta no es 200 (OK), se debe mostrar el error.
if ($httpcode !== 200) {
    echo json_encode([
        "error" => "No autorizado o error en la API",
        "http_code" => $httpcode,
        "response" => json_decode($response, true) // Mostrar detalles de la respuesta
    ]);
    exit();
}

curl_close($ch);

// Devolver la misma respuesta al frontend
echo $response;
?>
