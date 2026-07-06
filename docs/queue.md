# Research queue

Add topics you want researched into notes. Promote a suggestion to move it into
the queue. The queue is saved in this browser. Use **Copy queue** to hand the
list to Claude for research.

<div id="rq" markdown="0">
  <div class="rq-head">
    <span class="rq-title">Queue</span><span id="q-count" class="rq-count"></span>
  </div>
  <div class="rq-add">
    <input id="q-input" type="text" placeholder="Bayesian model averaging in finance" aria-label="Add a topic" />
    <button id="q-add" type="button">Add</button>
  </div>
  <div id="q-list" class="rq-list"></div>
  <div class="rq-actions">
    <button id="q-copy" type="button">Copy queue</button>
    <button id="q-clear" type="button" class="rq-ghost">Clear</button>
  </div>

  <div class="rq-sep"></div>

  <div class="rq-head">
    <span class="rq-title">Suggestions</span>
  </div>
  <p class="rq-hint">Adjacent topics you haven't touched yet.</p>
  <div id="s-list" class="rq-list"></div>
</div>
