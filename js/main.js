/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */

$(document).ready(function() {
    Logic();

    let isLoadedSection2 = false;

    function showSection2Text () {
        if (isLoadedSection2) return;

        isLoadedSection2 = true;

        new Typed("#section02 .intro_kr", {
            strings: ["좋은 화자가 되려면 먼저 좋은 청자가 되어야 합니다."],
            typeSpeed: 80,
            loop: false,
        });
    }

    let isLoadedSection5 = false;

    function showSection5Text () {
        if (isLoadedSection5) return;

        isLoadedSection5 = true;

        new Typed("#section05 .up", {
            strings: ["THANK YOU FOR WATCHING"],
            typeSpeed: 80,
            loop: false,
        });

        new Typed("#section05 .down", {
            strings: ["PLEASE CONTACT ME"],
            startDelay: 2600,
            typeSpeed: 80,
            loop: false,
        });
    }

    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05'],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05'],

        afterLoad: function(anchorLink, index){

            if(index == 1) {// 01 = true

            } else { // 01 = false

            }
            if(index == 2){// 02 = true
                showSection2Text();
            } else {//02 = false

            }
            if(index == 3){// 03 = true

            } else {//02 = false

            }
            if(index == 4){// 04 = true

            } else {//02 = false

            }
            if(index == 5){// 05 = true
                showSection5Text();
            } else {//02 = false

            }

        },

        onLeave: function(index, destination, direction){
            var leavingSection = this;

            if(index == 1 && direction =='down'){//01 - >02

            }

            if(index == 2 && direction == 'down'){//02 -> 03

            } else if(index == 2 && direction == 'up'){//02 -> 01

            }

            if(index == 3 && direction == 'down'){//03 -> 04

            } else if(index == 3 && direction == 'up'){//03 -> 02

            }
            if(index == 4 && direction == 'down'){//04 -> 05
                
            } else if(index == 4 && direction == 'up'){//04 -> 03

            }
            if(index == 5 && direction == 'up'){//05 -> 04
                
            }

        }
    });

    new Typed("#section01 .up", {
        strings: ["GOOD LISTENER,"],
        typeSpeed: 80,
        loop: false,
    });

    new Typed("#section01 .down", {
        strings: ["GOOD COMMUNICATOR"],
        startDelay: 1700,
        typeSpeed: 80,
        loop: false,
    });

    new Typed("#section01 .subtitle", {
        strings: ["NEW WAVE TO THE GOOD DESIGN"],
        startDelay: 3700,
        typeSpeed: 40,
        loop: false,
    });


    
});


