$(document).ready(function(){
var $grid = $(".grid").masonry({
 itemSelector: ".grid-item",
 initLayout: 1
});
$grid.on("layoutComplete", function(o, r) {
 console.log(r.length)
}), $grid.masonry({

}), $grid.imagesLoaded().progress(function() {
 $grid.masonry("layout")
});
});

