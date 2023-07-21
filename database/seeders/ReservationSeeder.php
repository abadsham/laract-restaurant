<?php

namespace Database\Seeders;

use App\Models\Table;
use App\Models\Reservation;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Table::factory(15)->create();
        // Reservation::factory(15)->create();

        DB::table('reservations')->insert([
            'name' => 'adit',
            'address' => 'Maluku',
            'date' => '2023-02-13',
        ],
        [
            'name' => 'adit',
            'address' => 'Maluku',
            'date' => '2023-02-13',
        ],
        [
            'name' => 'adit',
            'address' => 'Maluku',
            'date' => '2023-02-13',
        ]);
    }
}
