const doWrite = (id) => {
  // アニメーションさせたいクラス
  var container = $(`#${id}`);
  // アニメーションスピード
  var speed = 100;

  // テキストの間にスペースを入れます
  var content = container.text();
  var text = $.trim(content);
  var newHtml = "";

  // スペースで区切ったテキストを、テキストの数だけspanで囲む
  textLength = 0;
  text.split("").forEach(function(v) {
    newHtml += '<span>' + v + '</span>';
    textLength++;
  });

  // spanで囲んだテキスト群をHTMLに戻す
  container.html(newHtml);

  // 1文字ずつ表示
  var txtNum = 0;
  container.css({opacity: 1});
  interval = setInterval(function() {
    container.find('span').eq(txtNum).css({opacity: 1});
    txtNum++
    if (txtNum >= textLength) {
        clearInterval(interval);
        if      (id == 'invitation-title')        doWrite('invitation-description1');
        else if (id == 'invitation-description1') doWrite('invitation-description2');
    }
  }, speed);
};

doWrite('invitation-title');