window.onload = function () {
    $(function () {
        var $arr = [];
        for (var i = 0; i < $("li[class]").length; i++) {
            $arr[i] = $("li[class]")[i].className
        }
        var l = $arr.length;
        var b_click;
        $("#next").on("click", function () {
            b_click = true;
            change()

        })
        $("#prev").on("click", function () {

            b_click = false;
            change();
        })
        function change() {
            if (b_click) {
                var $arr1 = $arr.slice(l - 1, l);
                var $arr2 = $arr.slice(0, l - 1);
                $arr = $arr1.concat($arr2);
            } else {
                var $arr1 = $arr.slice(0, 1);
                var $arr2 = $arr.slice(1, l);
                $arr = $arr2.concat($arr1);
            }
            $("li[class]").each(function (index, ele) {
                $(ele).removeClass().addClass($arr[index])
            })
        }
    })
}
