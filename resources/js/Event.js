import React from 'react';
import '../css/Event.css'

const Event = () => {
    return (
        <div className="wrapper">
          <div className="event_main">
            <div className="event_main__title font_gray">
              新型コロナウイルス対策のご案内について
            </div>
            <div className="event_main__description font_gray">
                <div className="event_main__description_block">
                    新型コロナウイルスの感染拡大が懸念される中<br/>
                    結婚式の参加に関しましてもご心配をおかけしていると思います。
                </div>
                <div className="event_main__description_block">
                    話し合いの結果 結婚式と披露宴を親族のみの10名程度<br/>
                    二次会を友人20名程度で 規模を縮小して行うことにいたしました
                </div>
                <div className="event_main__description_block">
                    このような渦中に結婚式にご参加下さる皆様に<br/>
                    安心して過ごしていただけるよう<br/>
                    当日は除菌スプレーや除菌シートの配布 会場スタッフのマスク着用<br/>
                    会場の換気 共有部分の定期的な消毒などを実施いたします
                </div>
                <div className="event_main__description_block">
                    ご心配な点がございましたらお気軽にご相談ください
                </div>
            </div>
            <div className="event_main__title font_gray">
              結婚式二次会について
            </div>
            <div className="event_main__description_block">
                <table>
                    <tr>
                        <th>開催日</th>
                        <td>2021年12月18日(土)</td>
                    </tr>
                    <tr>
                        <th>開催時間</th>
                        <td>18時45分〜</td>
                    </tr>
                    <tr>
                        <th>所在地</th>
                        <td>東京都港区台場1-9-1</td>
                    </tr>
                    <tr>
                        <th>駐車場</th>
                        <td>あり/300台(地下駐車場)</td>
                    </tr>
                    <tr>
                        <th>アクセス</th>
                        <td>
                            ゆりかもめ線「台場駅」より徒歩1分<br/>
                            りんかい線「東京テレポート駅」より徒歩1分<br/>
                            無料シャトルバスあり
                        </td>
                    </tr>
                    <tr>
                        <th>会費</th>
                        <td>¥10,000</td>
                    </tr>
                </table>
            </div>
          </div>
        </div>
    );
}

export default Event;