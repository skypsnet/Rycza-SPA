@component('mail::message')
# Información recabada en formulario de contacto:
<h2>Datos del cliente :</h2>

<p>
  Nombre : {{ $FormData['datosDelCliente']['nombre']}}
</p>
<p>
  Teléfono : {{ $FormData['datosDelCliente']['telefono']}}
</p>
<p>
  Correo : {{ $FormData['datosDelCliente']['correo']}}
</p>

@isset($FormData['goterasHumedadEnDomicilio'])
<h2>Goteras en domicilio :</h2>
<p>
  {{$FormData['goterasHumedadEnDomicilio']}}
</p>
@endisset

@isset($FormData['tipoDeConstruccion'])
<h2>TipoDeConstruccion :</h2>
<p>
  {{$FormData['tipoDeConstruccion']}}
</p>
@endisset
@isset($FormData['otroTipoDeConstruccion'])
<h2>Otro tipo de construccion :</h2>
<p>
  {{$FormData['otroTipoDeConstruccion']}}
</p>
@endisset

@isset($FormData['productoInteresado'])
@if(sizeof($FormData['productoInteresado']) > 1)
<h2>Productos interesados :</h2>
@else
<h2>Producto interesado :</h2>
@endif
<p>

<p>
  @foreach($FormData['productoInteresado'] as $producto)
  {{$producto}},
  @endforeach
</p>
</p>
@endisset

@isset($FormData['otroTipodeProductoInteresado'])
<h2>Otro tipo de producto interesado :</h2>
<p>
  {{$FormData['otroTipodeProductoInteresado']}}
</p>
@endisset

@isset($FormData['identificacion'])
<h2>Se identifica como : </h2>
<p>
  {{$FormData['identificacion']}}
</p>
@endisset

@isset($FormData['mantenimientoPreventivo'])
<h2>Mantenimiento preventivo : </h2>
<p>
  {{$FormData['mantenimientoPreventivo']}}
</p>
@endisset

@isset($FormData['dondeRequieresElServicio'])
<h2>Requiere el servicio en : </h2>
<p>
  Ubicacion : {{ $FormData['dondeRequieresElServicio']['ubicacion']}}
</p>
<p>
  Calle : {{ $FormData['dondeRequieresElServicio']['calle']}}
</p>
<p>
  Colonia : {{ $FormData['dondeRequieresElServicio']['colonia']}}
</p>
<p>
  No.Exterior : {{ $FormData['dondeRequieresElServicio']['noExterior']}}
</p>
<p>
  No.Interior : {{ $FormData['dondeRequieresElServicio']['noInterior']}}
</p>
<p>
  Referencias : {{ $FormData['dondeRequieresElServicio']['referencias']}}
</p>
@endisset



@endcomponent
