<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 初期ページはログイン
Route::get('/', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm']);

Auth::routes([
    'verify'   => true,
    'register' => false, // デフォルトの登録機能OFF
    'reset'    => true,
]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/event', [App\Http\Controllers\EventController::class, 'index'])->name('event');

Route::get('/invitation', [App\Http\Controllers\InvitationController::class, 'index'])->name('invitation');
Route::post('/invitation', [App\Http\Controllers\InvitationController::class, 'post'])->name('invitation_post');