function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function activateTab(tabName) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        if (button.getAttribute('data-package') === tabName) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    const tabContents = document.querySelectorAll('.tab-package');
    tabContents.forEach(tab => {
        if (tab.id === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

const tabToActivate = getQueryParam('tab');

if (tabToActivate) {
    activateTab(tabToActivate);
}