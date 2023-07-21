<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'image' => 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg',
                'name' => 'Pizza Solo',
                'price' => 0.7,
            ],
            [
                'image' => 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
                'name' => 'Fride Kentang',
                'price' => 2,
            ],
            [
                'image' => 'https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380__340.jpg',
                'name' => 'Udang Mie',
                'price' => 1,
            ],
            [
                'image' => 'https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg',
                'name' => 'Nasi Uduk',
                'price' => 2,
            ],
            [
                'image' => 'https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491__340.jpg',
                'name' => 'Brokoli Kuche',
                'price' => 1,
            ],
            [
                'image' => 'https://cdn.pixabay.com/photo/2016/09/26/17/52/goulash-1696569_960_720.jpg',
                'name' => 'Special Lamongan',
                'price' => 3,
            ],
            [
                'image' => 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153__340.jpg',
                'name' => 'Vegetable',
                'price' => 2,
            ],
            [
                'image' => 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054__340.jpg',
                'name' => 'Burger King',
                'price' => 4,
            ],
        ];
        DB::table('menus')->insert($data);
        
    }
}
