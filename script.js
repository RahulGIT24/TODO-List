add.addEventListener("click", () => {
  if (title.value == "" || desc.value == "") {
    alert("Title or description can't be empty");
  } else {
    if (localStorage.getItem("itemsJSON") == null) {
      itemsJSONArray = [];
      itemsJSONArray.push([title.value, desc.value]);
      localStorage.setItem("itemsJSON", JSON.stringify(itemsJSONArray));
      localStorage.getItem("itemsJSON");
    } else {
      itemsJSONArray = localStorage.getItem("itemsJSON");
      itemsJSONArray = JSON.parse(itemsJSONArray);
      itemsJSONArray.push([title.value, desc.value]);
      localStorage.setItem("itemsJSON", JSON.stringify(itemsJSONArray));
    }

    let str = "";
    itemsJSONArray.forEach((element, index) => {
      tableBody.innerHTML = `
    <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td>
                <button type="button" class="btn btn-sm btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>`;
    });
  }
});
