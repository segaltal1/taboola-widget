'use strict';

function onInit() {
    renderSkeletonCards();

    getWidgets()
        .then(renderWidgets)
        .catch(renderError)
        .finally(removeSkeletonCards)
}

function renderWidgets(data) {
    const widgets = data.list;
    if (!widgets || !widgets.length) {
        renderError();
        return;
    }

    const strHTMLs = widgets.map(renderWidget)
    const elContainer = document.querySelector('.widget-container')
    elContainer.innerHTML = strHTMLs.join('')
}

function renderWidget(widget) {
    return `
             <article class="widget" data-id=${widget.id} 
                    onclick="${getWidgetAction('sponsored', widget.url)}">   
                    <img 
                        src="${widget.thumbnail[0].url}" 
                        onerror="this.src = './assets/img/default.jpg'" 
                    />
                <p class="name">${widget.name}</p>
                <small class="branding">${widget.branding}</small>
            </article>
            `
}

function renderError() {
    document.querySelector('.error-container').hidden = false;
}

function renderSkeletonCards() {
    const elContainer = document.querySelector('.widget-container')
    const cards = Array.from({length: 6},
        () => `<div class="card-skeleton widget"></div>`)
    elContainer.innerHTML = cards.join('')
}

function removeSkeletonCards() {
    const elSkeletonCards = document.querySelectorAll('.card-skeleton')
    if (!elSkeletonCards) return;
    elSkeletonCards.forEach(elCard => elCard.remove())
}


//widgetType can be 'organic' or 'sponsored'
function getWidgetAction(widgetType, url) {
    const actionMap = {
        organic: `window.location.href='${url}'`,
        sponsored: `window.open('${url}', '_blank')`
    }
    return actionMap[widgetType] || '';
}

if (typeof module !== 'undefined') {
    module.exports = {
        getWidgetAction,
        renderError,
        renderWidgets,
        renderSkeletonCards
    }
}

