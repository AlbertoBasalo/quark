var currentLabels = [];
currentLabels.slice.call(getLabelElements())
    .forEach(element => getDeleteButton(element).click());

function getDeleteButton(element) {
    return element.querySelector('.pr-0');
}

function getLabelElements() {
    return document.querySelectorAll(".labels-list-item");
}
