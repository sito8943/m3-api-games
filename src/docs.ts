export const docsHtml = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Games API Docs</title>
    <style>
      :root { color-scheme: light dark; }
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif; margin: 2rem auto; max-width: 720px; line-height: 1.5; padding: 0 1rem; }
      code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      pre { background: rgba(127,127,127,.08); padding: .75rem; border-radius: .5rem; overflow: auto; }
      h1 { margin-bottom: .25rem; }
      h2 { margin-top: 2rem; }
      .endpoint { margin: 1rem 0; padding: 1rem; border: 1px solid rgba(127,127,127,.25); border-radius: .5rem; }
      .method { font-weight: 700; }
    </style>
  </head>
  <body>
    <h1>Games API</h1>
    <p>Simple endpoints for small random games: roll a die, draw a card, or flip a coin.</p>

    <h2>Endpoints</h2>

    <div class="endpoint">
      <div><span class="method">GET</span> <code>/roll</code></div>
      <p>Rolls a die. Default faces is <code>6</code>. You can set faces via a path param or query param.</p>
      <ul>
        <li><code>/roll</code> → roll a 6-sided die</li>
        <li><code>/roll/20</code> → roll a 20-sided die</li>
        <li><code>/roll?faces=10</code> → roll a 10-sided die</li>
      </ul>
      <p>Response:</p>
      <pre>5</pre>
    </div>

    <div class="endpoint">
      <div><span class="method">GET</span> <code>/draw</code></div>
      <p>Draws a random playing card from a standard 52-card set.</p>
      <p>Optional query params for filtering:</p>
      <ul>
        <li><code>suit</code>: filter by suit. Accepts <code>s|h|d|c</code> or <code>spades|hearts|diamonds|clubs</code> (case-insensitive).</li>
        <li><code>min</code>, <code>max</code>: filter by rank range. Accepts <code>A,2..10,J,Q,K</code> or numeric equivalents <code>1,11,12,13</code>.</li>
      </ul>
      <p>Examples:</p>
      <pre>
/draw
/draw?suit=hearts
/draw?min=8&amp;max=K
/draw?suit=s&amp;min=J
      </pre>
      <p>Response:</p>
      <pre>{
  "rank": "Q",
  "suit": "Hearts",
  "code": "QH",
  "text": "Q of Hearts",
  "symbol": "Q\u2665"
}</pre>
    </div>

    <div class="endpoint">
      <div><span class="method">GET</span> <code>/flip</code></div>
      <p>Flips a coin. Defaults to faces <code>["head", "tails"]</code>. Override names with query params <code>a</code> and <code>b</code>.</p>
      <ul>
        <li><code>/flip</code> → defaults</li>
        <li><code>/flip?a=H&amp;b=T</code> → custom faces</li>
      </ul>
      <p>Response:</p>
      <pre>"head"</pre>
    </div>

    <h2>Status</h2>
    <p>Server runs on <code>http://localhost:3000</code> by default.</p>
  </body>
</html>`;
