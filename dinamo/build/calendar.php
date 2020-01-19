<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <title></title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
    <link rel="stylesheet" href="css/main.css" type="text/css">
</head>

<body>

<div id="wrapper">


    <!-- header -->
    <header id="header" class="header">
        <div class="header-inner-wrapp">
            <div class="container group">
                <div class="logo"><a href="#"><img src="img/logo.svg" alt=""></a></div>

                <div class="head-b-logo-md hidden-mobile">
                    <a href="#"><img src="img/logo-gaz.svg" alt=""></a>
                </div>

                <div class="head-menu">
                    <div class="menu-icon-wrap">
            <span class="menu-icon">
              <span></span>
            </span>
                    </div>


                    <div class="menu-wrapper-fixed">
                        <div class="menu-open-wrapper">

                            <div class="head-b-logo">
                                <a href="#"><img src="img/logo-gaz.svg" alt=""></a>
                            </div>

                            <div class="head-tickets">
                                <a href="#">
                                    <i class="icon icon-ticket"></i>
                                    <span class="head-ticket-tt">билеты</span>
                                </a>
                            </div>

                            <div class="head-league-wrapp">
                                <span class="h-league-mob-tt">сайт команды вхл</span>
                                <div class="h-league-active">
                                    <i class="icon-control-up"></i>
                                    <span class="h-league-img"><img src="img/league-vhl.png" alt=""></span>
                                    <span class="h-league-name">ВХЛ</span>
                                </div>
                                <ul class="h-league-list">
                                    <li class="h-league-chosen">
                                        <a href="#">
                                            <span class="h-league-img"><img src="img/league-vhl.png" alt=""></span>
                                            <span class="h-league-name">ВХЛ</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="h-league-img"><img src="img/league-mhl.png" alt=""></span>
                                            <span class="h-league-name">МХЛ</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="h-league-img"><img src="img/league-whl.png" alt=""></span>
                                            <span class="h-league-name">ЖХЛ</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <nav class="header-nav">
                                <ul class="menu">
                                    <li><a href="#">Клуб</a></li>
                                    <li class="menu-drop-down active-menu">
                    <span class="menu-dd-open-link">
                      <span>Команда</span>
                      <i class="arrow-corner-bottom"></i>
                    </span>
                                        <ul>
                                            <li><a href="#">Состав</a></li>
                                            <li><a href="#">Тренерский штаб</a></li>
                                            <li><a href="#">Персонал</a></li>
                                            <li><a href="#">Календарь</a></li>
                                            <li><a href="#">Таблица</a></li>
                                            <li><a href="#">Статистика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Арена</a></li>
                                    <li><a href="#">Медиа</a></li>
                                    <li><a href="#">СДЮСШОР</a></li>
                                    <li><a href="#">Магазин</a></li>
                                    <li class="hidden-desctop"><a href="#">Билеты</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- end header -->


    <div id="middle">
        <div class="st-section">
            <div class="container">
                <div class="inner-one-column-max">
                    <div class="st-title-head padding-push-left">
                        <span class="site-h1-tt"><a href="#">Календарь матчей</a></span>
                        <div class="inner-tt-head-slide-tt">сезон 2017/2018</div>
                    </div>

                    <div class="st-carousel-wrapp st-carousel-inner-wrapp calendar-carousel-wrapp">
                        <div class="owl-carousel st-carousel-auto-height st-carousel-calendar">
                            <?
                            // в этом методе написать получение данных для выбранного дня, сейчас рандомные данные, взятые из csv
                            // $dayTs - timestamp
                            function getDataForDay($dayTs) {
                                $exampleData = array(
                                    array('01.12.2017','17:00:00','Динамо','Команда 1','/dinamo/img/team-2.png','/dinamo/img/t-team-8.png','2:0','Динамо','Санкт-Петербург','1'),
                                    array('07.12.2017','18:00:00','Спартак','Динамо','/dinamo/img/team-1.png','/dinamo/img/team-2.png','2:0','Химки','Саранск','2'),
                                    array('15.01.2018','17:00:00','Команда 3','Динамо','/dinamo/img/team-3.png','/dinamo/img/team-2.png','2:0','Спартак Арена','Химки','1'),
                                    array('28.01.2018','17:00:00','Команда 4','Динамо','/dinamo/img/team-3.png','/dinamo/img/team-2.png','2:0','Новосибирский стадион','Москва','1'),
                                    array('02.01.2018','17:00:00','Динамо','Команда 2','/dinamo/img/team-2.png','/dinamo/img/t-team-16.png','0:2','Центральный стадион','Санкт-Петербург','2'),
                                );
                                if (rand(0,3)) {
                                    return null;
                                }
                                return $exampleData[rand(0, count($exampleData)-1)];
                            };
                            $months = array('', 'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
                                'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь');
                            // массив сезонов, которые будем выводить
                            $seasons = array(
                                array('from' => '2017-09-01', 'to' => '2018-09-01'),
                                array('from' => '2018-09-01', 'to' => '2019-09-01'),
                            );
                            ?>
                            <? foreach ($seasons as $n => $season):
                                // текущий ли это сезон, если нет, будем показывать с первого месяца
                                $currentSeason = strtotime($season['from']) <= time() && time() <= strtotime($season['to']);
                                ?>
                                <div class="st-season" data-title="СЕЗОН <?=date('Y', strtotime($season['from']))?>/<?=date('Y', strtotime($season['to']))?>">
                                    <div class="st-inner-bl section">
                                        <div class="st-inner-bl">
                                            <ul class="tabs">
                                                <? $m = strtotime($season['from']);
                                                    while($m < strtotime($season['to'])):
                                                        $showMonth = date('Y-m', $currentSeason ? time() : strtotime($season['from'])) === date('Y-m', $m);
                                                        ?>
                                                    <li <? if($showMonth): ?>class="current"<? endif; ?>>
                                                            <?=$months[(int)date('m', $m)]?> <?=date('y', $m)?>
                                                    </li>
                                                <? $m = strtotime('+1 months', $m); endwhile; ?>
                                            </ul>

                                            <? $m = strtotime($season['from']);
                                                while($m < strtotime($season['to'])):
                                                    $showMonth = date('Y-m', $currentSeason ? time() : strtotime($season['from'])) === date('Y-m', $m);
                                                ?>

                                            <div class="box <? if($showMonth): ?>visible<? endif; ?>">
                                                <div class="calendar-wrapp">
                                                    <div class="calendar-head">
                                                        <div class="calendar-head-item">
                                                            <span class="calendar-head-name">пн</span>
                                                        </div>
                                                        <div class="calendar-head-item">
                                                            <span class="calendar-head-name">ВТ</span>
                                                        </div>
                                                        <div class="calendar-head-item">
                                                            <span class="calendar-head-name">ср</span>
                                                        </div>
                                                        <div class="calendar-head-item">
                                                            <span class="calendar-head-name">чт</span>
                                                        </div>
                                                        <div class="calendar-head-item">
                                                            <span class="calendar-head-name">пт</span>
                                                        </div>
                                                        <div class="calendar-head-item">
                                                            <span class="calendar-head-name">сб</span>
                                                        </div>
                                                        <div class="calendar-head-item">
                                                            <span class="calendar-head-name">вс</span>
                                                        </div>
                                                    </div>
                                                    <div class="calendar-body">

                                                                <? $dayTs = $m;
                                                                    while($dayTs < strtotime('+1 months', $m)):
                                                                        $dayData = getDataForDay($dayTs);
                                                                        $d = (int) date('d', $dayTs);
                                                                        $w = !date('w', $dayTs) ? 7 : date('w', $dayTs);
                                                                    ?>

                                                                        <? if ($d === 1) for ($i = 1; $i < $w; $i++): ?>
                                                                        <div class="calendar-item calendar-aside-month"></div>
                                                                        <? endfor; ?>

                                                                        <? if(!$dayData): ?>
                                                                        <div class="calendar-item">
                                                                            <div class="calendar-date"><?=$d?></div>
                                                                        </div>
                                                                        <? else: ?>
                                                                        <div class="calendar-item calendar-game-item">
                                                                            <span class="calendar-finished-game game-lose"></span>
                                                                            <div class="calendar-date"><?=$d?></div>
                                                                            <div class="calendar-league">
                                                                                <!-- подстановка нужного логотипа ВХЛ и тд-->
                                                                                <img src="img/league-vhl.png" alt="">
                                                                            </div>
                                                                            <div class="calendar-info">
                                                                                <div class="calendar-vs">
                                                                                    <div class="vs-o-team">
                                                                                        <span class="vs-o-team-logo">
                                                                                            <img src="<?=$dayData[4]?>" alt="">
                                                                                        </span>
                                                                                        <span class="vs-o-team-name"><?=$dayData[2]?></span>
                                                                                        <span class="vs-o-team-goal"><? $s = explode(':', $dayData[6]); echo (int)$s[0]; ?></span>
                                                                                    </div>
                                                                                    <div class="vs-o-team">
                                                                                        <span class="vs-o-team-logo">
                                                                                                <img src="<?=$dayData[5]?>" alt="">
                                                                                            </span>
                                                                                        <span class="vs-o-team-name"><?=$dayData[3]?></span>
                                                                                        <span class="vs-o-team-goal"><? $s = explode(':', $dayData[6]); echo (int)$s[1]; ?></span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="calendar-data-loc">
                                                                                    <div class="calendar-data-info">
                                                                                        <span class="cal-icon">
                                                                                            <i class="icon-map-marker"></i>
                                                                                        </span>
                                                                                        <span><?=$dayData[7]?> <?=$dayData[8]?></span>
                                                                                    </div>
                                                                                    <div class="calendar-data-info">
                                                                                        <span class="cal-icon">
                                                                                            <i class="icon-av-timer"></i>
                                                                                        </span>
                                                                                        <span><?=date('H:i', strtotime($dayData[0] . ' ' . $dayData[1]))?></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <? endif; ?>

                                                                    <? $dayTs = strtotime('+1 days', $dayTs); endwhile; ?>

                                                                    <? for ($i = 7; $i > $w; $i--): ?>
                                                                        <div class="calendar-item calendar-aside-month"></div>
                                                                    <? endfor; ?>
                                                    </div>
                                                </div>
                                            </div>
                                            <? $m = strtotime('+1 months', $m); endwhile; ?>

                                        </div>
                                    </div>
                                </div>
                            <? endforeach; ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="social-main stop-aside-sticky">
            <div class="container group">
                <span class="site-h1-tt social-tt light-tt">Мы в соцсетях</span>
                <div class="social-icons">
                    <a href="#" class="icon-vk"></a>
                    <a href="#" class="icon-fb"></a>
                    <a href="#" class="icon-instagram-logo"></a>
                    <a href="#" class="icon-twitter-logo-silhouette"></a>
                    <a href="#" class="icon-youtube"></a>
                </div>
                <div class="subs-main">
                    <form action="#">
                        <input type="text" class="input-md" placeholder="Email для рассылки">
                        <button class="btn btn-md" type="submit">Подписаться</button>
                    </form>
                </div>
            </div>
        </div>


        <div class="sponsor-wrapp">
            <div class="container">
                <span class="site-h4-tt">Партнеры Чемпионата сезона МХЛ 2017/2018</span>
                <div class="sponsor-inline">
                    <div class="sponsor-item">
                        <div class="sponsor-img">
                            <img src="img/sponsor-1.png" alt="">
                        </div>
                        <span class="sponsor-tt">Официальный партнер</span>
                    </div>
                    <div class="sponsor-item">
                        <div class="sponsor-img">
                            <img src="img/sponsor-2.png" alt="">
                        </div>
                        <span class="sponsor-tt">Партнер</span>
                    </div>
                    <div class="sponsor-item">
                        <div class="sponsor-img">
                            <img src="img/sponsor-3.png" alt="">
                        </div>
                        <span class="sponsor-tt">Партнер</span>
                    </div>
                    <div class="sponsor-item">
                        <div class="sponsor-img">
                            <img src="img/sponsor-4.png" alt="">
                        </div>
                        <span class="sponsor-tt">Поставщик</span>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- #middle-->
</div><!-- #wrapper -->


<!-- footer -->
<footer id="footer" class="footer">
    <div class="container group hidden-devices">
        <div class="footer-nav">
            <div class="footer-nav-item">
                <span class="site-h4-tt"><a href="#">Клуб</a></span>
                <ul class="footer-nav-list">
                    <li><a href="#">История</a></li>
                    <li><a href="#">Руководство</a></li>
                    <li><a href="#">Спонсоры и партнеры</a></li>
                    <li><a href="#">Рекламодателям</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div class="footer-nav-item">
                <span class="site-h4-tt"><a href="#">Команда ВХЛ</a></span>
                <ul class="footer-nav-list">
                    <li><a href="#">Состав</a></li>
                    <li><a href="#">Тренерский штаб</a></li>
                    <li><a href="#">Персонал</a></li>
                    <li><a href="#">Календарь</a></li>
                    <li><a href="#">Таблица</a></li>
                    <li><a href="#">Статистика</a></li>
                </ul>
            </div>
            <div class="footer-nav-item">
                <span class="site-h4-tt"><a href="#">Команда МХЛ</a></span>
                <ul class="footer-nav-list">
                    <li><a href="#">Состав</a></li>
                    <li><a href="#">Тренерский штаб</a></li>
                    <li><a href="#">Персонал</a></li>
                    <li><a href="#">Календарь</a></li>
                    <li><a href="#">Таблица</a></li>
                    <li><a href="#">Статистика</a></li>
                </ul>
            </div>
            <div class="footer-nav-item">
                <span class="site-h4-tt"><a href="#">Команда ЖХЛ</a></span>
                <ul class="footer-nav-list">
                    <li><a href="#">Состав</a></li>
                    <li><a href="#">Тренерский штаб</a></li>
                    <li><a href="#">Персонал</a></li>
                    <li><a href="#">Календарь</a></li>
                    <li><a href="#">Таблица</a></li>
                    <li><a href="#">Статистика</a></li>
                </ul>
            </div>
            <div class="footer-nav-item">
                <span class="site-h4-tt"><a href="#">СДЮСШОР</a></span>
                <ul class="footer-nav-list f-nav-list-md">
                    <li><a href="#">Арена</a></li>
                    <li><a href="#">Медиа</a></li>
                    <li><a href="#">Магазин</a></li>
                    <li><a href="#">Билеты</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-link-league">
            <a href="#"><img src="img/league-vhl.png" alt=""></a>
            <a href="#"><img src="img/league-mhl.png" alt=""></a>
            <a href="#"><img src="img/league-whl.png" alt=""></a>
        </div>
    </div>

    <div class="container">
        <div class="footer-contacts-wrapp">
            <div class="footer-contacts">
                <span><a href="#">Санкт-Петербург, пр Добролюбова, д.18, СК "Юбилейный" Малая и Главная арена</a></span>
                <span><a href="#">hc@dinamo-spb.com</a></span>
            </div>
            <div class="footer-design">
                <span>Разработка сайта:</span>
                <a href="#" class="f-design-logo"></a>
            </div>
        </div>
    </div>
</footer>
<!-- end footer -->


<script src="js/jquery.min.js"></script>
<script src="js/libsmin/owl.carousel.min.js"></script>
<script src="js/libsmin/magnific-popup.min.js"></script>
<script src="js/main.js?v=0.2"></script>

</body>
</html>