NodeList.prototype.find = Array.prototype.find;
NodeList.prototype.findIndex = Array.prototype.findIndex;
NodeList.prototype.forEach = Array.prototype.forEach;

const carousels = document.querySelectorAll('.getCarouselLRPhoto');
carousels.forEach(function(carousel) {
    var expandButtons = carousel.querySelectorAll('#expand-btn');
    var collapseButtons = carousel.querySelectorAll('#collapse-btn');

    var text = carousel.querySelectorAll('#text');

    function toggleButton(e) {
        var index;
        if (!expandButtons.find((b) => b === e.target)) {
            index = collapseButtons.findIndex((b) => b === e.target);
        } else {
            index = expandButtons.findIndex((b) => b === e.target);
        }

        if (index === -1) {
            // if the element is an svg go to the parent element
            index = expandButtons.findIndex((b) => b === e.target.parentElement);
            if (index === -1) {
                index = collapseButtons.findIndex((b) => b === e.target.parentElement);
            }
        }
        text.forEach((el, i) => {
            const moreText = text[i].querySelector('p') ? .innerHTML.length || 0;
            if (moreText > 0) {
                expandButtons[i] ? .classList.remove('hidden');
            }
            collapseButtons[i] ? .classList.add('hidden');
            text[i] ? .classList.add('hidden');
        });
        if (text[index] ? .classList.contains('hidden')) {
            expandButtons[index] ? .classList.add('hidden');
            collapseButtons[index] ? .classList.remove('hidden');
            text[index] ? .classList.remove('hidden');

            text.forEach((el, i) => {
                const elParagraph = el.querySelector('p') ? .innerHTML;

                if (elParagraph === text[index] ? .querySelector('p') ? .innerHTML && i !== index) {
                    el ? .classList.remove('hidden');

                    const parentElement = el.parentElement;
                    const expandBtn = parentElement ? .querySelector('#expand-btn');
                    const collapseBtn = parentElement ? .querySelector('#collapse-btn');

                    expandBtn ? .classList.add('hidden');
                    collapseBtn ? .classList.remove('hidden');
                }
            })
        }
    }

    function collapse() {
        text.forEach((el, i) => {
            const moreText = text[i].querySelector('p') ? .innerHTML.length || 0;
            if (moreText > 0) {
                expandButtons[i] ? .classList.remove('hidden');
            }
            collapseButtons[i] ? .classList.add('hidden');
            text[i] ? .classList.add('hidden');
        });
    }

    expandButtons.forEach((b) => {
        b.addEventListener('click', toggleButton);
    });

    collapseButtons.forEach((b) => {
        b.addEventListener('click', collapse);
    });

})