<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\InvitationPostRequest;
use App\Models\Invitation;

class InvitationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('invitation');
    }

    /**
     * @param Request $request
     */
    public function post(InvitationPostRequest $request)
    {
        $param = $request->validated();
        Invitation::updateOrCreate(
            ['user_id' => $param['user_id']],
            $request
        );
    }
}
