<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'is_attend',
        'desired',
        'has_allergy',
        'allergy_detail',
        'message',
        'address',
        'tel',
    ];
}
