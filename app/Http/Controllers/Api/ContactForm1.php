<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactForm1Request;
use App\Mail\ContactForm1Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class ContactForm1 extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['ERROR' => 405]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContactForm1Request $request)
    {
        if ($request->validated()) {
            try {
                $data = $request->all();
                Mail::to(env('MAIL_TO_ADDRESS'))->send(new ContactForm1Data($data));
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false, 'ERROR' => 500, 'message' => $e->getMessage(),
                    'sendedData' => $request->all()
                ]);
            }
            return response()->json([
                'success' => true, 'message' => 'Formulario enviado correctamente',
                'sendedData' => $request->all()

            ]);
        }
        return response()->json(['success' => false]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['ERROR' => 405]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return response()->json(['ERROR' => 405]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json(['ERROR' => 405]);
    }
}
