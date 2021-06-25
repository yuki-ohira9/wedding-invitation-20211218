<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InvitationsRequest extends FormRequest
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
            'is_attend' => 'required|boolean',
            'email' => 'required',
            'address' => 'required|max:255',
            'tel' => 'required',
            'has_allergy' => 'required|boolean',
            'allergy_detail' => 'nullable',
            'message' => 'nullable',
        ];
    }
}
