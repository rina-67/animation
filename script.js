$(function(){
 $(window).on('load',function(){
  
//eachでi2を繰り返し処理、$(this)はイベントが発生した要素、つまりi2のいずれか、attrではsrc属性をそのイベントが発生したi2のdata-srcという属性に変更
	$(".i2").each(function (i) {
		$(this).attr('src',$(this).attr('data-src'));
    });
    
   
//demo_divでclickイベントを行い、第二引数で追加の要素を指定(clickイベントを行うもの)、eはイベントのe
	$('.demo_div').on('click','.open_flg', function(e) {
		$(this).addClass('close_flg').removeClass('open_flg');//this(clickされたdemo_div)にクラスを追加&削除、クラス名が変わる
		$(this).find('.i1').addClass('ani1_1').removeClass('ani2_1');//子孫要素である.i1を指定、cssのclassを追加&削除,i1でani1_1を実行
		$(this).find('.i2').addClass('ani1_2').removeClass('ani2_2');
	});

	$('.demo_div').on('click','.close_flg', function(e) {
		$(this).addClass('open_flg').removeClass('close_flg');
		$(this).find('.i1').addClass('ani2_1').removeClass('ani1_1');
		$(this).find('.i2').addClass('ani2_2').removeClass('ani1_2');
	});

 });
});