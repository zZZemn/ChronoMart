<?php

namespace App\Http\Controllers;

use App\Events;

class TestController extends Controller
{
    public function send()
    {
        broadcast(new TestSent("Hello from controller!"));

        return response()->json(['status' => 'Message broadcasted']);
    }
}
