/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

export function addToList(state, cssClass) {
  const stateNode = document.createTextNode(JSON.stringify(state));

  const item = document.createElement('li');
  if (cssClass) {
    item.classList.add(cssClass);
  }
  item.appendChild(stateNode);

  const list = document.getElementById('list');
  list.appendChild(item);
}
