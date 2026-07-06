(function () {
  function init() {
    var root = document.getElementById("rq");
    if (!root) return;

    var QKEY = "wiki_queue_v1";
    var load = function () { try { return JSON.parse(localStorage.getItem(QKEY)) || []; } catch (e) { return []; } };
    var save = function (a) { localStorage.setItem(QKEY, JSON.stringify(a)); };
    var queue = load();

    var suggestions = [
      { t: "Kelly criterion vs fractional sizing", w: "you track EV but have no note on bet sizing" },
      { t: "Base-rate neglect", w: "pairs with your decision-making notes" },
      { t: "Cloudflare Zero Trust access policies", w: "adjacent to your private-hosting setup" }
    ];

    var qList = document.getElementById("q-list");
    var sList = document.getElementById("s-list");
    var count = document.getElementById("q-count");
    var input = document.getElementById("q-input");

    function renderQueue() {
      qList.innerHTML = "";
      count.textContent = queue.length ? "(" + queue.length + ")" : "";
      if (!queue.length) {
        var e = document.createElement("p");
        e.className = "rq-hint";
        e.textContent = "Nothing queued yet.";
        qList.appendChild(e);
        return;
      }
      queue.forEach(function (item, i) {
        var row = document.createElement("div");
        row.className = "rq-item";
        var num = document.createElement("span"); num.className = "rq-num"; num.textContent = i + 1;
        var txt = document.createElement("span"); txt.className = "rq-text"; txt.textContent = item;
        var del = document.createElement("button"); del.className = "rq-x"; del.type = "button";
        del.setAttribute("aria-label", "Remove"); del.textContent = "×";
        del.onclick = function () { queue.splice(i, 1); save(queue); renderQueue(); };
        row.appendChild(num); row.appendChild(txt); row.appendChild(del);
        qList.appendChild(row);
      });
    }

    function add(topic) {
      topic = (topic || "").trim();
      if (!topic) return;
      queue.push(topic); save(queue); renderQueue();
    }

    document.getElementById("q-add").onclick = function () { add(input.value); input.value = ""; input.focus(); };
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") { add(input.value); input.value = ""; } });
    document.getElementById("q-clear").onclick = function () { queue = []; save(queue); renderQueue(); };
    document.getElementById("q-copy").onclick = function () {
      if (!queue.length) return;
      var text = queue.map(function (t, i) { return (i + 1) + ". " + t; }).join("\n");
      navigator.clipboard.writeText(text).then(function () {
        var b = document.getElementById("q-copy"); var old = b.textContent;
        b.textContent = "Copied"; setTimeout(function () { b.textContent = old; }, 1200);
      });
    };

    function renderSuggestions() {
      sList.innerHTML = "";
      suggestions.forEach(function (s, i) {
        var card = document.createElement("div"); card.className = "rq-card";
        var body = document.createElement("div"); body.style.flex = "1";
        var t = document.createElement("div"); t.textContent = s.t;
        var w = document.createElement("div"); w.className = "rq-why"; w.textContent = s.w;
        body.appendChild(t); body.appendChild(w);
        var btn = document.createElement("button"); btn.type = "button"; btn.textContent = "Queue";
        btn.onclick = function () { add(s.t); suggestions.splice(i, 1); renderSuggestions(); };
        card.appendChild(body); card.appendChild(btn);
        sList.appendChild(card);
      });
    }

    renderQueue();
    renderSuggestions();
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
