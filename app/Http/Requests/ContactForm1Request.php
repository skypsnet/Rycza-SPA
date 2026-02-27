<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactForm1Request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'goterasHumedadEnDomicilio' => '',
            'tipoDeConstruccion' => '',
            'otroTipoDeConstruccion' => '',
            'productoInteresado' => '',
            'otroTipodeProductoInteresado' => '',
            'dondeRequieresElServicio' => 'required',
            'datosDelCliente' => 'required',

        ];
    }
}
