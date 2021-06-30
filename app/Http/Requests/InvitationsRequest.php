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
            'email' => 'required|email',
            'address' => 'required|max:255',
            'tel' => 'required',
            'has_allergy' => 'required|boolean',
            'allergy_detail' => 'nullable',
            'message' => 'nullable',
        ];
    }

    /**
     * 
     */
    public function attributes()
    {
        return [
            'is_attend' => 'ご出席・ご欠席',
            'email' => 'メールアドレス',
            'address' => '住所',
            'tel' => '電話番号',
            'has_allergy' => 'アレルギー',
            'allergy_detail' => 'アレルギー詳細',
            'message' => 'メッセージ',
        ];
    }
}
