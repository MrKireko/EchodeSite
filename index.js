if ((navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') == -1)) { /*checking if user uses a non-desktop browser*/
    document.location = "desktop/index.html";
}else if ((navigator.userAgent.indexOf('Mobile') != -1)) {
    document.location = "http://mrkireko.github.io/EchodeSite/mobile/";
}else{
    document.location = "desktop/index.html";
}