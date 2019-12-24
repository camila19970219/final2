function precarica(img) {
    $(img).each(function() {
        $('<img/>')[0].src = this;
    });
}
precarica([
    './pic/taiwan map.png',

]);

/*******jQuery for external title*********/

jQuery(document).ready(function() {

    $('.North').mouseout(function() {
            $("#map").attr('src', './pic/taiwan.png');
        }),
        $('.North').mouseover(function() {
            $("#map").attr('src', './pic/north.png');
        });
    $('.center').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('.center').mouseover(function() {
            $("#map").attr('src', 'pic/center.png');
        });
    $('.south').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('.south').mouseover(function() {
            $("#map").attr('src', 'pic/south.png');
        });
    $('.east').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('.east').mouseover(function() {
            $("#map").attr('src', 'pic/east.png');
        });



    $('#Changhua').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Changhua').mouseover(function() {
            $("#map").attr('src', 'pic/Changhua.png');
        });

    $('#taipei').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#taipei').mouseover(function() {
            $("#map").attr('src', 'pic/taipei.png');
        });
    $('#keelong').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#keelong').mouseover(function() {
            $("#map").attr('src', 'pic/keelong.png');
        });
    $('#taipei_2').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#taipei_2').mouseover(function() {
            $("#map").attr('src', 'pic/taipei_2.png');
        });
    $('#Taoyuan').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Taoyuan').mouseover(function() {
            $("#map").attr('src', 'pic/Taoyuan.png');
        });


    $('#Hsinchu').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Hsinchu').mouseover(function() {
            $("#map").attr('src', 'pic/Hsinchu.png');
        });

    $('#Miaoli').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Miaoli').mouseover(function() {
            $("#map").attr('src', 'pic/Miaoli.png');
        });

    $('#Taichung').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Taichung').mouseover(function() {
            $("#map").attr('src', 'pic/Taichung.png');
        });
    // 11
    $('#Nantou').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Nantou').mouseover(function() {
            $("#map").attr('src', 'pic/Nantou.png');
        });
    $('#Yunlin').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Yunlin').mouseover(function() {
            $("#map").attr('src', 'pic/Yunlin.png');
        });
    $('#Chiayi').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Chiayi').mouseover(function() {
            $("#map").attr('src', 'pic/Chiayi.png');
        });
    $('#Tainan').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Tainan').mouseover(function() {
            $("#map").attr('src', 'pic/Tainan.png');
        });
    $('#Kaohsiung').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Kaohsiung').mouseover(function() {
            $("#map").attr('src', 'pic/Kaohsiung.png');
        });
    $('#Pingtung').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Pingtung').mouseover(function() {
            $("#map").attr('src', 'pic/Pingtung.png');
        });
    $('#Hualien').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Hualien').mouseover(function() {
            $("#map").attr('src', 'pic/Hualien.png');
        });
    $('#Taitung').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Taitung').mouseover(function() {
            $("#map").attr('src', 'pic/Taitung.png');
        });
    $('#Yilan').mouseout(function() {
            $("#map").attr('src', 'pic/taiwan.png');
        }),
        $('#Yilan').mouseover(function() {
            $("#map").attr('src', 'pic/Yilan.png');
            $("#Yilan").attr('Yilan', 'pic/taiwang');
        });


    //mouseover text

});

// $('.tooltip').tooltip({
//     tooltipClass: "pictooltip"
// });

// $(document).ready(function() {
//     $('.tooltip').tooltipster({

//     });
//     $('.tooltip').tooltipster({
//         tooltipClass: "tooltip"
//     });
// });


// $(function() {
//     $(document).tooltip({
//         position: {
//             my: "center bottom-20",
//             at: "center top",
//             using: function(position, feedback) {
//                 $(this).css(position);
//                 $("<div>")
//                     .addClass("arrow")
//                     .addClass(feedback.vertical)
//                     .addClass(feedback.horizontal)
//                     .appendTo(this);
//             }
//         },
//         tooltipClass: "tooltip"
//     });
// });