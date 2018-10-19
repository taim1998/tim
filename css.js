/* ===========================================================
Name:	   PROLEV Template
Version:   2.0.0
Name:     
Designer: 
URL1:      http://www.
URL2:      https://www.facebook.com/
URL3:      https://www.facebook.com/
 * ============================================================ */

/* ======================
 * Variable definitions 
 * ====================== */
<Group description="اعدادات رئيسية" selector="body">
<Variable name="keycolor" description="اللون الرئيسي" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="body.background" description="الخلفية" type="background" color='transparent' default="$(color) url(http://3.bp.blogspot.com/-x6bnPQuN9YQ/VqALgnWG9-I/AAAAAAAAAuE/NUDLmab0-N4/s0-r/DSDS.jpg) no-repeat fixed top center" value="$(color) none no-repeat scroll center center"/>
<Variable name="wrapper" description="لون الخلفية الداخلي" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="lines" description="لون الفواصل الرئيسية" type="color" default="#eeeeee" value="#eeeeee"/>
</Group>
<Group description="الشريط العلوي" selector="#HeaderTop">
<Variable name="top.back" description="الخلفية" type="color" default="#120e28" value="#120e28"/>
<Variable name="top.pages.color" description="لون الصفحات" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="top.pages.hover.back" description="خلفية الصفحات عند المرور" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="top.pages.hover.color" description="لون الصفحات عند المرور" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="top.pages.lines" description="لون الفواصل بين الصفحات" type="color" default="#777777" value="#777777"/>
<Variable name="top.social.back" description="خلفية ازرار التواصل" type="color" default="#242135" value="#242135"/>
<Variable name="top.social.color" description="لون ازرار التواصل" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="top.social.title.back" description="خلفية أسم موقع التواصل" type="color" default="#242135" value="#242135"/>
<Variable name="top.social.title.color" description="لون أسم موقع التواصل" type="color" default="#ffffff" value="#ffffff"/>
</Group>
<Group description="القائمة الرئيسية" selector="#LinkList101">
<Variable name="menu.back" description="الخلفية" type="color" default="#242135" value="#242135"/>
<Variable name="menu.link.back" description="خلفية الروابط" type="color" default="#120e28" value="#120e28"/>
<Variable name="menu.link.color" description="لون الروابط" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="menu.hover.back" description="خلفية الروابط عند المرور" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="menu.hover.color" description="لون الروابط عند المرور" type="color" default="#ffffff" value="#ffffff"/>
</Group>
<Group description="شريط آخر الأخبار" selector="#Int-one">
<Variable name="ticker.back" description="خلفية العنوان" type="color" default="#120e28" value="#120e28"/>
<Variable name="ticker.color" description="لون العنوان" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="ticker.links.back" description="خلفية الروابط" type="color" default="#dddddd" value="#dddddd"/>
<Variable name="ticker.links.color" description="لون الروابط" type="color" default="#120e28" value="#120e28"/>
</Group>
<Group description="الواجهة" selector="#Int-two">
<Variable name="intro.back" description="الخلفية" type="color" default="#120e28" value="#120e28"/>
<Variable name="intro.button.back" description="خلفية الزر" type="color" default="#242135" value="#242135"/>
<Variable name="intro.button.color" description="لون الزر" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="intro.details" description="لون التفاصيل" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="intro.button.hover.color" description="لون الزر عند المرور" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="intro.button.hover.back" description="خلفية الزر عند المرور" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="intro.label.back" description="خلفية السهم والتسميه" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="intro.label.color" description="لون السهم والتسميه" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="intro.line" description="لون الفاصل السفلي" type="color" default="#dddddd" value="#dddddd"/>
</Group>
<Group description="الشريط الجانبي" selector="aside">
<Variable name="side.title.back" description="خلفية العنوان" type="color" default="#120e28" value="#120e28"/>
<Variable name="side.title.color" description="لون العنوان" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="side.lines" description="الفواصل" type="color" default="#eeeeee" value="#eeeeee"/>
<Variable name="weather.back" description="خلفية الطقس" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="weather.color" description="لون نص الطقس" type="color" default="#120e28" value="#120e28"/>
<Variable name="side.links" description="لون الروابط" type="color" default="#444444" value="#444444"/>
<Variable name="side.text" description="النصوص العاديه" type="color" default="#777777" value="#777777"/>
<Variable name="side.links.hover" description="لون الرابط عند المرور" type="color" default="#000000" value="#000000"/>
</Group>
<Group description="التصنيفات" selector="#main .Label">
<Variable name="cate.title.back" description="خلفية العنوان" type="color" default="#120e28" value="#120e28"/>
<Variable name="cate.title.color" description="لون العنوان" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="post.title" description="عنوان الموضوع" type="color" default="#555555" value="#555555"/>
<Variable name="post.details" description="لون التفاصيل" type="color" default="#999999" value="#999999"/>
<Variable name="post.details.icons" description="أيقونات التفاصيل" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="post.lines" description="الفواصل" type="color" default="#eeeeee" value="#eeeeee"/>
<Variable name="post.image.hover" description="لون تأثير الصور" type="color" default="#ffffff" value="#ffffff"/>
</Group>
<Group description="أعلى الفوتر" selector="#f-row">
<Variable name="subs.back" description="الخلفية" type="color" default="#242135" value="#242135"/>
<Variable name="subs.text" description="لون النص" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="subs.buttons" description="خلفية الأزرار" type="color" default="#120e28" value="#120e28"/>
<Variable name="subs.email.back" description="خلفية مربع الإشتراك" type="color" default="#120e28" value="#120e28"/>
<Variable name="subs.email.color" description="لون نص مربع الاشتراك" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="subs.button.back" description="خلفية زر إشتراك" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="subs.button.color" description="لون زر الإشتراك" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="subs.button.back.hover" description="خلفية زر الاشتراك عند المرور" type="color" default="#58CA58" value="#58ca58"/>
<Variable name="subs.button.color.hover" description="لون زر الاشتراك عند المرور" type="color" default="#ffffff" value="#ffffff"/>
</Group>
<Group description="الفوتر" selector="footer">
<Variable name="footer.back" description="الخلفية" type="color" default="#120e28" value="#120e28"/>
<Variable name="footer.title" description="عنوان العناصر" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="footer.lines" description="الفواصل" type="color" default="#242135" value="#242135"/>
<Variable name="footer.links" description="لون الروابط" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="footer.links.hover" description="لون الروابط عند المرور" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="footer.text" description="لون النص العادي" type="color" default="#999999" value="#999999"/>
</Group>
<Group description="شريط الحقوق" selector="#copyrights">
<Variable name="copts.back" description="خلفية الشريط" type="color" default="#120e28" value="#120e28"/>
<Variable name="copts.line" description="لون الفاصل" type="color" default="#242135" value="#242135"/>
<Variable name="copts.text" description="لون النص" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="copts.link" description="لون الروابط" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="copts.soc.back" description="خلفية أزرار التواصل" type="color" default="#242135" value="#242135"/>
<Variable name="copts.soc.color" description="لون أزرار التواصل" type="color" default="#dddddd" value="#dddddd"/>
</Group>
<Group description="الموضوع" selector=".post-body">
background: #14102a;
<Variable name="postbody.title.back" description="خلفية العنوان" type="color" default="#242135" value="#242135"/>
<Variable name="postbody.title.color" description="لون العنوان" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="postbody.text" description="اللون الافتراضي للنصوص" type="color" default="#120e28" value="#120e28"/>
<Variable name="postbody.details" description="التفاصيل" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="postbody.details.icon" description="ايقونات التفاصيل" type="color" default="#9e2f5e" value="#9e2e5e"/>
<Variable name="postbody.lines" description="الفواصل" type="color" default="#eeeeee" value="#eeeeee"/>
<Variable name="postbody.subtitle" description="العناوين الثانوية" type="color" default="#242135" value="#242135"/>
<Variable name="related.links" description="عنوان موضوع متعلق" type="color" default="#242135" value="#242135"/>
<Variable name="related.details" description="تفاصيل موضوعات متعلقه" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="comm.back" description="خلفية أزرار التعليقات" type="color" default="#ddd" value="#dddddd"/>
</Group>
/* ==================== 
 * Owl Styles
 * ==================== */
.owl-carousel .owl-wrapper:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel{display:none;position:relative;width:100%;-ms-touch-action:pan-y}.owl-carousel .owl-wrapper{display:none;position:relative;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-wrapper-outer{overflow:hidden;position:relative;width:100%}.owl-carousel .owl-wrapper-outer.autoHeight{-webkit-transition:height 500ms ease-in-out;transition:height 500ms ease-in-out}.owl-carousel .owl-item{float:left;padding: 0 10px;}.owl-controls .owl-page,.owl-controls .owl-buttons div{cursor:pointer}.owl-controls{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.grabbing{cursor:url(http://4.bp.blogspot.com/-Z6RBU0QKb-8/VhRO15keQII/AAAAAAAABiQ/ejM6FgCPelg/s1600-r/grabbing.png) 8 8,move}.owl-carousel .owl-wrapper,.owl-carousel .owl-item{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}
/* ==================== 
 * Reset Css
 * ==================== */
body,p{margin:0;font-size:100%;font-family:tahoma}span{font-family:inherit}h1,h2,h3,h4,h5,h6{margin:0;font-size:100%;font-weight:normal;font-family:inherit}a{margin:0;padding:0;text-decoration:none;font-family:inherit}ul,li,ol{margin:0;padding:0;list-style:none;font-family:inherit}input,textarea{outline:none;border:none;background:none;font-family:inherit}img{border:0;max-width:100%}abbr{border:none!important;outline:none!important;text-decoration:none!important;}
*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}
.blog-admin{display:none}#uds-searchControl{display:none}
.clear{clear:both;display:block;width:100%;}
.hide{display:none}
object { max-width: 100%; }
.widget-item-control,.date-header{display:none;}
:not(.notr){-webkit-transition:0.3s ease-out;transition:0.3s ease-out}zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
/* ==================== 
 * Fonts
 * ==================== */
@font-face {
font-family: 'BlogFont';
src: url('https://5156122ab5b5f14723e05415971e2f0099321252.googledrive.com/host/0B3s9ca8NGFXWLUZQMEM4cUNrd3M/0B9tIHXTX92w4T3hlZW42WEYxZzQ');
src: url('https://5156122ab5b5f14723e05415971e2f0099321252.googledrive.com/host/0B3s9ca8NGFXWLUZQMEM4cUNrd3M/0B9tIHXTX92w4T3hlZW42WEYxZzQ') format('embedded-opentype'),
url('https://5156122ab5b5f14723e05415971e2f0099321252.googledrive.com/host/0B3s9ca8NGFXWLUZQMEM4cUNrd3M/0B9tIHXTX92w4M2FuTXdCcW9aVzg') format('woff2'),
url('https://5156122ab5b5f14723e05415971e2f0099321252.googledrive.com/host/0B3s9ca8NGFXWLUZQMEM4cUNrd3M/0B9tIHXTX92w4bnNnY2xZdDJhTG8') format('woff'),
url('https://5156122ab5b5f14723e05415971e2f0099321252.googledrive.com/host/0B3s9ca8NGFXWLUZQMEM4cUNrd3M/0B9tIHXTX92w4eXdVUnNxYkdVYms') format('truetype'),
url('https://googledrive.com/host/0B9tIHXTX92w4c0dkY01hS2o5dWc#BlogFont') format('svg');
}
/* ======================
 * Loading Spinner
 * ====================== */
body.spinner{background:$(wrapper)}
#loading-screen{position:fixed;top:0;left:0;width:100%;height:100%;background:$(wrapper);z-index:9999}
#TempColor{color:$keycolor}
.overlay-loader{display:block;margin:auto;width:97px;height:97px;position:relative;top:50%;margin-top:-48.5px;left:0;right:0;bottom:0}
.loader{position:absolute;top:50%;left:0;right:0;bottom:0;margin:auto;width:97px;height:97px;animation-name:rotateAnim;-o-animation-name:rotateAnim;-ms-animation-name:rotateAnim;-webkit-animation-name:rotateAnim;-moz-animation-name:rotateAnim;animation-duration:.4s;-o-animation-duration:.4s;-ms-animation-duration:.4s;-webkit-animation-duration:.4s;-moz-animation-duration:.4s;animation-iteration-count:infinite;-o-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-timing-function:linear;-o-animation-timing-function:linear;-ms-animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}
.loader div{width:8px;height:8px;border-radius:50%;border:1px solid $keycolor;position:absolute;top:2px;left:0;right:0;bottom:0;margin:auto}
.loader div:nth-child(odd){border-top:none;border-left:none}
.loader div:nth-child(even){border-bottom:none;border-right:none}
.loader div:nth-child(2){border-width:2px;left:0;top:-4px;width:12px;height:12px}
.loader div:nth-child(3){border-width:2px;left:-1px;top:3px;width:18px;height:18px}
.loader div:nth-child(4){border-width:3px;left:-1px;top:-4px;width:23px;height:23px}
.loader div:nth-child(5){border-width:3px;left:-1px;top:4px;width:31px;height:31px}
.loader div:nth-child(6){border-width:4px;left:0;top:-4px;width:39px;height:39px}
.loader div:nth-child(7){border-width:4px;left:0;top:6px;width:49px;height:49px}
@keyframes rotateAnim {
from{-webkit-transform:rotate(360deg);transform:rotate(360deg)}
to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}
}
@-webkit-keyframes rotateAnim {
from{-webkit-transform:rotate(360deg)}
to{-webkit-transform:rotate(0deg)}
}
.fadeOut{opacity:0}
/* ==================== 
 * Main Styles
 * ==================== */
body{background:$(body.background);}
body.b-overflow{overflow:hidden}
.no-select *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
.no-select .t-code,.no-select .t-code *{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}
.wrapper{margin:0 auto;overflow:hidden;background-color:$(wrapper);-webkit-box-shadow:0 0 10px 3px rgba(0,0,0,0.1);box-shadow:0 0 10px 3px rgba(0,0,0,0.1);}
#main{float:right;vertical-align:top;padding:0 30px 0 20px;border-left:1px solid $(lines)}
aside{float:right;vertical-align:top;padding:0 0px 0 0px;border-right:1px solid $(lines);margin-right:-1px}
background: #14102a;
/* ==================== 
 * Header
 * ==================== */
#HeaderTop h2,#HeaderBot h2,#HTML100 h2{display:none}
#HeaderTop{width:100%;background-color:$(top.back);padding:0 30px;height:50px;}
/* ==================== 
 * Pages
 * ==================== */
.res-butt1{width:30px;height:30px;border-radius:3px;background-color:$(top.pages.lines);padding:8px 5px 0;float:right;cursor:pointer;display:none}
.res-butt1 span{display:block;height:3px;margin-bottom:3px;border-radius:100px;background-color:$(top.pages.color)}
.menu-active{display:block!important}
#PageList1{padding:10px 0;max-width:65%;float:right;vertical-align:top;position:relative}
.res-butt1.but-active{background-color:$keycolor}
.res-butt1.but-active span{background-color:#FFF}
#PageList1 li{display:inline-block;vertical-align:top}
#PageList1 li a{color:#FFFFFF;font-family:BlogFont,Tahoma;font-size:15px;display:block;margin:2px 5px 0;padding:5px 13px;border-radius:100px;position:relative}
li.selected a{background-color:$(top.pages.hover.back)!important;color:$(top.pages.hover.color)!important}
#PageList1 li a:hover{background-color:$(top.pages.hover.back);color:$(top.pages.hover.color)}
#PageList1 li a:after{content:"|";position:absolute;display:inline-block;left:-30px;margin-left:20px;color:$(top.pages.lines)!important}
#PageList1 li:last-of-type a:after{display:none}

/* ==================== 
 * Top Social 
 * ==================== */
#LinkList100{min-width:190px;max-width:35%;position:relative;z-index:100;vertical-align:top;text-align:left;float:left;height:50px;padding:10px 0}
#LinkList100 ul{float:left;width:-webkit-calc(100% - 60px);width:calc(100% - 60px)}
.t-search.fa{background-color:$keycolor;width:50px;height:50px;text-align:center;margin-top:-10px;color:#FFF;font-size:24px;padding-top:10px}
#SRCH{float:left;margin-right:10px}
.search-form{position:absolute;top:8px;width:100%;height:1px;left:61px}
.search-form input{background-color:$(top.back);position:relative;z-index:2;font-family:blogfont,tahoma;padding:7px 0;border-bottom:2px solid $(top.pages.lines);width:0;color:$(top.pages.color);width:0}
input.search-open{padding:7px 10px;width:-webkit-calc(100% - 60px);width:calc(100% - 60px)}
.hide-social{margin-top:-40px;opacity:0}
.search-wide{width:180px;float:left}
#LinkList100 li{display:inline-block;vertical-align:top}
#LinkList100 li a{margin-bottom:10px;color:$(top.social.color);background-color:$(top.social.back);width:30px;text-align:center;height:30px;padding-top:7px;border-radius:2px;position:relative}
#LinkList100 li a span{background-color:$(top.social.title.back);color:$(top.social.title.color);padding:10px;border-radius:2px;position:absolute;font-size:11px;top:40px;right:-webkit-calc(50% - 35px);right:calc(50% - 35px);width:70px;opacity:0;visibility:hidden;text-transform:capitalize;font-family:Tahoma}
#LinkList100 li a span:before{content:"";border-right:5px solid transparent;border-left:5px solid transparent;border-bottom:7px solid $(top.social.title.back);position:absolute;top:-7px;left:-webkit-calc(50% - 4px);left:calc(50% - 4px);display:block;z-index:5}
#LinkList100 li a:hover span{opacity:.95;top:50px;visibility:visible}
#LinkList100 li a:hover{color:#FFF}
#LinkList100 ul:hover li{opacity:.7}
#LinkList100 ul li:hover{opacity:1}
.fa.fa-facebook:hover,#LinkList102 .fa-facebook{background-color:#3b5998!important}
.fa.fa-twitter:hover,#LinkList102 .fa-twitter{background-color:#55acee!important}
.fa.fa-rss:hover,#LinkList102 .fa-rss{background-color:#f26522!important}
.fa.fa-dribbble:hover,#LinkList102 .fa-dribbble{background-color:#ea4c89!important}
.fa.fa-google-plus:hover,#LinkList102 .fa-google-plus{background-color:#dd4b39!important}
.fa.fa-pinterest:hover,#LinkList102 .fa-pinterest{background-color:#cc2127!important}
.fa.fa-linkedin:hover,#LinkList102 .fa-linkedin{background-color:#0976b4!important}
.fa.fa-youtube:hover,#LinkList102 .fa-youtube{background-color:#e52d27!important}
.fa.fa-wordpress:hover,#LinkList102 .fa-wordpress{background-color:#1081B1!important}
.fa.fa-digg:hover,#LinkList102 .fa-digg{background-color:#476BA3!important}
.fa.fa-drupal:hover,#LinkList102 .fa-drupal{background-color:#008BCA!important}
.fa.fa-github:hover,#LinkList102 .fa-github{background-color:#000!important}
.fa.fa-flickr:hover,#LinkList102 .fa-flickr{background-color:#FF0084!important}
.fa.fa-tumblr:hover,#LinkList102 .fa-tumblr{background-color:#304E6C!important}
.fa.fa-instagram:hover,#LinkList102 .fa-instagram{background-color:#D4C6A7!important}
.fa.fa-delicious:hover,#LinkList102 .fa-delicious{background-color:#DEDEDF!important}
.fa.fa-behance:hover,#LinkList102 .fa-behance{background-color:#009fff!important}
.fa.fa-soundcloud:hover,#LinkList102 .fa-soundcloud{background-color:#FF5419!important}
.fa.fa-khamsat:hover,#LinkList102 .fa-khamsat{background-color:#f9b01c!important}
.fa.fa-tradent:hover,#LinkList102 .fa-tradent{background-color:#59c5c4!important}
.fa.fa-asnad:hover,#LinkList102 .fa-asnad{background-color:#d4145a!important}
.fa.fa-hao123:hover,#LinkList102 .fa-hao123{background-color:#0ba26d!important}
.fa.fa-picalica:hover,#LinkList102 .fa-picalica{background-color:#615d9b!important}
.fa.fa-blogger:hover,#LinkList102 .fa-blogger{background-color:#fc9644!important}
.fa.fa-mostqel:hover,#LinkList102 .fa-mostqel{background-color:#2caae2!important}
.fa.fa-telegram:hover,#LinkList102 .fa-telegram{background-color:#32AEE1!important}
.fa.fa-khamsat,.fa.fa-tradent,.fa.fa-asnad,.fa.fa-hao123,.fa.fa-picalica,.fa.fa-blogger,.fa.fa-mostqel{font-family:BlogFont,Tahoma;font-size:21px;padding-top:5px!important}
.fa.fa-khamsat:before{content:"ĉ"}
.fa.fa-tradent:before{content:"Ĉ"}
.fa.fa-asnad:before{content:"Ć"}
.fa.fa-picalica:before{content:"Ċ"}
.fa.fa-hao123:before{content:"ć"}
.fa.fa-mostqel:before{content:"ċ"}
.fa.fa-blogger:before{content:"þ"}
.fa.fa-telegram:before{content:"\f1d8"}
#LinkList100 ul li:nth-of-type(1){-webkit-transition:.1s ease;transition:.1s ease}
#LinkList100 ul li:nth-of-type(2){-webkit-transition:.15s ease;transition:.15s ease}
#LinkList100 ul li:nth-of-type(3){-webkit-transition:.2s ease;transition:.2s ease}
#LinkList100 ul li:nth-of-type(4){-webkit-transition:.25s ease;transition:.25s ease}
#LinkList100 ul li:nth-of-type(5){-webkit-transition:.3s ease;transition:.3s ease}
#LinkList100 ul li:nth-of-type(6){-webkit-transition:.35s ease;transition:.35s ease}
#LinkList100 ul li:nth-of-type(7){-webkit-transition:.4s ease;transition:.4s ease}
#LinkList100 ul li:nth-of-type(8){-webkit-transition:.45s ease;transition:.45s ease}
#LinkList100 ul li:nth-of-type(9){-webkit-transition:.5s ease;transition:.5s ease}
#LinkList100 ul li:nth-of-type(10){-webkit-transition:.55s ease;transition:.55s ease}
#LinkList100 ul li:nth-of-type(11){-webkit-transition:.6s ease;transition:.6s ease}

/* ==================== 
 * Logo - Adsense
 * ==================== */
#HeaderMid{padding:20px 30px;display:table;width:100%}
#Header1{display:table-cell;vertical-align:middle;max-width:100%;padding-left:20px;text-align:right}
#HTML100{width:728px;display:table-cell;vertical-align:middle;text-align:center;min-height:90px}
.blog-title{font-family:blogfont,tahoma;font-size:19px;font-weight:700;text-align:center;color:$(postbody.text)}

/* ==================== 
 * Main Menu
 * ==================== */
#LinkList101{display:none;background-color:$(menu.back);margin:0 30px;height:70px;position:relative;border-radius:3px;padding:0 20px}
#LinkList101 li{display:inline-block;position:relative;vertical-align:top}
#LinkList101 li a{font-size:19px;font-family:BlogFont,Tahoma;color:#ffffff;padding:10px 20px;position:relative;display:block;background-color:$(menu.link.back);border-radius:5px;margin-top:13px}
#LinkList101 li a:hover{color:$(menu.hover.color);background-color:$(menu.hover.back)}
#LinkList101 li a:focus{background-color:#FFF;color:$keycolor}
.Home{float:right;font-size:31px;position:relative;padding:4px 0 0;top:5px;color:$(menu.link.color);border:5px solid $keycolor;width:60px;background-color:$(menu.hover.back);height:60px;text-align:center;border-radius:100%;margin-left:20px;display:inline-block;vertical-align:top;-webkit-box-shadow:0 0 30px 30px $(menu.back) inset;box-shadow:0 0 30px 30px $(menu.back) inset}
.Home:hover{-webkit-box-shadow:0 0 0 0 $(menu.back) inset;box-shadow:0 0 0 0 $(menu.back) inset;border:5px solid $(menu.link.color);color:$(menu.hover.color)}
#LinkList101 li a:focus{background-color:#FFF;color:$keycolor}
#LinkList101 ul{vertical-align:top}
.res-butt2{width:45px;height:45px;border-radius:3px;background-color:$(menu.link.back);position:absolute;top:15px;right:104px;z-index:2;padding:10px 8px;cursor:pointer;display:none}
.res-butt2 span{display:block;background-color:$(menu.link.color);width:100%;margin:0 auto;height:5px;margin-bottom:5px;border-radius:100px}
.res-butt2.but-active{background-color:$keycolor}
.res-butt2.but-active span{background-color:#fff}
/*--------- submenu --------*/
.ma.subed ul{-webkit-box-shadow: 0 0 10px rgba(0,0,0,0.1);box-shadow: 0 0 10px rgba(0,0,0,0.1);position:absolute;top:115px;right:-webkit-calc(50% - 90px);right:calc(50% - 90px);opacity:0;padding:0px;border-radius:5px;width:180px;background-color:#a13763;text-align:center;z-index:-1}
.ma.subed:hover ul{opacity:1;z-index:16;top:90px}
.ma.subed ul li{display:block!important}
.ma.subed ul li a{margin:0!important;border-radius:0!important;border-bottom:#040303;background-color:transparent!important;font-size:16px!important;color:#040303;}
.ma.subed ul li a:hover{border-bottom:1px dashed $keycolor;color:ffffff;}
.ma.subed ul:before{content:"";position:absolute;top:-15px;left:75px;border-right:15px solid transparent;border-left:15px solid transparent;border-bottom:15px solid $(menu.link.back)}
.resp-it .ma.subed ul{position:relative;top:0;right:0;opacity:1;border-radius:0;width:100%;background-color:#111;overflow:hidden;padding:0}
.resp-it .ma.subed ul:before{display:none}
.resp-it .ma.subed ul li a{font-size:16px!important}
.ma.subed a{border-bottom: 1px solid $keycolor}
/* ==================== 
 * Side Bar
 * ==================== */
aside .widget{margin-bottom:20px}
aside .widget h2{font-family:BlogFont ,Tahoma;border-right:5px solid $keycolor;padding:10px 20px 10px 0;margin-bottom:10px;background-color:$(side.title.back);color:$(side.title.color);font-size:19px}
aside .widget-content{overflow:hidden}
/* ==================== 
 * Popular Posts
 * ==================== */
.popular-posts ul{font-size:0}
.popular-posts li{margin-bottom:10px;border-bottom:1px dotted $(side.lines);padding-bottom:10px}
.popular-posts li:last-of-type{margin-bottom:0;border-bottom:none;padding-bottom:0}
.item-thumbnail{margin-bottom:10px;width:99%;height:130px;display:block;overflow:hidden;border:5px solid transparent;outline:1px solid $(side.lines);margin-right:.5%}
.item-thumbnail img{width:100%;height:100%}
.item-thumbnail h7{width:100%;height:100%;background-size:cover!important;background-position:center center!important;display:block}
.popular-posts li:hover h7{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:.7!important}
.popular-posts a{font-family:BlogFont ,Tahoma;font-size:16px;color:$(side.links);display:block;text-align:right;width:100%;font-weight:700}
.item-thumbnail a{display:inline}
.item-title a:hover{color:$(side.links.hover)}
.item-snippet{padding-top:5px;font-size:12px;color:$(side.text);text-align:right;width:100%;font-family:BlogFont ,Tahoma}
.item-content:first-of-type{margin-top: 2px;}
/* ==================== 
 * SlideShow Widget
 * ==================== */
.slideshow-status{color:#676767;font-size:11px;margin:10px;padding:4px}.slideshow-wrapper{display:inline-block;position:relative;width:100%}.slideshow-wrapper:after{content:'';display:block;margin-top:100%}.slideshow-spacer{margin:auto}.slideshow-container{bottom:0;left:0;position:absolute;right:0;top:0}img.gsc-branding-img-noclear{display:inline}.slideshow-container img{display:inline}
/* ==================== 
 * Intro Posts
 * ==================== */
.intro{overflow:hidden;display:none;}
.intro[data-slides='1']{height:auto;}
.intro[data-slides='3']{height:150px;}
.intro[data-slides='4']{height:160px;}
.intro[data-slides='3'] .Intro-Label:hover .Intro-Thumb{-webkit-transform:translate(0,-70px);-ms-transform:translate(0,-70px);transform:translate(0,-70px)}
.intro[data-slides='3'] .Intro-Details{position:absolute;bottom:-20px;padding:20px;right:0;width:100%;text-align:right;background-color:$(intro.back);height:73px}
.intro[data-slides='3'] .Intro-Label:hover .Intro-Details{bottom:0}
.intro[data-slides='3'] .Intro-Title{height:150px;top:120px;margin-bottom:10px}
.intro[data-slides='3'] .Intro-Label:hover .Intro-Title{top:0;opacity:1}
.intro[data-slides='3'] .Intro-Label .ReadMore{float:right;background-color:#962e5b;color:$(intro.button.color);position:absolute;bottom:-20px;left:20px;font-size:12px;font-family:BlogFont ,tahoma;padding:10px 15px;border-radius:3px;overflow:hidden}
.intro[data-slides='3'] .Intro-Label:hover .ReadMore{bottom:18.5px}
.intro[data-slides='3'] .Intro-Label .ReadMore:hover{background-color:$(intro.button.hover.back);color:$(intro.button.hover.color)}
.intro[data-slides='1'] .Intro-Title{bottom:20px;right:30px;border-radius:3px;opacity:1;width:auto}
.intro[data-slides='1'] .Intro-Label{height:300px;margin-bottom:0}
.intro[data-slides='1'] .Intro-Thumb{height:auto;min-height:100%;position:relative;top:0}
.intro[data-slides='1'] .Intro-Details,.intro[data-slides='1'] .ReadMore{display:none}
.intro[data-slides='1'] .owl-item{padding:0}
.intro[data-slides='1'] .Intro-Cate{left:20px}
.intro[data-slides='1'] .Intro-Label:after{right:20px}
.intro[data-slides='4'] .Intro-Title{max-height:100%;bottom:-100%}
.intro[data-slides='4'] .Intro-Label:hover .Intro-Title{bottom:0;opacity:1}
.intro[data-slides='4'] .Intro-Details,.intro[data-slides='4'] .ReadMore{display:none}
.intro .owl-wrapper,.intro .owl-wrapper-outer{height:100%}
#int-two{margin:20px 30px 0}
.Intro-Label{direction:rtl;width:100%;overflow:hidden;float:right;height:100%;position:relative;margin-bottom:20px;border-radius:3px}
.Intro-Cate{position:absolute;top:10px;left:10px;font-family:BlogFont ,Tahoma;font-size:14px;z-index:3;color:$(intro.label.color);opacity:.95;background-color:$(intro.label.back);padding:5px 10px;border-radius:3px}
.Intro-Thumb{background-color:$(wrapper);width:100%;height:100%;position:relative;z-index:2}
.Intro-Label:after{content:"\f074";position:absolute;color:rgba(255,255,255,0.3);z-index:2;font-family:FontAwesome;font-size:29px;text-align:center;right:10px;top:10px}
.Intro-Label:hover .Intro-Cate,.Intro-Label:hover:after{opacity:0}
.Intro-Title{color:#fff;font-family:BlogFont ,Tahoma;display:block;overflow:hidden;width:100%;position:absolute;text-align:center; padding:20px;z-index:2;opacity:0;font-size:19px}
.Intro-Date,.Intro-Author{display:block;font-family:tahoma;font-size:12px;margin-left:20px;color:$(intro.details)}
.Intro-Date:before,.Intro-Author:before{display:inline-block;font-family:fontawesome;font-size:14px;color:$(intro.details);margin-left:5px}
.Intro-Date{margin-bottom:5px}
.Intro-Date:before{content:"\f073"}
.Intro-Author:before{content:"\f007"}
.Intro-Date:hover, .Intro-Author:hover{text-decoration:underline}
#HTML102 .owl-controls{position:absolute;top:-webkit-calc(50% - 30px);top:calc(50% - 30px);left:0;width:100%}
#HTML102 .owl-prev,#HTML102 .owl-next{color:$(intro.label.color);font-family:fontawesome;font-size:25px;background-color:$(intro.label.back);padding:8px 15px;top:0;position:absolute;border-radius:3px;opacity:.3}
#HTML102 .owl-next{right:-50px}
#HTML102 .owl-prev{left:-50px}
#HTML102 .owl-carousel:hover .owl-prev{left:20px;opacity:.9}
#HTML102 .owl-carousel:hover .owl-next{right:20px;opacity:.9}
.I-toggle i{border:1px solid $(intro.line);width:70px;text-align:center;border-radius:100px;background-color:$(wrapper);display:block;margin:-10px auto 0;color:$(intro.line);cursor:pointer}
.I-toggle{display:none;border-top:1px dashed $(intro.line);margin:20px 30px 10px}
.I-toggle i:hover{background-color:$(intro.line);color:$(wrapper);border:1px solid $(wrapper)}
#HTML102:before,#HTML102:after{content:"";background-color:$(wrapper);position:absolute;top:0;width:1%;height:100%;z-index:5}
#HTML102:before{left:0}
#HTML102:after{right:0}
#HTML102{min-height:160px;width:102%;margin-right:-1%;margin-bottom:20px;position:relative;direction:ltr!important}
.r-loading{position:absolute;top:calc(50% - 31px);left:0;width:100%;height:100%;text-align:center;}
.r-loading i{color:#444;font-size:30px}
.r-loading span{font-family:BlogFont ,Tahoma;color:#999;margin-top:10px;direction:rtl;display:block}
/* =============== 
 *  NewsTicker
 * =============== */
#HTML101{margin:20px 30px;overflow:hidden;direction:ltr!important}
#HTML101 h2.title{background-color:$(ticker.back);color:$(ticker.color);font-family:BlogFont ,Tahoma;text-align:center;padding:12px 30px;float:right;position:relative;height:52px;border-radius:3px;font-size:19px}
#HTML101 h2.title:after{content:"";border-top:26px solid transparent;border-bottom:26px solid transparent;border-right:35px solid $(ticker.back);position:absolute;left:-10px;top:0;-webkit-transition:.3s ease-out;transition:.3s ease-out;z-index:2}
#HTML101:hover h2.title:after{left:-15px}
.NTick{position:relative;padding:0 30px;font-family:BlogFont ,Tahoma;font-size:16px;background-color:$(ticker.links.back);height:52px;overflow:hidden;text-align:right;border-left:10px solid $(ticker.back)}
.scroll{opacity:0}
.Scroll-Title{color:$(ticker.links.color);vertical-align:top;padding:15px 15px 15px 0;display:inline-block}
.Scroll-Title:hover{color:$(ticker.back);text-decoration:underline}
.Scroll-Title:before{content:"\f0a1";color:$(ticker.links.color);width:30px;text-align:center;display:inline-block;font-family:FontAwesome;margin-top:-8px;font-size:20px;margin-left:10px;-webkit-transition:.3s ease-out;transition:.3s ease-out}
.js-marquee-wrapper{direction:rtl;}
#HTML101 , #HTML102 {display:none;}
/* ==================== 
 * Recent Posts
 * ==================== */
.index-body{overflow:hidden}
.RecentThumb{float:right;width:300px;margin-left:30px;height:200px;overflow:hidden;position:relative}
.RecentThumb img{border-radius:3px;width:100%;height:100%}
.RecentThumb:hover img{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:.9}
.boxs:before,.boxs:after{content:"";position:absolute;top:5%;left:5%;z-index:1;-webkit-transition:.3s ease-out;transition:.3s ease-out}
.boxs:before{border-right:1px solid $(post.image.hover);border-left:1px solid $(post.image.hover);width:90%;height:0}
.boxs:after{border-top:1px solid $(post.image.hover);border-bottom:1px solid $(post.image.hover);width:0;height:90%}
.RecentThumb:hover .boxs:before,.RecentThumb:hover .boxs:after{width:90%;height:90%}
.Thumb:hover .boxs:before,.Thumb:hover .boxs:after{width:90%;height:90%}
.index-body .post-title a{width:-webkit-calc(100% - 330px);width:calc(100% - 330px);float:right;display:block;margin-bottom:5px;font-family:BlogFont ,Tahoma;color:$(post.title);font-weight:700;font-size:17px}
.index-body .post-title a:hover{color : $keycolor}
.RecentSnippet{font-size:14px;color:$(post.details);line-height:1.5em;font-family:BlogFont,Tahoma;line-height:1.5em}
.index-time,.index-author{font-family:tahoma;font-size:12px;display:inline-block;color:$(post.details);vertical-align:2px;}
.noImage{display:none;}
.index-author{margin-left:20px}
.post-outer{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid $(post.lines)}
.post-outer:last-of-type{padding-bottom:0;border-bottom:none}
.index-body .details{border-top:1px solid $(post.lines);border-bottom:1px solid $(post.lines);padding:5px 0;float:right;width:-webkit-calc(100% - 330px);width:calc(100% - 330px);margin-bottom:10px}
.g-profile{display:inline-block}
.index-time:before,.index-author:before{font-family:fontawesome;font-size:14px;color:$(post.details.icons);margin-left:5px;display:inline-block;vertical-align:middle}
.index-author:before{content:"\f007"}
.index-time:before{content:"\f017"}
.index-body .ReadMore{font-family:BlogFont ,Tahoma;background-color:$keycolor;-webkit-box-shadow:0 0 10px 30px rgba(0,0,0,0) inset;box-shadow:0 0 10px 30px rgba(0,0,0,0) inset;color:#FFF;float:right;padding:8px 15px;margin-top:10px;position:relative;border-radius:2px;overflow:hidden;font-size:14px;margin-left:10px;height:36px}
.index-body .ReadMore:hover{-webkit-box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset;box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset;padding:8px 15px 8px 50px}
.index-body .ReadMore:before{content:"\f060";position:absolute;top:10px;left:20px;opacity:0;font-family:fontawesome;-webkit-transition:.3s ease-out;transition:.3s ease-out}
.index-body .ReadMore:hover:before{opacity:1}
.index-body .ReadMore:after{content:"";width:60px;height:60px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,0.1)));background:-webkit-linear-gradient(transparent,rgba(0,0,0,0.1));background:-webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0,0,0,0.1)));background:-webkit-linear-gradient(transparent, rgba(0,0,0,0.1));background:linear-gradient(transparent,rgba(0,0,0,0.1));position:absolute;top:-5px;right:100%;-webkit-transform:rotate(-10deg);-ms-transform:rotate(-10deg);transform:rotate(-10deg)}
.index-body .ReadMore:hover:after{right:68%}
.ShareIndex{background-color:$keycolor;-webkit-box-shadow:0 0 10px 30px rgba(0,0,0,0) inset;box-shadow:0 0 10px 30px rgba(0,0,0,0) inset;color:#FFF;float:right;padding:10px;margin-top:10px;position:relative;border-radius:2px;overflow:hidden;font-size:20px;cursor:pointer;width:36px;height:36px}
.ShareIndex:hover{-webkit-box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset;box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset}
.ShareIndexBut{height:36px;background-color:$(cate.title.back);float:right;margin-top:10px;margin-right:20px;padding:7px 10px;border-radius:2px;position:relative;display:none}
.ShareIndexBut a{font-family:fontawesome;color:#000;width:20px;height:20px;text-align:center;padding-top:2px;float:right;border-radius:2px;color:#FFF}
.ShareIndexBut:before{content:"";border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:10px solid #000;position:absolute;top:10px;right:-10px}
.fb{margin-left:5px;background-color:#3b5998}
.tw{margin-left:5px;background-color:#55acee}
.pin{background-color:#cc2127}
.go{margin-left:5px;background-color:#DC493C}
/* ====================
 * Widgets Posts
 * ==================== */
#main .widget-content{overflow:hidden;margin-bottom:20px}
#main .Label{clear:both;overflow:hidden;display:none;}
#main .Label h2,.title-h{background-color:$(cate.title.back);color:$(cate.title.color);padding:10px 20px;font-family:BlogFont ,Tahoma;margin-bottom:20px;border-radius:3px;font-size:22px;position:relative;overflow:hidden;line-height:1}
.LabLink:before{content:"";background-color:$keycolor;position:absolute;left:-20px;top:0;width:120%;height:100%;z-index:1;-webkit-transform:skew(-30deg);-ms-transform:skew(-30deg);transform:skew(-30deg);border-right:10px solid $(wrapper);-webkit-transition:.3s ease-out;transition:.3s ease-out}
.LabLink:hover:before{background-color:$(cate.title.back)}
.LabLink{position:absolute;left:0;top:0;font-size:16px;width:130px;z-index:2;height:100%}
.LabLink:after{content:"شاهد المزيد";position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;color:#FFF;text-align:center;padding-top:10px;padding-right:5px;font-size:19px}
.LabLink:hover:after{color:$keycolor}
#main .Label h2:before,.title-h:before{content:"\f198";margin-left:10px;font-family:fontawesome;display:inline-block;vertical-align:top;color:$keycolor;-webkit-transition:.3s ease-out;transition:.3s ease-out}
.Post{overflow:hidden;position:relative}
.Title{font-weight:700;font-size:17px;font-family:BlogFont,Tahoma;color:$(post.title);line-height:1.4em;margin-bottom:10px;max-height:47px;overflow:hidden;float:right;width:-webkit-calc(100% - 110px);width:calc(100% - 110px)}
.Title:hover{color:$keycolor}
.Thumb{float:right;width:90px;height:90px;margin-left:20px;overflow:hidden;border-radius:3px;position:relative}
.Thumb h7{width:100%;height:100%;background-size:cover!important;background-position:center center!important;display:block}
.Thumb:hover h7{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:.9}
.Post .details{float:right;width:-webkit-calc(100% - 110px);width:calc(100% - 110px)}
.Date,.Author{font-family:tahoma;font-size:12px;color:$(post.details);display:inline-block;vertical-align:top}
.Author{margin-left:10px;}
.Date{margin-bottom:2.5px}
.Date:before,.Author:before{display:inline-block;vertical-align:top;font-family:fontawesome;font-size:14px;color:$(post.details.icons);margin-left:5px}
.Date:before{content:"\f073"}
a.Date:hover , a.Author:hover {text-decoration:underline}
.Author:before{content:"\f007"}
.Snippet{font-family:BlogFont ,Tahoma;color:$(post.details);font-size:14px;text-align:justify;line-height:1.5em}
/* ====================
 * List
 * ==================== */
.list .Post{height:110px;width:-webkit-calc(50% - 10px);width:calc(50% - 10px);margin-left:10px;float:right;margin-top:20px;padding-top:20px;border-top:1px solid $(post.lines)}
.list .Post:nth-of-type(-n+2){height:90px;padding-top:0;border-top:none;margin-top:0}
.list .Post:nth-of-type(2n){margin-right:10px;margin-left:0}
/* ====================
 * cover
 * ==================== */
.cover .Post:first-of-type{width:100%;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid $(post.lines)}
.cover .Post:first-of-type .Title{width:-webkit-calc(100% - 320px);width:calc(100% - 320px)}
.cover .Post:first-of-type .Thumb{width:300px;height:180px}
.cover .Post:first-of-type .details{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid $(post.lines);width:-webkit-calc(100% - 320px);width:calc(100% - 320px)}
.cov:nth-of-type(-n+3){margin-top:0}
.cov{height:90px;float:right;width:50%;margin-top:20px;padding-right:20px}
.cov:nth-of-type(2n){padding-left:19px;padding-right:0;border-left:1px solid $(post.lines)}
.cov .Snippet{display:none}
/* ====================
 * vertical cover
 * ==================== */
.vcover .Post:nth-of-type(n+2) .Snippet{display:none}
.vcover .Post:first-of-type{width:50%;float:right;height:480px;padding-left:19px;border-left:1px solid $(post.lines)}
.vcover .Post:nth-of-type(n+6){display:none}
.vcover .Post:first-of-type .Title{width:100%}
.vcover .Post:first-of-type .details{width:100%}
.vcover .Post:first-of-type .Thumb{width:100%;height:200px;margin-bottom:20px}
.vcover .Post:nth-of-type(n+2){height:110px;float:right;width:-webkit-calc(50% - 20px);width:calc(50% - 20px);margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid $(post.lines);margin-right:20px}
.vcover .Post:last-of-type{height:90px;margin-bottom:0;padding-bottom:0;border-bottom:none}
/* ====================
 * Sided
 * ==================== */
.Sided-Section{font-size:0}
.Sided-Section .section{display:inline-block;width:-webkit-calc(50% - 10px);width:calc(50% - 10px);vertical-align:top}
.Sided-Section .section:nth-of-type(odd){margin-left:20px}
.sided .Post{height:110px;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid $(post.lines)}
.sided .Post:last-of-type{height:90px;margin-bottom:0;padding-bottom:0;border-bottom:none}
.sided .Post:first-of-type .Thumb{width:100%;height:200px;float:none;margin-left:0;margin-bottom:20px;display:block}
.sided .Post:first-of-type .Title{width:100%;float:none;display:block;height:45px}
.sided .Post:first-of-type .details{width:100%;float:none}
.sided .Post:first-of-type .Snippet{height:40px}
.sided .Post:first-of-type{height:auto;}
.sided .Post:not(:first-of-type) .Snippet{display:none}
/* ====================
 * Cards
 * ==================== */
.cards .Post{float:right;width:-webkit-calc((100% - 40px) / 3);width:calc((100% - 40px) / 3);margin-left:19px;margin-top:20px}
.cards .Post:nth-of-type(-n+3){margin-top:0}
.cards .Post:nth-of-type(3n){margin-left:0}
.cards .Post .Thumb{width:100%;height:150px;margin-bottom:10px}
.cards .Post .Title{width:100%;height:50px}
.cards .details{padding:5px 0;border-top:1px solid $(post.lines);border-bottom:1px solid $(post.lines);overflow:hidden;clear:both;margin-bottom:5px;width:100%}
.cards .Date,.cards .Author{float:right}
.cards .Date{margin-bottom:0}
.cards .Post .Snippet{text-align:right;display:block;clear:both;height:80px}
/* ====================
 * Brodcast
 * ==================== */
.broadcast{overflow:hidden;margin-bottom:20px}
.broadcast .current{width:60%;padding:20px;height:364px;background-color:$(cate.title.back)}
.broadcast .Post{float:right}
.broadcast .current .Thumb{width:100%;height:250px}
.broadcast .current .Thumb:before{content:"\f01d";color:rgba(255,255,255,0.9);position:absolute;top:-webkit-calc(50% - 47px);top:calc(50% - 47px);left:-webkit-calc(50% - 55px);left:calc(50% - 55px);font-size:110px;font-family:fontawesome;z-index:2}
.broadcast .current .Title{color:$(cate.title.color);margin-top:20px;text-align:center;width:100%}
.broadcast .Post:nth-of-type(n+2){padding:10px 20px;width:40%;height:73px;border-bottom:1px solid $(post.lines);overflow:visible;cursor:pointer;-webkit-box-shadow:-10px -20px 61px transparent inset;box-shadow:-10px -20px 61px transparent inset}
.b-current{background-color:$keycolor!important}
.b-current .Title{color:#FFF}
.b-current:after{content:"";border-top:15px solid transparent;border-bottom:15px solid transparent;border-left:15px solid $keycolor;position:absolute;right:-15px;top:-webkit-calc(50% - 15px);top:calc(50% - 15px);z-index:2;-webkit-transition:.4s ease;transition:.4s ease}
.broadcast .Post:nth-of-type(n+2) .Thumb{width:70px;height:100%}
/* ====================
 * Labels
 * ==================== */
.label-size a{vertical-align:top;font-family:BlogFont,Tahoma;border-radius:3px;padding:10px 20px 10px 50px;display:block;white-space:nowrap;overflow:hidden;text-align:right;font-size:14px}
.label-size{display:block;margin-bottom:7px;width:100%;font-size:0}
.label-size span{display:inline-block;font-family:Tahoma;background-color:rgba(0,0,0,0.1);padding:7px 10px;font-size:12px;text-align:center;border-radius:5px;float:left;margin-top:-33px;margin-left:10px}
.no-nums{display:inline-block;width:47%;margin-left:1%}
.no-nums a{padding:10px 20px;text-align:center}
.label-size:hover span{color:#FFF}
.label-size:hover a{background-color:$keycolor;color:#FFF}

.Label li a{font-size:14px;font-family:BlogFont,Tahoma;padding:5px 0;display:block}
.Label li span{float:left;font-size:12px;font-family:Tahoma;margin-top:-25px;padding:3px 6px;border-radius:3px;width:30px;text-align:center}
.Label li a:before{color:$keycolor;display:inline-block;content:"\f100";font-family:fontawesome;padding-left:10px;-webkit-transition:.3s ease-out;transition:.3s ease-out}
.Label li:hover span{background-color:$keycolor;color:#fff}
.Label li:hover a:before{margin-right:5px}
.Label li span:first-child,.Label li span:nth-of-type(2){display:none}

aside .label-size a{background-color:$(side.lines);color:$(side.links)}
aside .label-size span{color:$(side.text)}
footer .label-size a{background-color:$(footer.lines);color:$(footer.links)}
footer .label-size span{color:$(footer.text)}

aside .Label li a{border-bottom:1px solid $(side.lines);color:$(side.links)}
aside .Label li span{background-color:$(side.lines);color:$(side.text)}
aside .Label li:hover a{color:$(side.links.hover);border-bottom:1px solid $keycolor}
footer .Label li a{color:$(footer.links);border-bottom:1px solid $(footer.lines)}
footer .Label li span{background-color:$(footer.lines);color:$(footer.text)}
footer .Label li:hover a{color:$(footer.links.hover);border-bottom:1px solid $keycolor}
/* ====================
 * Footer
 * ==================== */
footer .LinkList li a{display:block;border-bottom:1px solid $(footer.lines);font-family:BlogFont ,Tahoma;padding:10px 0;color:$(footer.links);text-align:right;font-size:14px}
footer .LinkList li a:before{content:"\f10c";padding-left:10px;font-family:fontawesome;font-size:8px}
footer .LinkList li a:hover{color:$(footer.links.hover);border-bottom:1px dotted $keycolor}
footer .LinkList li a:hover:before{content:"\f111";color:$keycolor}
footer{background-color:$(footer.back);width:100%}
.f-cols{padding:20px 30px 10px;overflow:hidden;clear:both}
.f-cols .section{width:-webkit-calc((100% - 60px) /4);width:calc((100% - 60px) /4);margin-left:19px;float:right;vertical-align:top;min-height:1px; }
.f-cols .widget{position:relative;width:100%}
.f-cols .widget-content{clear:both;color: #ffffff;}
#Col-4{margin-left:0}
footer .widget h2{font-family:BlogFont ,Tahoma;color:$(footer.title);padding:0 0 15px;margin-bottom:20px;float:right;font-size:19px}
footer .widget h2:before{height:2px;background-color:$keycolor;content:"";float:right;width:100%;position:relative;top:37px;z-index:2;-webkit-transition:.3s ease-out;transition:.3s ease-out}
footer .widget h2:after{width:100%;height:2px;background-color:$(footer.lines);top:37px;left:0;position:absolute;content:""}
.f-cols .widget-content{margin-bottom:20px;}
.f-cols.no-vp{padding-top:0;padding-bottom:0}
/* ====================
 * Contact Us
 * ==================== */
#ContactForm1{-webkit-box-shadow: 0 0 15px rgba(0,0,0,0.1);box-shadow: 0 0 15px rgba(0,0,0,0.1);width:220px;position:absolute;z-index:3;background-color:$(wrapper);top:140px;right:20px;border-radius:3px;padding:20px;display:none}
#ContactForm1:before{content:"";border-right:15px solid transparent;border-left:15px solid transparent;border-bottom:15px solid $(wrapper);position:absolute;top:-15px;right:39px}
#ContactForm1 h2.title{color:#999;clear:both;width:100%;text-align:center;border-bottom:1px solid $(lines)}
#ContactForm1 h2.title:before,#ContactForm1 h2.title:after{display:none}
#ContactForm1_contact-form-error-message,#ContactForm1_contact-form-success-message{font-family:BlogFont;color:#999;font-size:11px;direction:ltr}

footer form[name="contact-form"]{font-family:BlogFont ,Tahoma}
footer form[name="contact-form"] input[type='text'],footer form[name="contact-form"] textarea{border:1px solid $(lines);width:100%;padding:10px 20px;border-radius:3px;margin-bottom:5px;color:#999}
footer form[name="contact-form"] textarea{height:75px;margin-bottom:0;resize:none}

#ContactForm1_contact-form-submit{width:100%;background-color:$(lines);border-radius:3px;padding:10px;color:#999;font-size:16px;cursor:pointer}
#ContactForm1_contact-form-submit:hover{background-color:$keycolor;color:#FFF}

#Stats1 { text-align: center; }
/* ====================
 * Subscription
 * ==================== */
#FollowByEmail1 i{float:right;font-size:55px;border-radius:100%;width:90px;height:90px;background-color:#333;padding-top:18px;text-align:center;margin-left:20px}
i.fa.fa-microphone{color:$keycolor;font-size:50px;background-color:$(subs.buttons);width:80px;height:80px;text-align:center;border-radius:100%;padding-top:16px;margin-top:5px;display:inline-block;cursor:pointer;vertical-align:top}
i.fa.fa-microphone.cont-open{background-color:$keycolor;color:#FFF}
.fa.fa-arrow-up{color:$(subs.text);font-size:40px!important;background-color:$(subs.buttons);width:80px;height:80px;text-align:center;border-radius:100%;padding-top:19px;margin-top:5px;vertical-align:top;display:inline-block;cursor:pointer}
.fa-arrow-up:before{-webkit-transition:.3s linear;transition:.3s linear}
.fa-arrow-up:hover:before{color:$keycolor}
#HTML140 p{font-family:BlogFont,Tahoma;color:$(subs.text);font-size:14px;text-align:justify;display:inline-block;width:-webkit-calc(100% - 510px);width:calc(100% - 510px);margin:15px 20px;vertical-align:top}
#HTML140{display:inline}
.subscription{text-align:center}
#FollowByEmail1{display:inline-block;width:290px}
#f-row{width:100%;clear:both;background-color:$(subs.back);padding:20px 30px;height:130px;position:relative}
#f-row .subscription{text-align:center;display:block;margin-top:15px}
#f-row .email{border-radius:2px;background-color:$(subs.email.back);width:-webkit-calc(100% - 100px);width:calc(100% - 100px);padding:0 30px;text-align:left;direction:ltr;height:60px;font-size:12px;color:$(subs.email.color)}
#f-row .subscribe{background-color:$(subs.button.back);width:90px;font-family:BlogFont;border-radius:2px;font-size:19px;text-align:center;color:$(subs.button.color);height:60px;vertical-align:top;cursor:pointer}
#f-row .subscribe:hover{background-color:$(subs.button.back.hover);color:$(subs.button.color.hover)}
/* ====================
 * Copyrights
 * ==================== */
#copyrights{background-color:$(copts.back);min-height:50px;padding:10px 30px;border-top: 1px solid $(copts.line);overflow:hidden;}
#HTML110{display:block;margin-top:3px;}
#HTML110 a{color:$(copts.link);font-family:BlogFont ,Tahoma;display:inline-block;margin:0 5px;font-size:14px}
#HTML110 p{color:$(copts.text);font-family:BlogFont ,Tahoma;display:inline-block;font-size:14px}
#HTML110 a:hover{color:$keycolor!important}
#HTML110 .c-site p:first-child:before,#HTML110 .c-des p:first-child:before{vertical-align: -2px;font-family:fontawesome;display:inline-block;margin-left:10px;-webkit-transition:.3s ease-out;transition:.3s ease-out}
#HTML110 .c-site p:first-child:before{content:"\f1f9"}
#HTML110 .c-des p:first-child:before{content:"\f1fc"}
#HTML110 .c-des{float:right;}
#HTML110 .c-site{margin-left:30px;float:right;}

#LinkList104{float:left}
#LinkList104 li a{background-color:$(copts.soc.back);color:$(copts.soc.color);width:30px;height:30px;text-align:center;padding-top:7px;border-radius:100%}
#LinkList104 li{vertical-align:top;display:inline-block}
#LinkList104 li a:hover{color:#FFF}
/* ====================
 * Post Page
 * ==================== */
.share{width:100%;clear:both;border-top:1px solid $(postbody.lines);padding:10px 0;border-bottom:1px solid $(postbody.lines);margin-bottom:20px}
.like{float:right}
.share h7{float:right;color:$(postbody.subtitle);font-size:21px;margin-top:3px;font-family:BlogFont,tahoma}
.share a{cursor:pointer;float:left;font-family:FontAwesome;font-size:20px;width:40px;padding:10px 0;text-align:center;color:#FFF;border-radius:2px;vertical-align:top;margin-right:5px;height:40px}
.share a:hover{background-color:#444!important}
.share .facebook{background-color:#3C56A1}
.share .twitter{background-color:#89c9fa}
.share .google{background-color:#DC493C}
.share .pinterest{background-color:#c72527}
.share .whatsapp{background-color:#65bc54}
.share .print{background-color:#1A7DB9}
.fb-like.fb_iframe_widget:before{content:"\f09a";color:#fff;padding:10px 15px;background-color:#3C56A1;display:inline-block;position:absolute;top:0;left:0;font-family:FontAwesome;font-size:20px;height:40px;width:40px}
.fb-like.fb_iframe_widget{margin-right:5px;padding:10px 10px 10px 50px;background-color:#f5f5f5;position:relative;border-radius:2px;vertical-align:top;float:left;height:40px;width:114px}
.fb-like.fb_iframe_widget:hover:after{width:0;opacity:0;text-indent:-100px;font-size:0}
.fb-like.fb_iframe_widget:after{content:"Like";background-color:#3C56A1;position:absolute;right:0;top:0;width:-webkit-calc(100% - 40px);width:calc(100% - 40px);height:100%;width:74px;color:#FFF;padding-top:12px;padding-left:10px;font-size:14px;font-family:Arial;text-indent:30px;font-weight:700;height:40px;-webkit-transition:.3s ease-out;transition:.3s ease-out;z-index:2}
.plus-one:before{content:"\f0d5";color:#fff;padding:10px 0;background-color:#dd4e42;display:inline-block;position:absolute;top:0;left:0;font-family:FontAwesome;font-size:20px;height:40px;width:40px}
.plus-one{padding:7px 10px 10px 50px;background-color:#f5f5f5;position:relative;border-radius:2px;vertical-align:top;float:left;height:40px;width:114px;text-align:center}
.plus-one:hover:after{width:0;opacity:0;text-indent:-100px;font-size:0}
.plus-one:after{content:"+1";background-color:#dd4e42;position:absolute;right:0;top:0;width:-webkit-calc(100% - 40px);width:calc(100% - 40px);height:100%;width:74px;color:#FFF;padding-top:12px;padding-left:10px;font-size:14px;font-family:Arial;text-indent:30px;font-weight:700;height:40px;-webkit-transition:.3s ease-out;transition:.3s ease-out;z-index:2}
.post-body{color:$(postbody.text);padding:20px 0;}
.post-body span{display:inline}
.post-body a:not(.ibtn){color:#000;font-weight:bold;} 
.post-body a:not(.ibtn):hover {color:$keycolor!important;text-decoration:underline;}
.post-body,.post-body *{font-family: inherit;}
.article-title{line-height:40px;font-family:Droid Arabic Naskh ,Tahoma!important;font-weight:700;font-size:26px!important;text-align:right;color:$(postbody.title.color)!important;padding:10px 20px;border-right:15px solid $(keycolor);background-color:$(postbody.title.back)}
.separator a{margin:0 auto!important}
.post-body img:not(.slider img){max-width:-webkit-calc(100% - 40px);max-width:calc(100% - 40px);padding:10px;border:1px solid #eee;margin:0 20px}
.post-body h3{font-weight:700;font-size:20px}
.post-body h4{font-weight:700;font-size:18px;text-decoration:underline}
.post-body ol li{margin-right:40px;list-style:decimal;padding-right:10px}
.post-body ul li{margin-right:40px;list-style:circle;padding-right:10px}
.post-body ul li:hover{list-style:disc}
.post-body blockquote{clear:both;background-color:$(keycolor);padding:20px;margin:5px 20px;color:#FFF;border-radius:3px;text-indent:50px;position:relative}
.post-body blockquote:before{content:"\f10e";position:absolute;font-family:fontawesome;font-size:30px;top:16px;right:-30px}
.static_page .post-details{display:none;}
.static_page .article-title{text-align:center}
.post-details{clear:both;width:100%;border-top:1px solid $(postbody.lines);border-bottom:1px solid  $(postbody.lines);padding:5px 0;margin:10px 0}
.post-details h6{font-family:FontAwesome;color:$(postbody.details.icon);display:inline-block;vertical-align:0;font-size:14px;margin-left:5px}
.post-labels,.post-author,.post-timestamp{display:inline-block;vertical-align:top;margin-left:10px}
.g-profile:hover,.published:hover,.post-labels a:hover{color:$keycolor}
.fn{display:inline-block;vertical-align:middle}
.g-profile,.timestamp-link,.post-labels a{font-family:Droid Arabic Naskh ,Tahoma;color:$(postbody.details);font-size:12px}
#crumbs b{font-size:10px;color:$(postbody.details.icon);padding:0 5px;font-family:blogfont,cursive}

/* ======================
 * Border Messages
 * ====================== */
.status-msg-wrap{clear:both;display:block;font-family:blogfont,tahoma;border:1px solid $(post.lines);padding:15px 20px;margin-bottom:20px;border-radius:3px;color:$(post.details)}
.status-msg-wrap b{color:$keycolor}
.status-msg-wrap a{color:$(post.title)}
.status-msg-wrap a:hover{color:$keycolor;text-decoration:inderline}
/* ======================
 * Advs
 * ====================== */
.wide{width:100%!important;margin-right:0!important}
.navi-wide #blog-pager{width:100%!important;margin-right:0!important}
.inline-ad{text-align:center;margin-bottom:20px}
#HTML202{margin-right:20px;margin-bottom:20px;text-align:center}
#HTML109{text-align:center}
#HTML201,#HTML203{text-align:center;display:none}
#HTML201{margin-bottom:20px}
#HTML203{margin-top:20px}
.post-body #HTML201,.post-body #HTML203{display:block}
.post-body #HTML202{display:inline}


/* ====================
 * Short Cods
 * ==================== */
/* ========== 
 * Messages 
 * ========== */ 
.sh-msg{font-style:normal;padding:15px 20px;display:block!important;clear:both;border-radius:3px;border:2px solid rgba(0,0,0,0.05);color:#FFF;font-weight:700;text-align:right;text-shadow:1px 1px 2px rgba(0,0,0,0.1)}
.sh-msg:before{content:"\f05a";display:inline-block;padding-left:20px;font-family:fontawesome;font-size:44px;vertical-align:top;font-weight:400}
.sh-msg.short-info{background-color:#80E4EC}
.sh-msg.short-error{background-color:#FF8585}
.sh-msg.short-success{background-color:#50DA79}
.sh-msg.short-warning{background-color:#ECD152}
.post-body iframe{max-width:100%;}
/* ========== 
 * Contact 
 * ========== */ 
#ContactForm2{display:none}
.post-body #ContactForm2{display:block}
.inside-contact .contact-form-name{margin-left:1%}
.inside-contact input[type='text']{float:right;width:49.5%}
.inside-contact input[type='text'],.inside-contact textarea{border:1px solid $(postbody.lines);padding:10px 20px;border-radius:3px;margin-bottom:5px;color:$(postbody.text);font-size:14px;font-family:Droid Arabic Naskh ,Tahoma!important;resize:vertical}
.inside-contact textarea{display:block;width:100%}
.inside-contact input[type='text']:focus,.inside-contact textarea:focus{border:1px solid $keycolor}
.contact-buttons{float:left}
.contact-buttons input{display:inline-block;background-color:$(postbody.lines);color:$(postbody.text);padding:6px 0;border-radius:3px;font-family:Droid Arabic Naskh ,Tahoma!important;font-weight:700;cursor:pointer;width:100px;text-align:center;font-size:12px}
.contact-buttons input:hover{background-color:$keycolor;color:#FFF}
.inside-contact{margin-bottom:20px}
.contact-message{float:right;margin-top:10px}
.contact-message p{font-family:Droid Arabic Naskh ,Tahoma!important;font-size:12px;color:$(postbody.text)}
.contact-message p img{float:right;vertical-align:-3px;margin:6px 0 0 10px;padding:0;border:none}
/* ========== 
 * Accordion 
 * ========== */ 
.accordion .acor-title{background-color:$(postbody.lines);color:$(postbody.text);padding:10px 20px;text-align:right;position:relative;cursor:pointer;height:50px;font-weight:700}
.accordion .acor-content{width:100%;max-height:0;padding:0 20px;margin-bottom:10px;text-align:right;display:block;overflow:hidden}
.accordion .acor-title:after{content:"\f055";font-family:fontawesome;position:absolute;font-size:30px;left:20px;top:8px;color:rgba(0,0,0,0.2);font-weight:400}
h6.acor-title-active:after{content:"\f056"}
div.acor-content.acor-active{max-height:1000px;padding:20px}
h6.acor-title-active{background-color:$keycolor}
/* ========== 
 * Buttons 
 * ========== */ 
.ibtn{border-radius:5px;display:inline-block;vertical-align:top;font-weight:700;margin:5px;border:1px solid rgba(0,0,0,0.05);-webkit-transition:.2s ease;transition:.2s ease;-webkit-box-shadow:0 -20px 75px 0 rgba(0,0,0,0.2) inset;box-shadow:0 -20px 75px 0 rgba(0,0,0,0.2) inset;text-shadow:1px 1px 0 rgba(0,0,0,0.1);font-family:BlogFont ,Tahoma!important}
.ibtn:hover{-webkit-box-shadow:0 -20px 75px 0 rgba(0,0,0,0.25) inset;box-shadow:0 -20px 75px 0 rgba(0,0,0,0.25) inset}
.ibtn-1{padding:5px 15px;font-size:16px}
.ibtn-2{padding:7px 20px;font-size:17px}
.ibtn-3{padding:7px 30px;font-size:20px}
.ibtn-4{padding:10px 30px;font-size:24px}
.iDown:before{content:"\f0ed";font-family:fontawesome;display:inline-block;padding-left:10px;vertical-align:top}
.iDown.ibtn-1:before{font-size:24px}
.iDown.ibtn-2:before{font-size:25px}
.iDown.ibtn-3:before{font-size:28px;font-size:31px}
.iPrev:before{content:"\f002";font-family:fontawesome;display:inline-block;padding-left:10px;vertical-align:top}
.iPrev.ibtn-1:before{font-size:20px}
.iPrev.ibtn-2:before{font-size:25px}
.iPrev.ibtn-3:before{font-size:28px;font-size:31px}
/* ================
 * Sliders
 * ================ */ 
.slider{direction:ltr;clear:both;margin:20px auto;width:100%;display:none}
.owl-carousel .owl-item{height:100%}
.slider a{display:block;position:relative;direction:rtl}
.slider-cover a{height:auto}
.slider .owl-item{direction:rtl}
.slider .owl-pagination div{display:inline-block;width:20px;height:20px;vertical-align:top;margin:0 3px}
.slider .owl-pagination div span{display:block;width:100%;height:100%;background-color:$(postbody.lines);border-radius:100%;border:5px solid #FFF;-webkit-box-shadow:0 0 6px -3px #000;box-shadow:0 0 6px -3px #000}
.slider img{width:100%;min-height:100%}
.slider .owl-buttons div{z-index:5;display:block;font-family:fontawesome!important;text-align:center;border-radius:2px;font-weight:700}
/* ================
 * Slider Cover 
 * ================ */ 
.slider-cover .owl-item a:after,.slider-cover .owl-item div:after{content:attr(title);position:absolute;width:100%;bottom:0;display:block;z-index:2;color:#FFF;font-family:Droid Arabic Naskh ,Tahoma!important;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(#000));background:-webkit-linear-gradient(transparent,#000 100%);background:linear-gradient(transparent,#000 100%);padding:30px}
.slider-cover .owl-item{padding:0}
.slider-cover .owl-pagination{position:absolute;top:20px;right:30px}
.slider-cover .owl-pagination div span{background-color:rgba(255,255,255,0.1);border:5px solid rgba(255,255,255,0.1)}
.slider-cover .owl-page.active span{border:5px solid #fff}
.slider-cover .owl-buttons div{background-color:rgba(0,0,0,0.7);color:#FFF;width:40px;height:40px;top:20px;font-size:30px;line-height:37px;position:absolute}
.slider-cover .owl-next{left:65px}
.slider-cover .owl-prev{left:20px}
.slider-cover .owl-buttons div:hover{background-color:$keycolor}
/* ================
 * Slider Carousel 
 * ================ */ 
.slider-carousel a{height:auto}
.slider-carousel[data-items='3'] .owl-wrapper{height:200px;overflow:hidden}
.slider-carousel .owl-item img,.slider-carousel .owl-item a,.slider-carousel .owl-item div{width:100%;display:block;height:100%}
.slider-carousel .owl-item a,.slider-carousel .owl-item div{position:relative}
.slider-carousel .owl-item a:after,.slider-carousel .owl-item div:after{content:attr(title);position:absolute;width:100%;bottom:0;display:block;z-index:2;color:#FFF;font-family:Droid Arabic Naskh ,Tahoma!important;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(#000));background:-webkit-linear-gradient(transparent,#000 100%);background:linear-gradient(transparent,#000 100%);line-height:1.5;overflow:hidden;font-size:14px;font-weight:700;text-align:right;padding:20px 15px}
.slider-carousel .owl-pagination{float:right;margin-top:20px;margin-right:10px;text-align:center;direction:rtl}
.slider-carousel{width:102%;margin-right:-1%}
.slider-carousel .owl-pagination div span{background-color:$(wrapper);border:5px solid #FFF}
.slider-carousel .owl-page.active span{background-color:$keycolor;border:3px solid #FFF}
.slider-carousel .owl-buttons div:hover{background-color:$keycolor;color:#FFF}
.slider-carousel .owl-next{left:15px}
.slider-carousel .owl-prev{left:10px}
.slider-carousel .owl-buttons div{background-color:$(postbody.lines);color:$keycolor;width:30px;height:30px;top:10px;font-size:26px;float:left;line-height:31px;position:relative}
/* ====================
 * Programming Codes
 * ==================== */ 
.s-code::-webkit-scrollbar{height:10px}
.s-code::-webkit-scrollbar-track{border-radius:100px}
.s-code::-webkit-scrollbar-thumb{background-color:#444;border-radius:100px}
.s-code.t-HTML::-webkit-scrollbar-thumb:hover{background-color:#2AA4DA}
.s-code.t-CSS::-webkit-scrollbar-thumb:hover{background-color:#0A9E6A}
.s-code.t-JAVASCRIPT::-webkit-scrollbar-thumb:hover{background-color:#B58A33}
.s-code.t-CODE::-webkit-scrollbar-thumb:hover{background-color:#CCC}
.s-code{background-color:#222;clear:both;display:block;direction:ltr;width:100%;border-radius:3px;overflow:hidden}
.s-code:hover{overflow-x:scroll}
.t-code{display:table-cell;vertical-align:top;width:100%;margin:0;white-space:normal}
.t-code code{display:block;color:#ccc;font-size:14px;font-family:monospace!important;height:30px;padding:0 20px;white-space:nowrap}
.t-code code:nth-of-type(odd){background-color:#151515}
.l-code{display:table-cell;vertical-align:top;min-width:40px;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}
.l-code em{display:block;font-style:normal;color:#fff;text-align:center;font-family:sans-serif!important;height:30px;line-height:1;padding-top:7px}
.l-code em:nth-of-type(odd){background-color:rgba(255,255,255,0.1)}
.s-code:before{display:table-caption;width:100%;padding:0 20px;font-family:monospace;font-size:24px;height:50px;padding-top:10px;font-weight:700}
.t-HTML .l-code{background-color:#2AA4DA}
.t-CSS .l-code{background-color:#0A9E6A}
.t-JAVASCRIPT .l-code{background-color:#B58A33}
.t-CODE .l-code{background-color:#444}
.s-code.t-HTML:before{content:"< HTML >";border-bottom:2px solid #2AA4DA;color:#2AA4DA}
.s-code.t-CSS:before{content:"< CSS >";border-bottom:2px solid #0A9E6A;color:#0A9E6A}
.s-code.t-JAVASCRIPT:before{content:"< JAVASCRIPT >";border-bottom:2px solid #B58A33;color:#B58A33}
.s-code.t-CODE:before{content:"< CODE >";border-bottom:2px solid #999;color:#999}

/* ====================
 * Statatics
 * ==================== */
#Stats1_totalCount{display:inline-block;vertical-align:top;font-size:30px;font-family:Arial;font-weight:700;color:$keycolor;margin-right:8px}
#Stats1_sparkline{display:inline-block;vertical-align:top;margin-bottom:10px;}
img[height="1"]{display:none}
#BlogArchive1_ArchiveMenu{width:100%;padding:10px;font-family:BlogFont,tahoma;outline:none}
/* ====================
 * Post Navigators
 * ==================== */
#blog-pager{overflow:hidden;border-radius:2px;width:-webkit-calc(70% - 20px);width:calc(70% - 20px);float:right;margin-right:20px}
.inav:before,.inav p,.inav span{color:#ddd!important}
.blog-pager-older-link,.blog-pager-newer-link{width:50%;vertical-align:top}
.blog-pager-older-link{float:left;text-align:left;padding-right:10px}
.blog-pager-newer-link{float:right;text-align:right;padding-left:10px}
.blog-pager-newer-link p ,.blog-pager-older-link p{font-family:BlogFont,tahoma;color:#999;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700}
.blog-pager-newer-link span,.blog-pager-older-link span{font-family:BlogFont,tahoma;color:#ccc;font-size:13px;display:inline-block;vertical-align:top;margin-top:6px}
.blog-pager-newer-link:before,.blog-pager-older-link:before{width:40px;height:50px;color:#eee;font-family:fontawesome;font-size:50px;-webkit-transition:.3s ease-out;transition:.3s ease-out}
.blog-pager-newer-link:before{content:"\f101";float:right;text-align:right}
.blog-pager-older-link:before{content:"\f100";float:left;text-align:left}
#blog-pager a:hover p{color:$(related.links)} 
.item #blog-pager a:hover span{color:$(related.details)}
#blog-pager a:hover:before{color:$keycolor}

#Pagination{color:#FFF;width:100%;text-align:center;padding:20px;background-color:$(keycolor);border-radius:3px;margin-bottom:20px;font-family: blogfont;}
#Pagination .showpageOf, #Pagination .lastpage, #Pagination .firstpage{display:none!important}
#Pagination .pagecurrent, #Pagination .displaypageNum{display:inline-block}
#Pagination .displaypageNum a, #Pagination .pagecurrent, #Pagination .showpage{min-width:30px;display:inline-block;margin:0 3px;padding-bottom:7px;font-size:16px}
#Pagination .displaypageNum a, #Pagination .showpage a{border-bottom:3px solid rgba(255,255,255,0.1);color:#fff;font-size:16px;padding-bottom:7px}
#Pagination .pagecurrent, #Pagination .displaypageNum a:hover, #Pagination .showpage:hover{border-bottom:3px solid #fff;color:#fff!important}
/* ====================
 * Related Posts
 * ==================== */
.related-posts{width:-webkit-calc(70% - 20px);width:calc(70% - 20px);float:right;margin-right:20px;margin-bottom:20px;border-bottom:1px solid $(postbody.lines);padding-bottom:20px;direction:ltr!important}
.related-h3{text-align:right;font-family:BlogFont ,Tahoma;border-bottom:1px solid $(postbody.lines);margin-bottom:20px;color:$(postbody.subtitle);padding-bottom:10px;font-size:19px;float:right;margin-right:20px;width:-webkit-calc(70% - 20px);width:calc(70% - 20px)}
.related-posts .owl-item{padding:0 10px}
.relate-p{direction:rtl!important;width:100%}
.r-details{margin-top:5px;direction:rtl;font-family:Tahoma;font-size:12px;clear:both;color:$(related.details);overflow:hidden}
.r-author{display:inline-block}
.r-date{display:inline-block;margin-left:20px;margin-bottom:5px}
.r-date:before,.r-author:before{font-family:fontAwesome;padding-left:5px;display:inline-block;vertical-align:bottom}
.r-date:before{content:"\f017"}
.r-author:before{content:"\f007"}
.relate-Thumb{position:relative;display:block;width:100%;margin-left:20px;height:150px;margin-bottom:10px;overflow:hidden;padding:5px;border:1px solid $(postbody.lines)}
.relate-Thumb:hover img{opacity:0.7}
.relate-Thumb img{width:100%;height:100%}
.related-title{line-height:21px;font-family:BlogFont,Tahoma;color:$(related.links);margin-bottom:10px;height:42px;overflow:hidden}
.related-posts .owl-buttons{position:absolute;top:-55px;left:0}
.related-posts .owl-buttons div{font-family:fontawesome;width:25px;height:25px;text-align:center;padding-top:3px;display:inline-block;vertical-align:top;margin-right:5px;border-radius:2px;color:$(postbody.subtitle);border:1px solid $(postbody.lines)}
/* ====================
 * Author Profile
 * ==================== */
.author-profile{padding:0 20px;border-left:1px solid $(postbody.lines);margin-bottom:20px;overflow:hidden;float:right;min-height:390px;width:30%}
.profile-h3{text-align:right;font-family:BlogFont ,Tahoma;border-bottom:1px solid $(postbody.lines);margin-bottom:20px;color:$(postbody.subtitle);padding-bottom:10px;font-size:19px}
.author-profile img{border:1px solid $(postbody.lines);margin-left:20px;width:100%;margin-bottom:10px;border-radius:100%;padding:20px}
.author-profile span[itemprop='name']{display:block;text-align:center;font-family:BlogFont ,Tahoma;color:$(related.links);font-weight:700;margin-bottom:5px;font-size:18px}
.author-profile span[itemprop='name']:hover{color:$keycolor}
.author-profile span[itemprop='description']{display:block;font-family:BlogFont ,Tahoma;color:$(postbody.details);font-size:12px;text-align:justify}
/* ====================
 * Social Networks 
 * ==================== */
#LinkList102{overflow:hidden}
#LinkList102 a{position:relative;display:block;margin-top:8px;padding:5px 0;border-radius:3px;text-align:center;overflow:hidden;width:48%;float:right;margin-right:4%;color:#fff;font-size:30px;height:60px;-webkit-box-shadow:0 30px 50px rgba(0,0,0,0.15) inset;box-shadow:0 30px 50px rgba(0,0,0,0.15) inset}
#LinkList102 a:nth-of-type(-n+2){margin-top:0}
#LinkList102 a:nth-of-type(odd){margin-right:0}
#LinkList102 span{font-family:Tahoma;position:relative;color:#fff;text-transform:capitalize;font-size:12px;text-align:center;margin-top:3px;vertical-align:top}
#LinkList102 br{font-size:33px;vertical-align:top}
#LinkList102 a:hover{background-color:#444!important;color:#ddd}
#LinkList102 a:hover span{color:#999}
/* ====================
 * Weather
 * ==================== */
#HTML103 .widget-content{display:none}
#HTML103{margin-bottom:0}
#weather{background-color:$(weather.back);padding:20px;border-radius:3px;-webkit-box-shadow:0 70px 70px 30px rgba(0,0,0,0.1) inset;box-shadow:0 70px 70px 30px rgba(0,0,0,0.1) inset;max-width:250px;margin:0 auto 20px auto}
abbr.Today{display:block;font-family:BlogFont;text-align:center;font-size:31px;color:$(weather.back);border-radius:5px;padding:5px 0;background-color:$(weather.color)}
#weather i{font-size:170px;line-height:100%;text-align:center;display:block;color:$(weather.color);margin-bottom:-10px}
span.Condition{display:block;text-align:center;color:$(weather.color);font-family:BlogFont;font-size:20px}
span.Today-Temp{display:block;text-align:center;color:$(weather.color);font-family:Arial;font-size:24px;font-weight:bold;text-transform:capitalize}
.icon{font-family:BlogFont;font-weight:normal;font-style:normal}
.icon-0:before{content:"é"}.icon-1:before{content:"î"}.icon-2:before{content:"ð"}.icon-3:before{content:"ï"}.icon-4:before{content:"ð"}.icon-5:before{content:"ò"}.icon-6:before{content:"ò"}.icon-7:before{content:"ò"}.icon-8:before{content:"ò"}.icon-9:before{content:"ì"}.icon-10:before{content:"ò"}.icon-11:before{content:"ì"}.icon-12:before{content:"ì"}.icon-13:before{content:"ì"}.icon-14:before{content:"ì"}.icon-15:before{content:"ò"}.icon-16:before{content:"ì"}.icon-17:before{content:"ò"}.icon-18:before{content:"ñ"}.icon-19:before{content:"ó"}.icon-20:before{content:"ó"}.icon-21:before{content:"ó"}.icon-22:before{content:"ó"}.icon-23:before{content:"ó"}.icon-24:before{content:"ë"}.icon-25:before{content:"ë"}.icon-26:before{content:"ç"}.icon-27:before{content:"ô"}.icon-28:before{content:"ê"}.icon-29:before{content:"ô"}.icon-30:before{content:"ê"}.icon-31:before{content:"è"}.icon-32:before{content:"æ"}.icon-33:before{content:"è"}.icon-34:before{content:"æ"}.icon-35:before{content:"ò"}.icon-36:before{content:"æ"}.icon-37:before{content:"ð"}.icon-38:before{content:"ð"}.icon-39:before{content:"ð"}.icon-40:before{content:"í"}.icon-41:before{content:"ò"}.icon-42:before{content:"ì"}.icon-43:before{content:"ò"}.icon-44:before{content:"ô"}.icon-45:before{content:"ð"}.icon-46:before{content:"ñ"}.icon-47:before{content:"ð"}
/* ====================
 * Instagram Widget
 * ==================== */
.insta-photos a:nth-of-type(3n),.flickr-photos a:nth-of-type(3n){margin-left:0}
.insta-photos a,.flickr-photos a{display:inline-block;width:30%;margin:0 0 10px 5%;opacity:.8}
.insta-photos a img,.flickr-photos a img{border-radius:2px}
.insta-photos a:hover,.flickr-photos a:hover{opacity:1}
/* ======================
 * Archive Widget
 * ====================== */
aside .goog-te-gadget-simple{border:1px solid $(side.lines);text-align:center;margin:0 auto;padding:10px;display:block}
.BlogArchive select{font-family:blogFont;color:$(side.links);width:100%;padding:10px;border:1px solid $(side.lines);background:none}
#ArchiveList .collapsed ul{display:none}
.flat .archivedate a{font-family:BlogFont;border-bottom:1px solid $(side.lines);display:block;color:$(side.links);padding:5px 0}
.flat .archivedate a:hover{border-bottom:1px solid $keycolor;color:$(side.links.hover)}
.flat-count{float:left;margin-top:-27px;color:$(side.text);font-size:12px}
.flat a:before{color:$keycolor;display:inline-block;content:"\f100";font-family:fontawesome;padding-left:10px;-webkit-transition:.3s ease-out;transition:.3s ease-out}
.archivedate:hover a:before{padding-right:5px}
.toggle{background-color:#444;font-family:Arial;color:#fff!important;float:right;width:30px;height:30px;text-align:center;padding-top:5px;border-radius:3px;padding-right:5px}
.toggle:hover{background-color:$keycolor}
.post-count-link{float:right;width:-webkit-calc(100% - 35px);width:calc(100% - 35px);color:$(side.links);font-family:BlogFont;padding:4px 10px;margin-right:5px;margin-bottom:5px;border-bottom:1px solid $(side.lines)}
.post-count{float:left;margin-top:-27px;color:$(side.text);font-size:12px}
.posts a{display:block;font-family:BlogFont ,Tahoma;color:$(side.text);border-bottom:1px solid $(side.lines);padding:10px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;margin-bottom:5px}
.posts a:hover{border-bottom:1px solid $keycolor;color:$(side.links.hover)}

/* ====================
 * Comments
 * ==================== */
.c-icons{border-bottom:1px solid $(postbody.lines);width:100%;height:50px;border-radius:3px;text-align:left}
.c-icons h3{float:right;margin-top:13px;font-family:BlogFont,Tahoma;font-size:25px;color:$(postbody.subtitle)}
.c-icons span{margin-top:9px;border-radius:3px;margin-right:5px;font-family:BlogFont;cursor:pointer;font-size:14px;display:inline-block;vertical-align:top;width:91px;height:30px;background:$(comm.back) url(http://3.bp.blogspot.com/-OPew1v1hjO4/VqpIpESmS7I/AAAAAAAAAvM/v3oxGsnBVd0/s1600-r/comments.png) no-repeat}
.fbc{background-position:center -2px!important}
.blo{background-position:center -36px!important}
.dsq{background-position:center -70px!important}
.plus{background-position:center -104px!important}
.ico-act.blo{background-color:#FF9534!important}
.ico-act.fbc{background-color:#3b5998!important}
.ico-act.dsq{background-color:#2E9FFF!important}
.ico-act.plus{background-color:#DD4E42!important}
.Blogger-Comments{padding:20px 0}
#comments{display:none;}
.Blogger-Comments #comments{display:block;}
.tab-cont{display:none;}
.cmt_iframe_holder,.cmt_iframe_holder iframe{width:100%!important;display:block!important;}
.tab-active{display:block;}
.comment{margin-bottom:10px;border:1px solid $(postbody.lines);padding:30px;overflow:hidden}
.thread-toggle{display:none}
.comment-header{border-bottom:1px solid $(postbody.lines);padding-bottom:25px;margin-bottom:10px}
.avatar-image-container{float:right;margin-left:20px}
.avatar-image-container img{border:5px solid $(postbody.lines);width:50px;height:50px;border-radius:3px}
cite.user a{font-family:BlogFont,Tahoma;font-style:normal;color:$(postbody.text);font-size:18px;font-weight:700;display:block}
cite.user a:hover{color:$keycolor}
.datetime a{font-family:Tahoma;color:$(postbody.details);font-size:12px;margin-top:5px;display:block}
.datetime a:hover{text-decoration:underline}
.comment-content{font-family:Droid Arabic Naskh,Tahoma;color:$(postbody.details);text-align:justify;line-height:1.5em;font-size:14px}
.comment-actions,.continue{display:block;text-align:left;overflow:hidden;margin-bottom:20px}
.comment-actions a,.continue a,.loadmore a{float:left;font-family:Droid Arabic Naskh,Tahoma;color:$(postbody.text);background-color:$(postbody.lines);padding:0 20px;border-radius:2px}
.comment-actions a:hover,.continue a:hover,.loadmore a:hover{background-color:$keycolor;color:#FFF}

/* ====================
 * Featured Post
 * ==================== */
.post-summary a{font-family:blogfont,Tahoma;font-weight:700;display:block;text-align:center}
.post-summary p{font-size:14px;margin-bottom:10px;display:block;text-align:justify;font-family:blogfont,tahoma}
aside .post-summary a{color:$(side.links)}
aside .post-summary a:hover{color:$(side.links.hover)}
aside .post-summary p{color:$(side.text)}
footer .post-summary{clear:both;}
footer .post-summary a{color:$(footer.links)}
footer .post-summary a:hover{color:$(footer.links.hover)}
footer .post-summary p{color:$(footer.text)}
/* ====================
 * Print 
 * ==================== */
@media print {
#HeaderTop,#HeaderMid,#HeaderBot,#Intro,.I-toggle,aside,.share,.author-profile,.related-h3,.related-posts,#blog-pager,#HTML106,footer,#LinkList104,#copyrights,#HTML201,#HTML202,#HTML203,.mobile .mobile-pager,.mobile .share{display:none!important}
#main{width:100%!important;float:none!important;border:none!important}
.wrapper{width:100%!important;max-width:5000px!important}
.article-title,.post-details{text-align:center!important}
body{background-color:#FFF}
}
.resp-it{overflow:visible!important;position:absolute;width:200px;background-color:#000;top:100px;z-index:5;padding:20px;border-radius:3px;right:25px;display:none}
.resp-it li{width:100%;float:none;display:block;text-align:center;float:right;margin-left:5px}
.resp-it li a{margin-top:0!important;background-color:transparent!important;border-bottom:1px dashed #444;color:#999!important}
.resp-it li a:hover{border-bottom:1px dashed $keycolor;color:#fff!important}

.resp-it:before{content:"";border-right:20px solid transparent;border-left:20px solid transparent;border-bottom:20px solid #000;position:absolute;top:-17px;right:-webkit-calc(50% - 20px);right:calc(50% - 20px)}
.show-bt{display:block!important}

/* ======================
 * Mobile I - Simple 
 * ====================== */
.mobile .wrapper{max-width:1024px;width:100%}
.mobile #main{width:75%}
.mobile aside{width:25%;padding:0 20px 0 30px}
.mobile .article-title{margin-top:20px}
.mobile-post-outer{border-bottom:1px solid $(post.lines);padding:20px 0}
.index-thumb{display:table-cell;padding:5px;vertical-align:top;border:1px solid $(post.lines);height:100px;width:100px}
.index-thumb h7{display:block;width:100%;height:100%;background-size:cover!important;background-position:center center!important}
.mobile-post-details{display:table-cell;vertical-align:top;padding-right:20px}
.mobile-index-title a{font-family:BlogFont ,Tahoma;color:$(post.title);display:block;font-size:19px;line-height:1.2;margin-bottom:5px}
.mobile-post-snippet{font-family:BlogFont,Tahoma;color:$(post.details);font-size:14px;text-align:justify;display:block}
.mobile .item-thumbnail{width:72px;height:72px;float:right;position:relative;margin-bottom:0;margin-left:20px}
.mobile .item-title a{display:block;font-size:14px}
.mobile .item-snippet{display:none}
.mobile #LinkList101{margin-bottom:20px}
@media screen and ( max-width : 900px ) {
.mobile #Header1{float:none;display:block;width:100%;text-align:center;vertical-align:top}
.mobile #Header1_headerimg{display:block;height:auto;width:auto;margin:0 auto 20px}
.mobile #main{border:none;width:100%;float:none;padding:0 30px}
.mobile aside{width:100%;float:none;border-right:none;margin:0}
.mobile #LinkList102 a{width:100px!important;margin:0 1px 5px 5px;display:inline-block;vertical-align:top;float:none}
#PageList1{width:50px;float:right}
#LinkList100{max-width:-webkit-calc(100% - 50px);max-width:calc(100% - 50px);overflow:hidden}
.mobile #HTML100{display:block;vertical-align:top;width:100%;min-height:auto}
.res-butt1,.res-butt2{display:block}
.mobile .ma.subed ul:before{display:none}
#PageList1 ul{background-color:$(top.back);}
#PageList1 ul:before{border-bottom:10px solid $(top.back)}
.mobile #PageList1 ul{position:absolute;width:150px;text-align:center;top:60px;border-radius:3px;padding:20px;z-index:3;right:-20px;display:none}
#PageList1 li a:after{display:none}
#PageList1 li a{color:$(top.pages.color);font-size:16px;border-radius:3px;margin:0 0 5px}
#PageList1 li{display:block}
.mobile #PageList1 ul:before{content:"";border-right:10px solid transparent;border-left:10px solid transparent;position:absolute;top:-9px;right:25px}
.mobile #HeaderMid{display:block}
#LinkList101 ul{overflow:visible;position:absolute;width:200px;background-color:$(menu.back);top:100px;z-index:3;padding:20px;border-radius:3px;right:25px;display:none}
#LinkList101 ul li{width:100%;float:none;display:block;text-align:center;float:right;margin-left:5px}
#LinkList101 ul li a{margin-top:0;background:none;border-bottom:1px dashed #444;color:#999}
#LinkList101 ul:before{content:"";border-right:20px solid transparent;border-left:20px solid transparent;border-bottom:20px solid $(menu.back);position:absolute;top:-17px;right:-webkit-calc(50% - 20px);right:calc(50% - 20px)}
.ma.subed ul{position:relative!important;top:0!important;right:0!important;opacity:1!important;border-radius:0!important;width:100%!important;background-color:$(menu.link.back)!important;overflow:hidden!important;padding:0!important;display:block!important}
.mobile #LinkList102{text-align:center}
}
@media screen and ( max-width : 768px ) {
.mobile .share h7{float:none;clear:both;display:block;width:100%;margin-bottom:10px;text-align:center}
.mobile .share a,.mobile .fb-like{margin-bottom:5px}
}
@media screen and (max-width: 640px) {
.author-profile{border:1px solid $(postbody.lines)}
.mobile #LinkList104{float:none;margin:0 auto 10px auto;text-align:center;clear:both}
.mobile .c-site,.mobile .c-des{display:block!important;float:none!important;margin:0!important;text-align:center}
}
@media screen and ( max-width : 480px ) {
.mobile .c-right p:last-of-type{margin-right:0}
.mobile #HeaderTop{padding-left:20px;padding-right:20px}
}
@media screen and ( max-width : 320px ) {
.index-thumb{display:block;margin-bottom:20px;width:100%;height:150px}
.mobile-post-details{padding-right:0}
.mobile #main{padding:0 20px}
.mobile #LinkList101{margin:0 20px}
.mobile #HeaderMid{overflow:hidden;padding:20px}
}
@media screen and ( max-width : 240px ) {
.t-search.fa,.search-form{display:none}
}
.mobile .post-outer:last-of-type{padding-bottom:0;border-bottom:none}
.mobile .m-Nav{font-family:BlogFont,Tahoma;padding:8px 10px;width:50%;color:#999}
.mobile-older{float:left;text-align:left;border-right:1px solid #EEE}
.mobile .m-Nav p{font-family:BlogFont,Tahoma;font-size:16px;font-weight:700;color:#999}
.mobile .m-Nav span{font-size:13px;color:#ccc}
.mobile-newer{float:right}
.desktop-disp{width:200px;background-color:$keycolor;color:#FFF;padding:10px 0;display:block;margin:20px auto;text-align:center;font-family:BlogFont,Tahoma;font-size:19px;border-radius:3px;border-bottom:5px solid rgba(0,0,0,0.1)}
.desktop-disp:before{content:"\f108";font-family:fontawesome;font-size:40px;display:block}
/* ======================
 * Error Page
 * ====================== */
.error { text-align:center;position:absolute;top:-webkit-calc(50% - 137.5px);top:calc(50% - 137.5px);left:-webkit-calc(50% - 180px);left:calc(50% - 180px);}
.fa-bolt{background-color:$keycolor;font-size:80px!important;width:100px;height:100px;border-radius:100%;padding:10px;color:#FFF}
.error span{display:block;font-family:blogfont;font-size:40px;margin-top:20px;color:$keycolor;font-weight:700}
.error p{font-family:blogfont;font-size:22px;color:$(post.title)}
.error a{background-color:$(post.lines);color:$(post.details);font-family:blogfont;margin:10px auto;padding:10px 20px;display:block;border-radius:3px;width:170px;font-size:19px}
.error a:hover{background-color:$keycolor;color:#fff}
/* ======================
 * IE lt 10
 * ====================== */
.ie-error{padding:20px;text-align:center;display:block;margin:0 auto;width:400px;color:#eee}
.ie-error i{background:url(http://4.bp.blogspot.com/-L9eAmEHVaTQ/VjDZVqyPEaI/AAAAAAAABqY/3iWZVz1IOO4/s1600-r/Internet-ie-icon.png) no-repeat;width:90px;height:90px;display:block;margin:150px auto 10px auto;}
.ie-error b{color:#FFF}
.ie-error a{border:1px solid #fff;color:#fff;width:90px;margin:20px auto;display:block;padding:7px 0}
.ie-error a:hover{background-color:#fff;color:#377ef0;font-weight:700}


body#layout {
    padding: 215px 0 0 !important;
    width: 800px;
    margin: 0 auto !important;
    background:  url('https://lh6.googleusercontent.com/proxy/CMwwWd7C-Il3hJaKRSHFEB9_c8A-tqsFKOHNyWQEHiIljY9mc8zwio_4_cxCE85WutfJATc8eN4zapaeRNSeHXDrQ0Nf=s0-d') no-repeat top center !important;
}

