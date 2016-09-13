
$(function () {
    //$(spook_group($(".myCols .spook-item"), 3)[2][0]).css({ "background": "green" });
    spook.heights.equal($(spook_group($(".myCols .spook-item"), 3)[2]));
});

function hsxGroup(items, n) {
    var itemsTotal = items.length;
    var groups = [];
    var group;
    for (var i = 0; i < itemsTotal; i++) {
        if (i % n == 0) {
            groups.push([]);
            group = groups[groups.length - 1];
        }
        group.push(items[i]);
    }
    return groups;
}

function equalHeights(els) {
    //
    els.height(maxHeight(els));
    //
    function maxHeight(els) {
        var elsHeights = [];
        els.each(function () {
            elsHeights.push($(this).height());
        });
        return Math.max.apply(null, elsHeights);
    }
}

function spook_group(items, n) {
    var itemsTotal = items.length;
    var groups = [];
    var group;
    for (var i = 0; i < itemsTotal; i++) {
        if (i % n == 0) {
            groups.push([]);
            group = groups[groups.length - 1];
        }
        group.push(items[i]);
    }
    return groups;
}

function spook_columns(module) {

    var cols = module.attr("spook-columns").split("");
    var profile = {
        xs: cols[0],
        sm: cols[1],
        md: cols[2],
        lg: cols[3]
    };
    var items = $(".spook-item", module);

    hsResponsive.onWindow(function () {
        var n = profile[hsResponsive.windowSize()];
        var groups = spook_group(items, n);
        groups.forEach(function (m, n, a) {
            //var items = $("");
            m.forEach(function (mm, nn, aa) {
                items.add($(mm));
            });

            equalHeights(items);
        });
    });
}

var spook = {
    // onScreen
    // screenSize
    // columns
    // sticky
    // tabs
    // pop up
    // image
    //  - size
    // menu
    // hover
    // text
    //  - shorten
    // heights
    heights: {
        equal: function (els) {
            //
            els.css("height", "auto");
            els.height(maxHeight(els));
            //
            function maxHeight(els) {
                var elsHeights = [];
                els.each(function () {
                    elsHeights.push($(this).height());
                });
                return Math.max.apply(null, elsHeights);
            }
        },
    },
}