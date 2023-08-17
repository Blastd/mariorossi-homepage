document.querySelector('#mobileMenu').addEventListener('click', function () {
        let isOpen = document.querySelector('#headerLinkList').classList.toggle('open'); // True if open, false otherwise
        if (isOpen) {
            document.querySelector('#mobileMenu>i').classList.remove('gg-menu');
            document.querySelector('#mobileMenu>i').classList.add('gg-close');
        } else {
            document.querySelector('#mobileMenu>i').classList.remove('gg-close');
            document.querySelector('#mobileMenu>i').classList.add('gg-menu');
        }
    });