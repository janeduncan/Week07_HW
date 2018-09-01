const PubSub = require('../helpers/pub_sub');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Directors:directors-ready', (event) => {
    this.populateSelect(event.detail);
  });

  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
    console.log(selectedIndex);
  });
};

SelectView.prototype.populateSelect = function (directors) {
  directors.forEach((director, index) => {
    const option = this.createDirectorOption(director, index);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createDirectorOption = function (director, index) {
  const option = document.createElement('option');
  option.textContent = director;
  option.value = index;
  return option;
};

module.exports = SelectView;
