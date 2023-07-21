<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Reservation;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menu = Menu::latest()->get();
        return Inertia('Menus', [
            'menu' => $menu
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Menu/CreateMenus');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'name'   => 'required',
            'image' => 'required',
            'price'   => 'required',
        ]);

        $image= $request->file('image');
        $image->storeAs('public/menus', $image->hashName());

        //create post
        Menu::create([
            'name'     => $request->name,
            'image'    =>$image->hashName(),
            'price'   => $request->price,
        ]);

        //redirect
        return redirect()->route('menu.index')->with('success', 'Data Berhasil Disimpan!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Menu $menu)
    {
        return Inertia::render('Menu/EditMenus', [ 'menu' => $menu ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Menu $menu)
    {
        //set validation
        $request->validate([
            'name'   => 'required',
            'price'   => 'required',
        ]);
        if($request->file('image')){
            Storage::disk('local')->delete('public/menus/' .basename($menu->image));

            $image = $request->file('image');
            $image->storeAs('public/menus', $image->hashName());

            $menu->update([
                'name'     => $request->name,
                'image'    => $image->hashName(),
                'price'   => $request->price,
            ]);

            // return redirect()->route('menu.index')->with('success', 'Data Berhasil Disimpan!');

        }
        //create post
        $menu->update([
            'name'     => $request->name,
            'price'   => $request->price,
            
        ]);

        //redirect
        return redirect()->route('menu.index')->with('success', 'Data Berhasil Disimpan!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $menu)
    {
        Storage::disk('local')->delete('public/menus'.basename($menu->image));
        $menu->delete();
        return redirect()->route('menu.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
