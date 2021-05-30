@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @include('parts.header')
        @include('parts.tab')
        <div class="card">
            <div class="card-body">
            <h3 class="heading"></h3>
                <article class="post">
                    <h3>新型コロナウイルス対策のご案内について</h3>
                    <p>
                        <img src="{{ asset('image/lobby.jpg') }}" alt="" width="260" height="113" class="alignright size-full wp-image-207" />
                        新型コロナウイルスの感染拡大が懸念される中<br>
                        結婚式の参加に関しましてもご心配をおかけしているかと思います<br><br>
                        話し合いの結果  結婚式と披露宴を親族のみの10名程度<br>
                        二次会を友人20名程度で  規模を縮小して行うことにいたしました<br><br>
                        このような渦中に結婚式にご参加下さる皆様に<br>
                        安心して過ごしていただけるよう<br>
                        当日は除菌スプレーや除菌シートの配布  会場スタッフのマスク着用<br>
                        会場の換気  共有部分の定期的な消毒などを実施いたします<br><br>
                        ご心配な点がございましたらお気軽にご連絡ください<br>
                        <blockquote>
                        <p class="message-infection-prevention">
                            コロナの感染対策内容を箇条書きするの要検討<br>
                            1.<br>
                            2.<br>
                            3.<br>
                        </p>
                        </blockquote>
                    </p>
                    <h3>何書こうかな</h3>
                    <p><img src="{{ asset('image/appearance.jpg') }}" alt="" width="260" height="113" class="alignleft size-full wp-image-210" />
                    <p>何書こうかなあああ～</p><br><br><br><br><br><br><br><br><br><br><br><br>
                    <h3>結婚式二次会について</h3>
                    <table class="event">
                        <tbody>
                            <tr>
                                <th>開催日時</th>
                                <td data-label="開催日" class="txt"><span>2021年12月18日(土)</span></td>
                                <td data-label="開催時刻" class="price">18時45分～<br>
                                </td>
                            </tr>
                            <tr>
                                <th>会場詳細</th>
                                <td data-label="所在地"class="price">東京都港区台場1-9-1</td>
                                <td data-label="駐車場"class="price">あり/300台 (地下駐車場) </td>
                                <td data-label="アクセス"class="price">ゆりかもめ線「台場駅」より徒歩1分<br>
                                りんかい線「東京テレポート駅」より徒歩10分<br>
                                無料シャトルバスあり</td>
                            </tr>
                            <tr>
                                <th>その他</th>
                                <td data-label="会費" class="txt">¥10,000</td>
                            </tr>
                        </tbody>
                    </table>  
                </article>
            </div>
        </div>
    </div>
</div>
@endsection
