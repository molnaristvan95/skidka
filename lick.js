console.clear();

var ob = {};

function check() {
  var x = document.getElementById('ins');
  if (x.value == 'where') {
    document.getElementById('show').style.display = 'flex';
  }
  if (x.value.includes('@') && x.value.length > 14) {
    document.getElementById('sendMe').style.opacity = 1;
    document.getElementById('sendMe').style.background = '#0f0';
    document.getElementById('sendMe').addEventListener('click', function() {
      window.alert('Ошибка!\nПовторіть попитку!');
      return window.location.reload();
    });
  } else {
    document.getElementById('sendMe').style.opacity = 0.5;
    document.getElementById('sendMe').style.background = '#fff';
  }
}
window.setInterval(check, 1000);
/*
var fig = document.getElementsByTagName('figure'),
    len = fig.length,
    int = [],
    op = [0,0,0,0,0,0];

for (var x = 0; x < len; x++) {
  fig[x].style.opacity = 0;
}

function up(el, opp, inter) {
  if (opp > 1) {
    window.clearInterval(inter);
  } else {
    op[opp] += 0.003;
  }
  el.style.opacity = op[opp];
}

int[0] = window.setInterval(function(){
  up(fig[0], 0, int[0]);
}, 1);

int[1] = window.setInterval(function(){
  up(fig[1], 1, int[1]);
}, 20);

int[2] = window.setInterval(function(){
  up(fig[2], 2, int[2]);
}, 1);
*/







