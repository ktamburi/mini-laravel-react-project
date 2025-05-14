<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

// Route::get('/', function () {
//     // return inertia('Home');
//     return Inertia::render('Home', ['name' => 'Klaudia']);
// });

// or

// Route::inertia('/', 'Home');

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');
