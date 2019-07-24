let table = document.getElementById("table");
console.log(table);

// 產生幾行幾列
const ROW = 5;
const MIN = 2;
const MAX = 100; //最多到
let numbers = [];

for (let n = MIN; n <= MAX; n++) {
  let flag = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = false;
    }
  }
  if (flag) {
    numbers.push(n);
  }
}
// 放入表格
numbers.forEach((v, i) => {
  let td = document.createElement('td');

  if (!(i % ROW)) {
    tr = document.createElement('tr');
    document.getElementById('table').appendChild(tr);
  }
  td.appendChild(document.createTextNode(v));
  tr.appendChild(td);
});

