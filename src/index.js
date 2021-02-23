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
    console.log("done");
  });

  // 削除ボタン
  const delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.addEventListener("click", () => {
    console.log("del");
  });

  div.appendChild(li);
  div.appendChild(donebtn);
  div.appendChild(delbtn);

  document.getElementById("incomp-list").appendChild(div);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
