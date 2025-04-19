<?php

    // ACA USAMOS LA CABEZERA(HEADER) PARA DECIR QUE EL CONTENIDO QUE VAMOS A ENVIAR ES JSON Y ESPANOL
    header('Content-Type: application/json; charset=utf-8');



    // ACA DEFINIMOS UNA FUNCTION PARA PODER OBTENER EL TOKEN DE AUTORIZACION
    function getAuthorizationToken() {
        $token = null;
        if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
            $token = $_SERVER['HTTP_AUTHORIZATION'];
        } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
            $token = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
        }
        return $token;  
    }

    // ACA DEFINIMOS UN FUNCTION PARA VERIFICAR EL TOKEN OBTENIDO
    $token = getAuthorizationToken();
    if ($token !== "Bearer ciisa") {
        http_response_code(401);
        echo json_encode(['error' => 'Token de autorización no proporcionado o incorrecto']);
        exit;
    }







    // SIMULACION DE DATOS PARA "SERVICIOS"
    $servicios = [
        [
            'id' => 1,
            'nombre' => 'Consultoría Digital',
            'descripcion' => 'Asesoramiento en transformación digital.',
            'beneficios' => 'Ayuda a las empresas a adaptarse a la era digital y mejorar su eficiencia.'
        ],
        [
            'id' => 2,
            'nombre' => 'Soluciones Multiexperiencia',
            'descripcion' => 'Soluciones para mejorar la experiencia del cliente.',
            'beneficios' => 'Ofrece experiencias consistentes y personalizadas en múltiples canales.'
        ],
        [
            'id' => 3,
            'nombre' => 'Evolución de Ecosistemas',
            'descripcion' => 'Optimización y modernización de ecosistemas empresariales.',
            'beneficios' => 'Permite una integración fluida y mejora la colaboración entre sistemas.'
        ],
        [
            'id' => 4,
            'nombre' => 'Soluciones Low-Code',
            'descripcion' => 'Desarrollo rápido de aplicaciones con plataformas de bajo código.',
            'beneficios' => 'Reduce el tiempo de desarrollo y facilita la innovación.'
        ]
    ];

    // SIMULACION DE DATOS PARA "NOSOTROS"
    $nosotros = [
        "mision" => "Nuestra misión es ayudar a las empresas a crecer y adaptarse a la era digital.",
        "vision" => "Ser líderes en soluciones digitales y de inteligencia artificial.",
        "valores" => ["Innovación", "Compromiso", "Calidad"]
    ];








    // OBTENER LA RUTA ACTUAL
    $ruta = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

    // ENRUTAMIENTO UNIFICADO
    if ($ruta == "/pruebaWeb1/servicios") {
        // DEVOLVER TODOS LOS SERVICIOS
        echo json_encode($servicios);
    }
    elseif ($ruta == "/pruebaWeb1/nosotros") {
        // DEVOLVER INFORMACION SOBRE NOSOTROS
        echo json_encode($nosotros);
    }
    else {
        // RUTA NO ENCONTRADA
        http_response_code(404);
        echo json_encode(['error' => 'Ruta no encontrada']);
    }


?>