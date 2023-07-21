<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'admin',
            'email' => 'admin@test.test',
            'password' => bcrypt('password'),
        ], [
            'name' => 'admin2',
            'email' => 'admin2@test.test',
            'password' => bcrypt('password'),
        ]);
        $admin->assignRole('admin');
        
        $user = User::create([
            'name' => 'user',
            'email' => 'user@test.test',
            'password' => bcrypt('password'),
        ], [
            'name' => 'user2',
            'email' => 'user2@test.test',
            'password' => bcrypt('password'),
        ]);
        $user->assignRole('user');
    } 
}
