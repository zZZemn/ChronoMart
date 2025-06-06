import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

export const echo = new Echo({
  broadcaster: 'reverb',
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST || window.location.hostname,
  wsPort: parseInt(import.meta.env.VITE_REVERB_PORT || '8080'),
  forceTLS: false,
  enabledTransports: ['ws', 'wss'],
});
