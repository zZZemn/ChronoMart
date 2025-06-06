<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TestSent implements ShouldBroadcast
{
    use Dispatchable, SerializesModels;

    public string $message;

    public function __construct(string $message)
    {
        $this->message = $message;
    }

    public function broadcastOn(): array
    {
        // Replace 'chat.1' with dynamic logic if needed
        return [new PrivateChannel('private-test-channel.1')];
    }

    public function broadcastAs(): string
    {
        return 'Sent';
    }
}