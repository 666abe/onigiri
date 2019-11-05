// グローバル変数
var pictNo=1;

// 前に進むボタン
function fwd() {
  pictNo++;
  document.getElementById('no').innerHTML='No.'+pictNo;
  document.getElementById('pict').src='../images/no'+pictNo+'.jpg';

  if(pictNo===4){
    document.getElementById('no').className='no2';
    document.getElementById('fwd_btn').disabled='disabled';
  } else if (pictNo===2) {
    document.getElementById('rev_btn').disabled=false;
  }
}

// 後ろに進むボタン
function rev() {
  pictNo--;
  document.getElementById('no').innerHTML='No.'+pictNo;
  document.getElementById('pict').src='../images/no'+pictNo+'.jpg';

  if (pictNo===1) {
    document.getElementById('rev_btn').disabled='disabled';
  } else if (pictNo===3) {
    document.getElementById('fwd_btn').disabled=false;
    document.getElementById('no').className='no1';
  }
}
