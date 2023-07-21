<?php

namespace App\Http\Controllers;

use App\Models\Reservation;

class DashboardController extends Controller
{
    public function index()
    {
        $reservation = Reservation::all();
        return inertia('Dashboard', ['reservation' => $reservation]);
    }

}
