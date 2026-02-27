<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Mail\ContactForm1Data;

Route::get("/mail", function () {
    $FormData =
    array(
        'goterasHumedadEnDomicilio' => 'No',
        'tipoDeConstruccion' => NULL,
        'otroTipoDeConstruccion' => NULL,
        'productoInteresado' =>
        array(
            0 => 'prefabricados',
            1 => 'cementicios',
            2 => 'Termo reductores',
        ),
        'otroTipodeProductoInteresado' => 'Rock pesado',
        'dondeRequieresElServicio' =>
        array(
            'ubicacion' => 'Isla blanca',
            'calle' => 'blanca',
            'noExterior' => '1',
            'noInterior' => '0',
            'colonia' => 'no tengo',
            'referencias' => 'ninguna',
            'fullfilled' => true,
        ),
        'datosDelCliente' =>
        array(
            'nombre' => 'kevin garcia ramirez',
            'telefono' => '9992131323',
            'correo' => 'kevin@wataweb',
            'fechaCita' => NULL,
            'fullfilled' => true,
        ),
        'identificacion' => 'Constructor o encargadod de mantenimiento',
        'mantenimientoPreventivo' => 'No',
    );

    return new ContactForm1Data($FormData);
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
