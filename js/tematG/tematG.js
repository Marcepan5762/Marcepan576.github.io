var log = (function () {
    try {

        return console.log;
    }
    catch (e) {

        return function () {};
    }
}());


// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}


document.addEventListener('DOMContentLoaded', function () {

    var parent = document.querySelector('.interacitveBlock');

    var children = Array.prototype.slice.call(parent.querySelectorAll('div.slide'));

   

    log('children', children);

    parent.addEventListener('click', function (e) { 

        var el = e.target;

        var match = el.matches('.slide-navigation');

        if (match) {

            const id = el.getAttribute('id');

            var found = children.findIndex(function (el) {

                return el.classList.contains('active');
            })

            //log('found', found)

            var next = found;

            if (id === 'slideL') {

                //log('left')

                next -= 1;

                if (next < 0) {

                    next = children.length - 1
                }
            }

            if (id === 'slideR') {

                //log('right')

                next += 1;

                if (next >= (children.length)) {

                    next = 0;
                }
            }

            //log('next', next)

            children[found].classList.remove('active')

            children[next].classList.add('active')
        }
    });


    log('parent: ', parent)

});

