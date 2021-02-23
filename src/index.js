import "./styles.css";

// 追加ボタン
const onClickAdd = () => {
  const inputText = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";

  createList(inputText);
};

// 要素の削除
const deleteBtn = (target, id) => {
  document.getElementById(id).removeChild(target);
};

// 未完了リストに追加する関数
const createList = (text) => {
  const div = document.createElement("div");
  div.className = "list-low";

  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン
  const donebtn = document.createElement("button");
  donebtn.innerText = "done";
  donebtn.addEventListener("click", () => {
    deleteBtn(donebtn.parentNode, "incomp-list");

    // 追加要素
    const addTarget = donebtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    const doneLi = document.createElement("li");
    doneLi.innerText = text;

    const backBtn = document.createElement("button");
    backBtn.innerText = "back";
    backBtn.addEventListener("click", () => {
      deleteBtn(backBtn.parentNode, "done-list");

      const text = backBtn.parentNode.firstElementChild.innerText;
      createList(text);
    });

    addTarget.appendChild(doneLi);
    addTarget.appendChild(backBtn);

    document.getElementById("done-list").appendChild(addTarget);
  });

  // 削除ボタン
  const delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.addEventListener("click", () => {
    deleteBtn(delbtn.parentNode, "incomp-list");
  });

  div.appendChild(li);
  div.appendChild(donebtn);
  div.appendChild(delbtn);

  document.getElementById("incomp-list").appendChild(div);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
