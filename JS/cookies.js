$(document).ready(function() {
    var sName = "cookiesok";
    $("#close-cookie-warn").click(function(){
        var oExpire = new Date();
        oExpire.setTime((new Date()).getTime() + 3600000*24*365);
        document.cookie = sName + "=1;expires=" + oExpire;
        $("#cookie-warn").slideUp(500);

    });
 
    var sStr = '; '+ document.cookie +';';
    setTimeout(function(){
        var nIndex = sStr.indexOf('; '+ escape(sName) +'=');
        if (nIndex === -1) {
            $("#cookie-warn").slideDown();
        }
    },1000)

});