// import {arrSliderCard} from '/assets/js/slider-card.js'; // массив с карточками

// function sliderFunction(lineSliders, leftBtn, rightBtn, dot) {


// const sliderLine = document.querySelector(lineSliders),
//     btnLeft = document.querySelector(leftBtn),
//     btnRight = document.querySelector(rightBtn),
//     dots = document.querySelectorAll(dot);

// let position = 0,
//     dotIndex = 0;

// const nextSlide = () => {
//     if(position < (dots.length-1) * 400) {
//         position += 400;
//         dotIndex++
//     } else {
//         position = 0;
//         dotIndex = 0;
//     }
//     sliderLine.style.left = -position + "px";
//     thisSlide(dotIndex);
// };

// const prevSlide = () => {
//     if(position > 0) {
//         position -= 400;
//         dotIndex--
//     } else {
//         position = (dots.length-1) * 400;
//         dotIndex = (dots.length-1)
//     }
//     sliderLine.style.left = -position + "px";
//     thisSlide(dotIndex);
// };

// const thisSlide = (index) => {
//     for (let dot of dots) {
//         dot.classList.remove('active');
//     }
//     dots[index].classList.add('active');
// }

// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", prevSlide);

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         position = 400 * index;
//         sliderLine.style.left = -position + 'px'
//         dotIndex = index;
//         thisSlide(dotIndex);
//     });
// });


// };
// !document.querySelector('#sliderLineDown') || sliderFunction("#sliderLineDown", "#btnLeftDown", "#btnRightDown", ".dotDown");
// !document.querySelector('#sliderLineUp') || sliderFunction("#sliderLineUp", "#btnLeftUp", "#btnRightUp", ".dotUp");


/**
 * карусель из карточек
 */
// function sliderAll(){
// const arrSliderCardJson = arrSliderCard().slice();


// const cardsSumCard = document.querySelector('#sliderLineUp');
    
// arrSliderCardJson.forEach((el) => {
//     let count = 1;
    
//     if (el.id  == 1 || el.id % 5 == 0) {
    
     
//     const sliderGroup = document.createElement('div');
//     sliderGroup.classList.add('carousel-cards__up-item');

   

//     const cardSlide = document.createElement('div');
//     cardSlide.classList.add('card-box__card-up');
//     cardSlide.innerHTML = `
//         <img src="${el.images}" alt="${el.title}" />
//         <div class="card-content">
//             <p>${el.description}</p>
//             <div class="card-basket">
//                 <div class="basket-sum sumUp" data-sum-id="${el.id}">
//                     <span class="card-basket__from">от</span>
//                     <span class="card-basket__sum">14&nbsp;700</span>
//                     <span class="card-basket__forex">&nbsp;₽</span>
//                 </div>
//                 <div class="calc calcUp" data-calc-id="${el.id}">
//                     <a class="minus">&minus;</a>
//                     <span class="calc-elem">1</span>
//                     <a class="plus">&plus;</a>
//                 </div>
//                 <a class="link-basket basketUp" data-basket-id="${el.id}">
//                     <img src="assets/images/icon-basket.png"
//                         alt="icon-basket"
//                     />
//                 </a>
//             </div>
//         </div> 
//     `;

//     count++;
//     console.log('up' + count + ' ' + el.id);


//     sliderGroup.append(cardSlide);

    

//     cardsSumCard.append(sliderGroup);
// } else {
    
//     const cardSlide = document.createElement('div');
//     cardSlide.classList.add('card-box__card-up');
//     cardSlide.innerHTML = `
//         <img src="${el.images}" alt="${el.title}" />
//         <div class="card-content">
//             <p>${el.description}</p>
//             <div class="card-basket">
//                 <div class="basket-sum sumUp" data-sum-id="${el.id}">
//                     <span class="card-basket__from">от</span>
//                     <span class="card-basket__sum">14&nbsp;700</span>
//                     <span class="card-basket__forex">&nbsp;₽</span>
//                 </div>
//                 <div class="calc calcUp" data-calc-id="${el.id}">
//                     <a class="minus">&minus;</a>
//                     <span class="calc-elem">1</span>
//                     <a class="plus">&plus;</a>
//                 </div>
//                 <a class="link-basket basketUp" data-basket-id="${el.id}">
//                     <img src="assets/images/icon-basket.png"
//                         alt="icon-basket"
//                     />
//                 </a>
//             </div>
//         </div> 
//     `;

//     let elems = document.querySelectorAll(".carousel-cards__up-item");
//     let len = elems.length;
//     let lastelement = len < 1 ? "" : elems[len-1];



//     lastelement.append(cardSlide); // тут нужно выбрать последний элемент

//     count++;
//     console.log('down' + count + ' ' + el.id)

// }
/**
 * Корзина
 */
// const openCalc = () => {
//     if (document.querySelector(`[data-calc-id="${el.id}"]`).style.display == 'none') {
//         document.querySelector(`[data-sum-id="${el.id}"]`).style.display = 'none';
//         document.querySelector(`[data-calc-id="${el.id}"]`).style.display = 'flex';
//     } else {
//         document.querySelector(`[data-sum-id="${el.id}"]`).style.display = 'flex';
//         document.querySelector(`[data-calc-id="${el.id}"]`).style.display = 'none';
//     }
// }    

// document.querySelector(`[data-basket-id="${el.id}"]`).addEventListener('click', openCalc);



// });  // карточка карусели


// } 
// !document.querySelector('#carouselUp') || sliderAll();

/**
 * отзыв
 */
function send() {
    var e = $("#form_comment").serialize();
    $.ajax({
        type: "POST",
        url: "ajax.html?act=sendComment",
        data: e,
        success: function(e) {
            $("#form_comment").css({
                display: "none"
            }),
            $("#results").html("Ваш отзыв отправлен на модерацию").show()
        },
        error: function(e, a) {
            alert("Произошла ошибка. Попробуйте добавить отзыв ещё раз.")
        }
    })
}
$(document).on("click", ".make .star", function() {
    $(".make .star").removeClass("fixed");
    var e = $(this).data("num");
    $(".numstar").val(e),
    $(this).addClass("fixed")
}),
$(document).on("mouseover", ".make .star", function() {
    var e = $(this).data("num");
    $(".make .star[data-num=" + e + "]").addClass("red");
    for (var a = 1; a < 6; a++)
        a <= e ? $(".make .star[data-num=" + a + "]").addClass("red") : $(".make .star[data-num=" + a + "]").removeClass("red")
}),
$(document).on("mouseleave", ".make .star", function() {
    if ($(".make .star").hasClass("fixed"))
        for (var e = $(".make .fixed").data("num"), a = 1; a < 6; a++)
            a <= e ? $(".make .star[data-num=" + a + "]").addClass("red") : $(".make .star[data-num=" + a + "]").removeClass("red");
    else
        $(".make .star").removeClass("red")
}),
$(document).on("click", ".addComment", function() {
    $("#formCommentBox").css('display', 'flex')
    // В место где открываем модалку добавляем код.
    document.querySelector('html').classList.add('no-scroll');
}),
$(document).on("click", ".modal-header>span.close", function() {
    $("#formCommentBox").css('display', 'none')
     // В место где закрываем модалку добавляем код.
     document.querySelector('html').classList.remove('no-scroll');
}),
$(document).ready(function() {
    for (var e = 0; e < 3; e++)
        $(".oneRespons").eq(e).show();
    $(".showRespons").click(function() {
        for (var e = 3; e < $(".oneRespons").length; e++)
            $(".oneRespons").eq(e).show(),
            $(".showRespons").hide()
    }),
    $(".oneRespons").length <= 3 && $(".showRespons").hide()
});

/**
 * аккордеон
 */
document.querySelectorAll('.accordion-item_trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion-item--active')) {
            parent.classList.remove('accordion-item--active');
        } else {
           document
       .querySelectorAll('.accordion-item')
       .forEach((child) => child.classList.remove('accordion-item--active'));

                parent.classList.add('accordion-item--active');
        }
        
    })
)

/**
 * список городов
 */
$(document).ready(function() {

    $('.focus_city_map_menu').click(function() {

 

        $('.popup_map_menu').show();

        // В место где открываем модалку добавляем код.
        document.querySelector('html').classList.add('no-scroll');



        if ($('.list_object_in_city').html() == '') {
            $('.one_city_map_menu').removeClass('active_city');
            $('.one_city_map_menu').eq(0).addClass('active_city');
            var curUrl = encodeURIComponent(window.location.pathname);
            var city_Id = $('.one_city_map_menu').eq(0).attr('data_id');
            $.ajax({
                //			url:'/ajax.html?act=dostavka&id='+city_Id,
                url: '/ajax.html?act=dostavka&id=' + city_Id + '&curl=' + curUrl,

                success: function(data) {
                    //var elements=String(data);
                    $('.list_object_in_city').append(data);
                    /*
 $('.addres_in_popup').click(function(){
     var lat=+($(this).attr('latitude'));
     var long=+($(this).attr('longitude'));
     $('.popup_map_menu').hide();
         myMap.panTo([lat,long], {
        flying: true,
         delay:1500});
    $('.focus_city_map_menu').text($(this).attr('name_par'));
    var city_parent=$('.active_city').attr('data_id');
    if($(this).attr('name_par')!=$('.this_city_and_object h2').text()){
        $.ajax({
                url:'//berkut-rnd.ru/ajax.html?act=dostav&id='+city_parent,
                success: function(data){
                    $('.this_city_and_object').append(data);
                    $('.btn_show_map').click(function(){
                     var lat=+($(this).attr('latitude'));
                     var long=+($(this).attr('longitude'));
                     myMap.panTo([lat,long], {
                        flying: true,
                         delay:1500
                    });
                    $("html, body").animate({scrollTop: $("#map").height()+300},"slow");
                 });
                }
            });
        }
    }); 
    */
                }
            });
        }
       

    });
    $('.close_popup_map_menu').click(function() {
        $('.popup_map_menu').hide();
         // В место где закрываем модалку добавляем код.
        document.querySelector('html').classList.remove('no-scroll');
    });

    $('.one_city_map_menu').click(function() {

       

        if ($(this).attr('data_id') != 10216) {
            $('.one_city_map_menu').removeClass('active_city');
            $(this).addClass('active_city');
            var curUrl = encodeURIComponent(window.location.pathname);
            var localId = $(this).attr('data_id');
            $('.list_object_in_city div').remove();
            $.ajax({
                url: '/ajax.html?act=dostavka&id=' + localId + '&curl=' + curUrl,
                //			url:curUrl+'?act=dostavka&id='+localId,

                success: function(data) {
                    //var elements=String(data);
                    $('.list_object_in_city').append(data);
                    /*
$('.addres_in_popup').click(function(){
     var lat=+($(this).attr('latitude'));
     var long=+($(this).attr('longitude'));
    $('.popup_map_menu').hide();
         myMap.panTo([lat,long], {
        flying: true,
         delay:1500
    });
    $('.focus_city_map_menu').text($(this).attr('name_par'));
    if($(this).attr('name_par')!=$('.this_city_and_object h2').text()){
        $('.this_city_and_object h2').remove();
        $('.this_city_and_object div').remove();
        var city_parent=$('.active_city').attr('data_id');
        $.ajax({
                url:'/ajax.html?act=dostav&id='+city_parent,
                success: function(data){
                    $('.this_city_and_object').append(data);
                    $('.btn_show_map').click(function(){
                     var lat=+($(this).attr('latitude'));
                     var long=+($(this).attr('longitude'));
                     myMap.panTo([lat,long], {
                        flying: true,
                         delay:1500
                    });
                    $("html, body").animate({scrollTop: $("#map").height()+300},"slow");
                 });
                }
            });
    }
 });*/
                }
            });
        }
    });
    
})

function sliderBanner() {
/**
 * карусель банер
 */
function widUP(itm) {
    let imagesSum = document.querySelectorAll(itm).length;
    --imagesSum;
    return  imagesSum * 20;
}

function carousels(itmSum, list, itm, left, right, razn = 0, raznRol = 0) {
    const images = document.querySelectorAll(itmSum);
    const sliderLine = document.querySelector(list);
    let count = 0;
    let width;

    function init() {
        width = document.querySelector(itm).offsetWidth;

        sliderLine.style.width = +razn + (width * images.length) + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    }

    init();
    window.addEventListener('resize', init);

     document.querySelector(right).addEventListener('click', function () {
         count++;
         if (count >= images.length) {
             count = 0;
         }
         rollSlider();
     });

    document.querySelector(left).addEventListener('click', function () {
        count--;
        if (count < 0) {
            count = 2;
        }
        rollSlider();
    });

    function rollSlider(raznGap = raznRol) {
        sliderLine.style.transform = 'translate(-' + (count * (width + raznGap)) + 'px)';
        console.log(sliderLine.style.transform);
    }
}

carousels('.card-box__card-banner', '#cardListBanner','#cardBoxBanner', '#btnBannerLeft', '#btnBannerRight');

}
!document.querySelector('#cardListBanner') || sliderBanner()

/**
 * счет на оплату
 */
// function ff() {
(function( $ ){

$(function() {

  $('#commentForm').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('.submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});
      form.find('.empty_field').parent('label').css({'border-color':'#d8512d'});
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
        form.find('.empty_field').parent('label').removeAttr('style');
      },500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  });
});

})( jQuery );

// }
// ff();
	
	$("input").prop('disabled', true);
$("input").prop('disabled', false);
	// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("shop_in_urid");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
    // В место где открываем модалку добавляем код.
    document.querySelector('html').classList.add('no-scroll');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    // В место где закрываем модалку добавляем код.
    document.querySelector('html').classList.remove('no-scroll');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // В место где закрываем модалку добавляем код.
        document.querySelector('html').classList.remove('no-scroll');
    }
}

// For each .file element
$('.file').each(function(){
  // Save some elements as variables
  var $element = $(this);
  var $input = $element.find('input');
  var $value = $element.find('.file-value');
  // Bind event handlers to <input>
  $input.on({
    // On change, update the visible elements
    change: function () {
      // Get the value of the input
      var val = $input.val();
      // Normalize strings
      val = val.replace(/\\/g, "/");
      // Remove the path
      val = val.substring(val.lastIndexOf("/") + 1);
      // Toggle the 'active' class based
      // on whether or not there is a value
      $element.toggleClass('active', !!val.length);
      // Set the value text accordingly
	var ext = ( parts = val.split(".") ).length > 1 ? parts.pop() : "";
	var valid_types = ["doc", "docx", "xls", "xlsx", "odt", "pdf"];
		if ($.inArray(ext, valid_types) >= '0') { $value.text(val);} else {$value.text('Недопустимое расширение ' +ext);}
		

    },
    // On focus, add the focus class
    focus: function () {
      $element.addClass('focus');
    },
    // On blur, remove the focus class
    blur: function () {
      $element.removeClass('focus');
    }
  });
});

/**
 * скидка
 */
var modal_yanita = document.getElementById('modal-skidka');
var btn = document.getElementById("modal-skidka-btn");
var span = document.getElementsByClassName("close-modal-skidka")[0];
if (btn) {
    btn.onclick = function() {
        modal_yanita.style.display = "flex";
        // В место где открываем модалку добавляем код.
        document.querySelector('html').classList.add('no-scroll');
    }
}
span.onclick = function() {
    modal_yanita.style.display = "none";
    // В место где закрываем модалку добавляем код.
    document.querySelector('html').classList.remove('no-scroll');
}
window.onclick = function(event) {
    if (event.target == modal_yanita) {
        modal_yanita.style.display = "none";
        // В место где закрываем модалку добавляем код.
        document.querySelector('html').classList.remove('no-scroll');
    }
}


// function ggg() {
(function($){
	
	$(window).on('load',function(){
		$('.delta-mailer-form .frm_submit button').each(function(){
			$(this).parents('.delta-mailer-form').find('form').submit(function(){
				return false;
			});
			$(this).on('click',function(){
				var bttn = $(this);
				if (bttn.hasClass('frm_submit_load')) return;
				bttn.addClass('frm_submit_load');
	
				var box = bttn.parents('.delta-mailer-form');
				var frm = box.find('form');
	
				box.addClass('frm_loading');
	
				frm.find('input[name="cntrl"]').val(new Date().getTime());
	
				box.find('.frm_result').hide();
				
				$('#errcena_m').remove();
				$('#errlink').remove();
				frm.find('#errname').remove();
				frm.find('#errphone').remove();

				var formData = new FormData(frm[0]);
				var ajaxresult = $.ajax({
					url: frm.attr('action')+'?delta-mailer-form-send',
					data: formData,
					processData: false,
					contentType: false,
					type: 'POST',
					dataType: 'JSON',
					cache: false
				}).done(function(data){

					$('#errcena_m').remove();
					$('#errlink').remove();
					$('#errname').remove();
					$('#errphone').remove();

					if (data.errors) {
						let err = data.errors;
						if (err.name)
							$('input[name="'+err.name.name+'"]').parent().append(err.name.value);
						else
							$('#errname').remove();
						if (err.link)
							$('input[name="'+err.link.name+'"]').parent().append(err.link.value);
						else
							$('#errlink').remove();
						if (err.cena_m) 
							$('input[name="'+err.cena_m.name+'"]').parent().append(err.cena_m.value);
						else
							$('#errcena_m').remove();
						if (err.phone)
							$('input[name="'+err.phone.name+'"]').parent().append(err.phone.value);
						else
							$('#errphone').remove();
					}
					bttn.removeClass('frm_submit_load');
					box.removeClass('frm_loading');
					var res = box.find('.frm_result_'+data.res);
					if (data.text) res.html(data.text);
					res.show();
					if (data.hideform == 'true') {
						frm.remove();
					}
					if (data.res == 'ok') {
						frm.find('.autosave').each(function(){
							var e = $(this);
							var nm = 'autosave_'+e.attr('id');
							localStorage.setItem(nm,'');
						});
					}
				});
				return;
			});
		});
	});
		
	$(document).ready(function(){
		var autosavetimer = new Array();
		$('.autosave').each(function(){
			var e = $(this);
			var nm = 'autosave_'+e.attr('id');
			e.val(localStorage.getItem(nm));
			e.on('keyup',function(){
				var e = $(this);
				var nm = 'autosave_'+e.attr('id');
				clearTimeout(autosavetimer[nm]);
				autosavetimer[nm] = setTimeout(function(){
					localStorage.setItem(nm,e.val());
				},500);
			});
		});
		$('.labelplaceholder .inp').focus(function(){
			$(this).parent().addClass('focus');
		});
		$('.labelplaceholder .inp').focusout(function(){
			if ($(this).val() == '') {
				$(this).parent().removeClass('focus');
			}
		});
		$('.labelplaceholder .inp').each(function(){
			if ($(this).val() != '') {
				$(this).parent().addClass('focus');
			}
		});
	});
	
	$(document).on('click','.myform .frm_file .frm_clear',function(){
		var e = $(this);
		var b = e.parents('.frm_file');
		b.remove();
	});
	
	$(document).on('change','.myform .frm_file input',function(){
		var e = $(this);
		var b = e.parents('.frm_file');
		if (
			b.hasClass('frm_input_multi')
			&& ! b.hasClass('focus')
		) {
			var id = e.attr('id');
			var cnt = b.parent().find('.frm_file').length;
			do {
				cnt++;
			} while ($('#'+id+'_'+cnt).length);
			var c = b.clone();
			c.find('input').attr('id',id+'_'+cnt).val(null);
			c.find('label').attr('for',id+'_'+cnt);
			c.appendTo(b.parent());
		}
		b.addClass('focus').find('label').text($(this)[0].files[0].name);
	});
	
})(jQuery);
// }
// ggg()