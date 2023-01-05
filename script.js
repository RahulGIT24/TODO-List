function update() {
  if (localStorage.getItem("items") == null) {
    itemsJSONArray = [];
    localStorage.setItem("items", JSON.stringify(itemsJSONArray));
  } else {
    itemsJSONArrayStr = localStorage.getItem("items");
    itemsJSONArray = JSON.parse(itemsJSONArrayStr);
  }
  // Populate the table
  let str = "";
  itemsJSONArray.forEach((element, index) => {
    str += `
  <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td>
                <button type="button" class="btn btn-sm btn-outline-danger" onclick=deleted(${index})>
                  Delete
                </button>
              </td>
            </tr>
  `;
  });
  tableBody.innerHTML = str;
}

function getAndUpdate() {
  console.log("Updating");
  if (title.value == "" || desc.value == "") {
    alert("Title or Description can't be empty");
  } else {
    if (localStorage.getItem("items") == null) {
      itemsJSONArray = [];
      itemsJSONArray.push([title.value, desc.value]);
      localStorage.setItem("items", JSON.stringify(itemsJSONArray));
    } else {
      itemsJSONArrayStr = localStorage.getItem("items");
      itemsJSONArray = JSON.parse(itemsJSONArrayStr);
      itemsJSONArray.push([title.value, desc.value]);
      localStorage.setItem("items", JSON.stringify(itemsJSONArray));
    }
  }
  update();
}

function TODOclear() {
  console.log("Clearing...");
  localStorage.clear();
  update();
}

function deleted(itemIndex) {
  console.log("Deleting");
  itemsJSONArrayStr = localStorage.getItem("items");
  itemsJSONArray = JSON.parse(itemsJSONArrayStr);
  itemsJSONArray.splice(itemIndex, 1);
  localStorage.setItem("items", JSON.stringify(itemsJSONArray));
  update();
}

add.addEventListener("click", () => {
  getAndUpdate();
});

update();
