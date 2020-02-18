$(function () {

  $('.blog-bottom__form .btn').click(function () {
      var token = $('meta[name=csrf]').attr('content');
      var name = $('.blog-bottom__form input[name=subscribe_name]');
      var email = $('.blog-bottom__form input[name=subscribe_email]');
      var modal = '<div class="modal" style="text-align: center;">Пожалуйста ожидайте...</div>';

      if(name === '') {
          alert('Заполните поле Имя');
          return false;
      }

      if(email === '') {
          alert('Заполните поле Email');
          return false;
      }

      modal = $(modal).appendTo('body').modal({
          fadeDuration: 250,
          escapeClose: false,
          clickClose: false,
          showClose: false
      });

      $.ajax({
          method: "POST",
          url: '/sendpulse.php',
          data: {csrf: token, name: $(name).val(), email: $(email).val()},
          dataType: "html",
          success: function (html) {
              $.modal.close();
              $(html).appendTo('body').modal({
                  fadeDuration: 250
              });
              $(name).val('');
              $(email).val('');
          },
          error: function (jqXHR, exception) {
              let html = jqXHR.responseText;
              $(html).appendTo('body').modal();
          }
      });
      return false;
  });

  $('.zones_btns button').click(function () {
      let zone = $(this).data('zone');
      $('#select-zone').val(zone);
      return false;
  });

  $('#search-btn').click(function () {
      var token = $('meta[name=csrf]').attr('content');
      let domain = $('#domain_input').val();
      if (domain.length < 3) {
          alert('Доменное имя должно быть как минимум из 3 символов!');
          return false;
      }
      let zone = $('#select-zone').val();
      domain = domain + '.' + zone.toLowerCase();
      let price = 0;
      let price_id = 7;
      if(zone === 'ru') {
          price = 590;
          price_id = 3;
      }
      if(zone === 'рф') {
          price = 590;
          price_id = 5;
      }
      if(zone === 'com') {
          price = 990;
          price_id = 7;
      }
      if(zone === 'net') {
          price = 990;
          price_id = 31;
      }
      $('#domain_input').attr('disabled', 'disabled');
      $('.search__form button').attr('disabled', 'disabled');
      $('.search__form-inner').css('background-color', '#ebebe4');
      $('.search__subtitle').text('Подождите, проверяю доступность...');
      $.ajax({
          method: "GET",
          url: "/regru.php?domain=" + domain,
          dataType: "json",
          success: function (data) {
              $('#domain_input').removeAttr('disabled');
              $('.search__form button').removeAttr('disabled');
              $('.search__form-inner').css('background-color', '#fff');
              $('.search__subtitle').text('Воспользуйтесь формой поиска');
              if (data.answer.domains[0].result === 'success') {
                  alert(data.answer.domains[0].result);
              } else if (data.answer.domains[0].result === 'Available') {
                  $.get('modal/regru.php?csrf=' + token + '&domain=' + domain + '&price=' + price + '&price_id=' + price_id, function(data) {
                      $(data).appendTo('body').modal({
                          fadeDuration: 250
                      });
                  }).fail(function(jqXHR) {
                      let html = jqXHR.responseText;
                      $(html).appendTo('body').modal();
                  });
              } else {
                  alert(data.answer.domains[0].error_text);
              }
          }
      });
      return false;
  });


  // $('input[placeholder], textarea[placeholder]').placeholder();
  // $(".mask-phone").mask("+7 (999) 999-99-99");
  //$("input[name='subscribe_email']").mask('*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]');



  $('.ajax-popup-link').magnificPopup({
      type: 'ajax'
  });

  // add-open-class
  $('.menu-item__link').click(function () {
      $('.head-menu').removeClass('menu-burger--opened');
      $('body').removeClass('menu-open-wrapper-page');
  });

  $('.burger-menu').click(function () {
      if ($(this).parent().is('.menu-burger--opened')) {
          $(this).parent().removeClass('menu-burger--opened');
          $('body').removeClass('menu-open-wrapper-page');
      } else {
          $(this).parent().addClass('menu-burger--opened');
          $('body').addClass('menu-open-wrapper-page');
      }
  });
//slider
  $('.connect__slider').slick({
      dots: true,
      arrows: false,
      slideToShow: 1,
      slidesToScroll: 1,
      appendArrows: '.connect__slider-buttons',
      nextArrow: '.slide-next',
      prevArrow: '.slide-prev',
      mobileFirst: true,
      responsive: [{
          breakpoint: 599,
          settings: {
              arrows: true,
          }
      }
      ]
  });

  $('.partners__slider').slick({
      dots: true,
      arrows: false
  });

  //magnific
  $('.connect__link').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      image: {
          verticalFit: true
      }
  });
  //header
  $(window).scroll(function () {
      if ($(this).scrollTop() > $('.header').height()) {
          $('.fixed-panel-nav').addClass("sticky");
      } else {
          $('.fixed-panel-nav').removeClass("sticky");
      }

      let asideTop = $('.aside').offset().top;
          asideHeight = $('.aside').height();
      if ($(this).scrollTop() > asideTop + asideHeight ) {
          $('.desk-aside-fixed').addClass("aside-sticky");
      } else {
          $('.desk-aside-fixed').removeClass("aside-sticky");
      }
  });
  //menu
  $("a.menu-item__link, a.menu-item-footer__link").click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
  });


  // price checkboxes
  var priceBlock = document.querySelector('.pricing__wrap');
  var period = 1;
  var base_url = 'https://my.askopbx.host/billmgr?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D17%26period%3D' + period + '%26project%3D1';

  if (priceBlock) {
    priceBlock.addEventListener('change', function (event) {
        let input = event.target;
        let period = $(input).val();
  
        base_url = 'https://my.askopbx.host/billmgr?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D17%26period%3D' + period + '%26project%3D1';
  
        let price = $(input).parent().find('.pricing__result .price').text();
  
        $('#pricing .pricing__list-title span.title').text(price);
  
        this.querySelectorAll('.check[data-hidden]').forEach(function (item) {
            item.classList.add('check-hidden');
        });
  
        if (input.dataset.sslChecked) {
            this.querySelectorAll('.check-hidden.check-ssl').forEach(function (item) {
                item.classList.remove('check-hidden');
            });
            return;
        }
  
        if (input.dataset.domainChecked) {
            this.querySelectorAll('.check-hidden.check-domain, .check-hidden.check-ssl').forEach(function (item) {
                item.classList.remove('check-hidden');
            });
            return;
        }
  
        if (input.dataset.allChecked) {
            this.querySelectorAll('.check-hidden').forEach(function (item) {
                item.classList.remove('check-hidden');
            });
        }
  
    });
  }

  $('.pricing__btn').click(function (event) {
      event.preventDefault();
      event.stopPropagation();
      window.open(base_url, '_blank');
  });

  $('.tag-btn').click(function () {
    $(this).toggleClass('active');
  });

  $('.category-mobile-wrapp .title-h6').click(function () {
    $(this).parent().toggleClass('open');
  });

});


