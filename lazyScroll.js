/*!
 * lazyScroll.js v1.0.0
 * Copyright(c)2020 happy358
 * Site:https://labs.manohara.info/lazyscroll/
 * Released under the MIT license.
 * see https://opensource.org/licenses/MIT
 */
(function () {
  var t = document.querySelector("#script_lazyscroll");
  var e = t.dataset.size || 33;
  var r = encodeURIComponent(t.dataset.color) || "white";
  var o = encodeURIComponent(t.dataset.border) || "black";
  var a = t.dataset.bordersize || 10;
  var n = 7;
  var s = document.documentElement;
  var i = document.querySelector("body");
  var l = "position:fixed;bottom:" + n + "px;right:" + n + "px;width:" + e + "px;height:" + e + "px;display:block;background-repeat:no-repeat;background-position:center;cursor:pointer;z-index:999;transition:transform .3s;transform-origin:center;transform:rotate(0deg);";
  var d = "data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22icon_lazyscroll%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22" + r + "%22%20stroke%3D%22" + o + "%22%20stroke-width%3D%22" + a + "%22%20points%3D%22440.189%2C92.085%20256.019%2C276.255%2071.83%2C92.085%200%2C163.915%20256.019%2C419.915%20512%2C163.915%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E%0A";
  var c = '<a id="lazyscroll" data-target="bottom" style="' + l + "background-image:url(" + d + ');"></a>';
  i.insertAdjacentHTML("beforeend", c);
  var u = document.querySelector("#lazyscroll");
  var v = false;
  var f;
  var p = s.scrollHeight;
  var g = s.clientHeight / 2;
  u.addEventListener("click", function () {
    v = true;
    clearTimeout(f);
    f = setTimeout(function () {
      v = false;
      return false
    }, 1e3);
    if (u.dataset.target == "top") {
      u.style.transform = "rotate(0deg)";
      u.dataset.target = "bottom";
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    } else {
      u.style.transform = "rotate(-180deg)";
      u.dataset.target = "top";
      window.scrollTo({
        top: p,
        left: 0,
        behavior: "smooth"
      })
    }
    return false
  }, {
    passive: true
  });
  window.addEventListener("load", m, {
    passive: false
  });
  window.addEventListener("scroll", m, {
    passive: false
  });

  function m(t) {
    t.preventDefault();
    t.stopPropagation();
    if (!v) {
      var e = window.scrollY - g;
      if (e > 0) {
        u.style.transform = "rotate(-180deg)";
        u.dataset.target = "top"
      } else {
        u.style.transform = "rotate(0deg)";
        u.dataset.target = "bottom"
      }
    }
    return false
  }
  var w = null;
  var h = window.outerHeight;
  window.addEventListener("resize", function (t) {
    t.preventDefault();
    t.stopPropagation();
    clearTimeout(w);
    w = setTimeout(function () {
      var t = window.outerHeight;
      if (h !== t) {
        p = s.scrollHeight;
        g = s.clientHeight / 2;
        h = t
      }
    }, 500);
    return false
  }, {
    passive: false
  });
  document.getElementsByTagName("a").onclick = function (t) {
    var e = t.target;
    if (e.href.charAt(0) != "#") return;
    var r = document.querySelector(e.hash);
    if (!r) return false;
    r.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
    t.preventDefault();
    t.stopPropagation();
    return false
  }
})();
