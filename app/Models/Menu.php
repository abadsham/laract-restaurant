<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'image', 'price',];

    public function getImageAttribute($image)
    {
        return asset('storage/menus/' .$image);
    }
}
