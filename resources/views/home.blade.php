@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            @include('parts.header')
            @include('parts.tab')
            <div class="card">
                <div class="card-body">
                    <h2></h2>
                    <div class="message">
                        <p>皆様におかれましては</br>
                            ますます  ご清祥のこととお慶び申し上げます</br>
                            </br>
                            このたび  私たちは結婚をすることになりました</br>
                            つきましては  日頃お世話になっております皆様に</br>
                            感謝を込めて  ささやかな小宴を催したく存じます</br>
                            </br>
                            ご多用中  誠に恐縮ではございますが</br>
                            ぜひ  ご出席をいただきたく  ご案内申し上げます</br>
                            </br>
                        </p>
                    </div>
                    <h2></h2>
                    <div class="list">
                        <figure><img src="{{ asset('image/groom.jpg') }}" alt="タイトル"></figure>
                        <h4>大平 悠貴</h4>
                        <p>
                            1994年6月12日生まれ</br>
                            職業はSE</br>
                            趣味は野球、DIY
                        </p>
                    </div>

                    <div class="list">
                        <figure><img src="{{ asset('image/bride.jpg') }}" alt="タイトル"></figure>
                        <h4>野田 梨香子</h4>
                        <p>
                            1997年2月12日生まれ</br>
                            職業はSE</br>
                            趣味は料理、漫画、絵画
                        </p>
                    </div>
                    <h2></h2>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
