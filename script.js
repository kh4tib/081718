
  window.addEventListener("scroll", function(e) {
    var oval = document.getElementsByClassName('oval')[0];
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    if (scrollPercentage >= 0.99) {
        oval.style.transform = "scale(1)";
        
    } else {
        oval.style.transform = "scale(3)";
    }
    
});
