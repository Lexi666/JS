function start() {
  let cardList = Array.prototype.slice.call(document.querySelectorAll('td.card_1'));
  let cardList_length = cardList.length;
  let highlight_td_index = 0;

  let cardList2 = Array.prototype.slice.call(document.querySelectorAll('td.card_2'));
  let cardList2_length = cardList2.length;
  let highlight2_td_index = 11;

  let run = setInterval(function () {
    let highlight_td = document.querySelector('td.card_1.highlight');

    if (cardList.indexOf(highlight_td) == cardList_length - 1) {
      let highlight2_td = document.querySelector('td.card_2.star');
      
      if (highlight2_td_index == 19) {
        stopRun();
        console.log('stop')
      }
      else {
        highlight2_td_index--;
      }
      highlight2_td.classList.remove('highlight');

      document.querySelectorAll('td.card_2')[highlight2_td_index].classList.add('highlight');
    }
    else {
      highlight_td_index++;
    }

    highlight_td.classList.remove('highlight');
    document.querySelectorAll('td.card_1')[highlight_td_index].classList.add('highlight');
  }, 300);

  function stopRun() {
    clearInterval(run);
  }
}