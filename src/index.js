import "./styles.css";

const onClickAdd = () => {
  const text = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";

  const div = document.createElement("div");
  div.className = "list-low";

  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン
  const donebtn = document.createElement("button");
  donebtn.innerText = "done";
  donebtn.addEventListener("click", () => {
    deleteBtn(donebtn.parentNode);

    // 追加要素
    const addTarget = donebtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    const doneLi = document.createElement("li");
    doneLi.innerText = text;

    const backBtn = document.createElement("button");
    backBtn.innerText = "back";

    addTarget.appendChild(doneLi);
    addTarget.appendChild(backBtn);

    document.getElementById("done-list").appendChild(addTarget);
  });

  // 削除ボタン
  const delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.addEventListener("click", () => {
    deleteBtn(delbtn.parentNode);
  });

  div.appendChild(li);
  div.appendChild(donebtn);
  div.appendChild(delbtn);

  document.getElementById("incomp-list").appendChild(div);
};

// 削除
const deleteBtn = (target) => {
  document.getElementById("incomp-list").removeChild(target);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
