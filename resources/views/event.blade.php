@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @include('parts.header')
        @include('parts.tab')
        <div class="card">
            <div class="card-header">{{ __('Event') }}</div>

            <div class="card-body">
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                {{ __('Event Page') }}
            </div>
        </div>
    </div>
</div>
@endsection
