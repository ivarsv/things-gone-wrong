"use strict";!function(a){var b=function(a){return a*Math.PI/180},c=0,d=(a(".cube"),5);setInterval(function(){c+=d,c%90==0&&(c=0),a(a(".cube").get().reverse()).each(function(d,e){var f=a(e),g=d%2==0?1:-1,h=0,i=0;if(0!==c){var j=f.outerWidth();h=-Math[-1===g?"cos":"sin"](b(c))*j,-1==g&&(h+=j);var k=Math[45>=c?"sin":"cos"](b(c))*j+Math[c>=45?"sin":"cos"](b(c))*j-j;i=d*k}var l=c*g;f.css({transform:"rotate("+l+"deg)","transform-origin":1==g?"100% 100%":"0% 100%","margin-left":h+"px",bottom:i+"px"})})},50);var e=a(".cube-container"),f=a(".background"),g=a("fb\\:share-button");a(".colorpicker").ColorPickerSliders({color:window.location.hash||"#333333",flat:!0,sliders:!1,swatches:!1,hsvpanel:!0,onchange:function(a,b){var c="#"+b.tiny.toHex();if(e.css("border-color",c),f.css("background-color",c),window.location.hash=c,g.attr("href",window.location.href),0!==g.find("[src]").size()){var a=g.find("[src]"),d=encodeURIComponent(window.location.href);a.attr("src",a.attr("src").replace(/href=(.[^&]*)/,"href="+d))}}})}(jQuery);