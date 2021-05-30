@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @include('parts.header')
        @include('parts.tab')
        <div class="card">
            <div class="card-body">
                <div class="contact-area inner">
                    <p class="contact-message">お問い合わせ、ご要望等がございましたら、お気軽にお問い合わせください。<br>
                        下記のプライバシーポリシーをご確認の上、送信してください。<br>
                        <span class="message-notice"><span class="essential">必須</span>は必須項目です。</span>
                    </p>
                    <p class="text notosan"><a href="">送信にあたっては、こちらのプライバシーポリシーをご覧ください。</a></p>
                    <div class="contact-inner">
                        <form method="post" action="{{ route('invitation_post') }}">
                            @csrf
                            <table class="contact-table">
                                <tr class="table-list">
                                    <th>
                                        <label for="name">お名前<span class="essential">必須</span></label>
                                    </th>
                                    <td>
                                        <input type="text" name="name" id="name" placeholder="お名前をご入力ください" class="input-area" autocomplete="name">
                                    </td>
                                </tr>
                                <tr class="table-list">
                                    <th><label for="furigana">ふりがな<span class="essential">必須</span></label></th>
                                    <td>
                                        <input type="text" name="furigana" id="furigana" placeholder="ふりがなをご入力ください" class="input-area">
                                    </td>
                                </tr>
                                <tr class="table-list">
                                    <th><label for="company-name">会社名</label></th>
                                    <td>
                                        <input id="company" type="company-name" name="company-name" placeholder="会社名をご入力ください" class="input-area" autocomplete="company-name">
                                    </td>
                                </tr>
                                <tr class="table-list">
                                    <th><label for="mail">メールアドレス<span class="essential">必須</span></label></th>
                                    <td>
                                        <input id="mail" type="email" name="mail" placeholder="メールアドレスをご入力ください" class="input-area" autocomplete="email">
                                    </td>
                                </tr>
                                <tr class="table-list">
                                    <th><label for="comment">お問い合わせ内容<span class="essential">必須</span></label></th>
                                    <td>
                                        <textarea id="comment" name="comment"></textarea>
                                    </td>
                                </tr>
                            </table>
                            <input type="submit" value="送信する" class="submit-button">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
