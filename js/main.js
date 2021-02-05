//スムーススクロール設定（ABOUT）
$(function(){
  $('a[href^="#"]').click(function(){ //#から始まるaタグをクリックしたら、以下の処理を実行。
    var speed = 1000; //スクロールの速さを調節。
    var href= $(this).attr("href"); //リンクをクリックしたときのジャンプ先を取得。取得した値をhrefオブジェクトに代入する。
    var target = $(href == "#" || href == "" ? 'html' : href); //もしリンク先が#のみ、もしくは、空白の場合はリンク先をhtmlに設定。
    var position = target.offset().top - 110; //リンクまでのの座標（距離）を取得し、positionオブジェクトに代入。着地点を調節。ex)着地点を100px上にずらす（- 100）
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//TOPに戻るボタンの処理
$(document).ready(function () { //jQueryを使い、DOMの読み込みが完了したときに処理を実行するための記述。
  $("#back-to-top").hide(); //ボタンを非表示にする。
  $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) { //ページの上から100pxスクロールしたとき。
          $("#back-to-top").fadeIn(); //ボタンをフェードイン。
      } else {
          $("#back-to-top").fadeOut(); //ボタンをフェードアウト。
      };
  });
  //スムーススクロール設定（TOP）
  $('#back-to-top').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 800); //スクロールの速さ。
      return false;
  });
});

//アコーディオンメニュー
$('.faq-question').on('click', function(){
	$(this).toggleClass('active');            //該当するHTMLタグ（faq-questionのクラスがついているHTMLタグ）を$(this)で指定する。
	$(this).next().slideToggle(); //next()で指定したHTMLの次隣を指定し、slideToggle()でアニメーション開閉。
});

//ハンバーガーメニュー
$(document).ready(function() {
  $('.drawer').drawer();
});