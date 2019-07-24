// 產生城市
let options = [
  { text: '臺北市', value: 'A' },
  { text: '臺中市', value: 'B' },
  { text: '基隆市', value: 'C' },
  { text: '臺南市', value: 'D' },
  { text: '高雄市', value: 'E' },
  { text: '新北市', value: 'F' },
  { text: '宜蘭縣', value: 'G' },
  { text: '桃園縣', value: 'H' },
  { text: '新竹縣', value: 'J' },
  { text: '苗栗縣', value: 'K' },
  { text: '南投縣', value: 'M' },
  { text: '彰化縣', value: 'N' },
  { text: '雲林縣', value: 'P' },
  { text: '嘉義縣', value: 'Q' },
  { text: '屏東縣', value: 'T' },
  { text: '花蓮縣', value: 'U' },
  { text: '臺東縣', value: 'V' },
  { text: '澎湖縣', value: 'X' },
  { text: '金門縣', value: 'W' },
  { text: '連江縣', value: 'Z' },
  { text: '嘉義市', value: 'I' },
  { text: '新竹市', value: 'O' }
];

let area = document.getElementById('area');

for (let i = 0, l = options.length; i < l; i++) {
  let option = options[i];
  area.options.add(new Option(option.text, option.value, option.num));
}

// 點擊產生後
let result = document.getElementById('result').innerHTML;
let gender = document.getElementsByName('gender');

function creaetTWIDByAll() {
  let ID_1 = "";
  let ID_2 = "";
  let ID_3_10 = "";

  // 判斷首字母
  if (area.value == "") {
    let anyArea = parseInt(Math.random() * 22 + 1);
    ID_1 = area.options[anyArea].value;
  } else {
    ID_1 = area.value;
  }
  // 判斷男女
  if (gender[0].checked) {
    ID_2 = gender[0].value;
  } else if (gender[1].checked) {
    ID_2 = gender[1].value;
  } else {
    let anyGender = parseInt(Math.random() * 2);
    ID_2 = gender[anyGender].value;
  }
  //八碼數字
  // 英文轉成數字
  let letters = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 27, 28, 29, 30, 32, 33, 34, 35]
  let ID_1Index = options.findIndex(data => data.value === ID_1);
  n1 = letters[ID_1Index];
  // 英文的個數*9加上10位數
  n2 = String(n1).substr(1, 1);
  n1 = String(n1).substr(0, 1) + "0";
  sum1 = parseInt(n1) + parseInt(n2) * 9;

  for (let i = 0; i <= 500; i++) {
    ID_3_10 = parseInt(Math.random() * 999999999);
    d1 = parseInt(String(ID_3_10).substr(0, 1));
    d2 = parseInt(String(ID_3_10).substr(1, 1));
    d3 = parseInt(String(ID_3_10).substr(2, 1));
    d4 = parseInt(String(ID_3_10).substr(3, 1));
    d5 = parseInt(String(ID_3_10).substr(4, 1));
    d6 = parseInt(String(ID_3_10).substr(5, 1));
    d7 = parseInt(String(ID_3_10).substr(6, 1));
    d8 = parseInt(String(ID_3_10).substr(7, 1));

    total = sum1 + 8 * ID_2 + 7 * d1 + 6 * d2 + 5 * d3 + 4 * d4 + 3 * d5 + 2 * d6 + 1 * d7 + d8;
    if (total % 10 == 0) {
      result = ID_1 + ID_2 + ID_3_10;
      break;
    }
  }
  

  var text = "";
  var i = 0;
  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 5);



  return document.getElementById('result').innerHTML = result;;
}
