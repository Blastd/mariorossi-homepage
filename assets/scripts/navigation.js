/**
 * Sets navigation to the current selected URL
 * @param {Element} obj 
 */
function navigateTo (obj) {
    let pagename = obj.getAttribute('href');
    document.querySelector('#mobileMenu').click();
    if (!pagename || pagename.length == 0) return;
    window.currentPage = null;
    window.currentPage = pagename.replace('.html', '').replace('subpages/', '');
    let params = new URLSearchParams(window.location.search);
    params.set("page", window.currentPage);
    let toSet = {
        Title: 'Mario Rossi',
        Url: window.location.pathname + '?' + params.toString()
    };
    window.history.replaceState(toSet, toSet.Title, toSet.Url); 
}

/**
 * Gets the required height for the page to be rendered
 * @param {Element} frame iframe element
 */
function onloadedpage (frame) {
    var doc = frame.contentDocument || frame.contentWindow.document;
    var docBody = doc.body;
    var docElement = doc.documentElement;
    var height = Math.max( docBody.scrollHeight, docBody.offsetHeight, 
        docElement.clientHeight, docElement.scrollHeight, docElement.offsetHeight );
    //frame.setAttribute ('required-height', height + 'px');
    frame.style.height = height + 'px';
}