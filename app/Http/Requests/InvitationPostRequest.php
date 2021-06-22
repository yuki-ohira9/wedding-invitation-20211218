<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InvitationPostRequest extends FormRequest
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
            'user_id' => 'required',
            'is_attend' => 'required',
            'desired' => 'nullable|max:255',
            'has_allergy' => 'required|boolean',
            'allergy_detail' => 'nullable|max:255',
            'message' => 'nullable|max:255',
            'address' => 'required|max:255',
            'tel' => 'required|max:20',
        ];
    }
}
