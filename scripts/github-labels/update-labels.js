const agileLabels = [
    {
      "name": "0-bug",
      "description": "Something isn't working",
      "color": "e00463"
    },
    {
      "name": "1-Must",
      "description": "Must be included",
      "color": "6f55c6"
    },
    {
      "name": "2-Should",
      "description": "Should be included",
      "color": "f298e9"
    },
    {
      "name": "3-Could",
      "description": "Could be included",
      "color": "e0c2ff"
    },
    {
      "name": "documentation",
      "description": "Improvements or additions to documentation",
      "color": "0075ca"
    },
    {
      "name": "E-0 Installation",
      "description": "Installation Epic",
      "color": "46af0e"
    },
    {
      "name": "E-1 Configuration",
      "description": "Configuration Epic",
      "color": "46af0e"
    },
    {
      "name": "E-2 Main",
      "description": "Main Epic",
      "color": "46af0e"
    },
    {
      "name": "E-9 Publishing",
      "description": "Publishing Epic",
      "color": "46af0e"
    },
    {
      "name": "Feature",
      "description": "Feature",
      "color": "9fea2e"
    },
    {
      "name": "Task",
      "description": "Needed task",
      "color": "afffdb"
    },
    {
      "name": "zzz-Wont",
      "description": "Wont be included",
      "color": "eeeeee"
    }
  ];

  agileLabels.forEach(label => addOrUpdateLabel(label));

  function updateLabel (label) {
    var updated = false;
    [].slice.call(document.querySelectorAll(".labels-list-item"))
    .forEach(function(element) {
      if (existsLabel(element, label)) {
        element.querySelector('.js-edit-label').click()
        setLabelData(label);
        element.querySelector('.js-edit-label-cancel ~ .btn-primary').click()
        updated = true
      }
    })
    return updated
  }

function existsLabel(element, label) {
  return element.querySelector('.label-link').textContent.trim() === label.name;
}

function addNewLabel (label) {
  setLabelData(label);
  document.querySelector('.js-details-target ~ .btn-primary').disabled = false
  document.querySelector('.js-details-target ~ .btn-primary').click()
}

function setLabelData(label) {
  document.querySelector('.js-new-label-name-input').value = label.name;
  document.querySelector('.js-new-label-description-input').value = label.description;
  document.querySelector('.js-new-label-color-input').value = '#' + label.color;
}

  function addOrUpdateLabel (label) {
    if (!updateLabel(label)) addNewLabel(label)
  }
