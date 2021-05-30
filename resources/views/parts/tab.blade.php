<ul class="nav nav-tabs nav-fill">
  <li class="nav-item">
    <a
        class="nav-link {{ \Route::currentRouteName() === 'home' ? 'active' : '' }}" 
        href="{{ \Route::currentRouteName() === 'home' ? '#' : route('home') }}">
        Greeting</a>
  </li>
  <li class="nav-item">
    <a
        class="nav-link {{ \Route::currentRouteName() === 'event' ? 'active' : '' }}"
        href="{{ \Route::currentRouteName() === 'event' ? '#' : route('event') }}">
        Event</a>
  </li>
  <li class="nav-item">
    <a
        class="nav-link {{ \Route::currentRouteName() === 'invitation' ? 'active' : '' }}"
        href="{{ \Route::currentRouteName() === 'invitation' ? '#' : route('invitation') }}">
        RSVP</a>
  </li>
</ul>