<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index()
    {
        $menu = Menu::all();
        return inertia('Welcome', [
            'menu' => $menu
        ]);
    }
}
