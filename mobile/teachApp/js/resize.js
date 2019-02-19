!function (h) {
  function b() {
    var m = j.getBoundingClientRect().width;
    if (m / l > 540) {
      m = 540 * l
    }
    h.rem = m / 18;
    j.style.fontSize = h.rem + "px"
  }

  var l, c, g, f = h.document, j = f.documentElement, i = f.querySelector('meta[name="viewport"]'), k = f.querySelector('meta[name="flexible"]');
  if (i) {
    var a = i.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
    if (a) {
      c = parseFloat(a[2]);
      l = parseInt(1 / c)
    }
  } else {
    if (k) {
      var a = k.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
      if (a) {
        l = parseFloat(a[2]);
        c = parseFloat((1 / l).toFixed(2))
      }
    }
  }
  if (!l && !c) {
    var d = (h.navigator.appVersion.match(/android/gi), h.navigator.appVersion.match(/iphone/gi));
    l = h.devicePixelRatio;
    l = d ? l >= 3 ? 3 : l >= 2 ? 2 : 1 : 1, c = 1 / l
  }
  if (j.setAttribute("data-dpr", l), !i) {
    if (i = f.createElement("meta"), i.setAttribute("name", "viewport"), i.setAttribute("content", "initial-scale=" + c + ", maximum-scale=" + c + ", minimum-scale=" + c + ", user-scalable=no"), j.firstElementChild) {
      j.firstElementChild.appendChild(i)
    } else {
      var e = f.createElement("div");
      e.appendChild(i), f.write(e.innerHTML)
    }
  }
  h.dpr = l;
  h.addEventListener("resize", function () {
    clearTimeout(g), g = setTimeout(b, 10)
  }, false);
  h.addEventListener("pageshow", function (m) {
    m.persisted && (clearTimeout(g), g = setTimeout(b, 10))
  }, false);
  b()
}(window);