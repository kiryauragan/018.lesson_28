function generateList(array) {
    const listContainer = document.getElementById("listBox");
    const ul = document.createElement("ul");
    listContainer.appendChild(ul);
  
    for (let i = 0; i < array.length; i++) {
      const li = document.createElement("li");
      const currentItem = array[i];
  
      if (Array.isArray(currentItem)) {
        li.appendChild(generateList(currentItem));
      } else {
        li.innerText = currentItem;
      }
  
      ul.appendChild(li);
    }
  
    return ul;
  }
  
  const array1 = [1, 2, 3];
  const array2 = [1, 2, [1.1, 1.2, 1.3], 3];
  
  generateList(array1);
  generateList(array2);