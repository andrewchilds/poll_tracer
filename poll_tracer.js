/**
 * Poll Tracer
 * http://github.com/andrewchilds/poll_tracer
 */
(function() {

  var div = document.createElement('div');
  div.innerHTML = '' +
    '<div id="bugger" style="width: 100%; position: absolute; background: #000; background: rgba(0, 0, 0, 0.9); color: #fff; font: bold 12px/14px monospace; top: 0; left: 0; z-index: 999">' +
    '  <a href="#" id="bugger_toggle" style="color: #999; font: bold 12px/12px monospace; float: right; padding: 20px; text-decoration: none;">Hide</a>' +
    '  <h1 style="color: #fff; font: bold 16px/18px monospace; margin: 20px 0 8px 20px;">Poll Tracer</h1>' +
    '  <ol id="bugger_list" style="margin: 8px 20px 20px; padding: 0 0 0 40px;"></ol>' +
    '</div>';
  document.body.appendChild(div);

  var bugger_toggle = document.getElementById('bugger_toggle');
  bugger_toggle.onclick = function() {
    if (bugger_toggle.innerHTML === 'Hide') {
      bugger_list.style.display = 'none';
      bugger_toggle.innerHTML = 'Show';
    }
    else {
      bugger_list.style.display = 'block';
      bugger_toggle.innerHTML = 'Hide';
    }
  };

  var bugger_list = document.getElementById('bugger_list');
  iterate(['setTimeout', 'setInterval'], function(f) {
    window[f] = function(fn, delay) {
      var html = bugger_list.innerHTML + '<li>' + f + '() called at ' + new Date().getTime() + ': ' + fn + ', ' + delay + '</li>';
      bugger_list.innerHTML = html;
    }
  });

  function iterate(a, fn) {
    for (var i = 0, len = a.length; i < len; i++) {
      fn(a[i], i);
    }
  }

}());
