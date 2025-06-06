<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('chat.{chatId}', fn ($user, $chatId) => true);

Broadcast::channel('private-test-channel.1', function ($user, $id) {
    // Allow access to the channel
    return true; // or use actual user auth logic
});
