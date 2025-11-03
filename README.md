# Games API

Simple Express + TypeScript API with three randomizers:

- Roll a die (`/roll`)
- Draw a playing card (`/draw`)
- Flip a coin (`/flip`)

The home route (`/`) serves lightweight HTML docs describing each endpoint and examples.

## Requirements

- Node.js 22.18.0 (see `.nvmrc`)

Using `nvm`:

```bash
nvm use
```

## Install

```bash
npm install
```

## Run

Builds TypeScript and starts the compiled server.

```bash
npm start
```

Server listens on http://localhost:3000

## Endpoints

### GET /

Renders HTML documentation for the API.

### GET /roll[/:faces]

Rolls a die. Faces default to `6`. You can provide faces as a path parameter or query parameter.

Examples:

```bash
curl http://localhost:3000/roll
curl http://localhost:3000/roll/20
curl "http://localhost:3000/roll?faces=10"
```

Response:

```text
3
```

### GET /draw

Draws a random playing card from a standard 52‑card set.

Optional query params for filtering:

- `suit`: filter by suit. Accepts `s|h|d|c` or `spades|hearts|diamonds|clubs` (case‑insensitive).
- `min`, `max`: filter by rank range. Accepts `A,2..10,J,Q,K` or numeric equivalents `1,11,12,13`.

Examples:

```bash
curl "http://localhost:3000/draw"               # any card
curl "http://localhost:3000/draw?suit=hearts"   # any heart
curl "http://localhost:3000/draw?min=8&max=K"   # 8..K of any suit
curl "http://localhost:3000/draw?suit=s&min=J"  # J..K..A of spades
```

Response:

```json
{
  "rank": "Q",
  "suit": "Hearts",
  "code": "QH",
  "text": "Q of Hearts",
  "symbol": "Q\u2665"
}
```

### GET /flip

Flips a coin. Defaults to faces `["head", "tails"]`. You can override face names via query params `a` and `b`.

```bash
curl http://localhost:3000/flip
curl "http://localhost:3000/flip?a=H&b=T"
```

Response:

```text
"head"
```

## Project Structure

```
.
├── index.ts                # App entrypoint (ESM)
├── src/
│   ├── docs.ts             # HTML served at /
│   └── routers/
│       ├── index.ts        # Aggregates routers
│       ├── roll.ts         # /roll routes
│       ├── draw.ts         # /draw routes
│       ├── flip.ts         # /flip routes
│       └── types.ts        # Shared types for cards
└── dist/                   # Compiled JS output
```

## Scripts

- `npm run build` – compile TypeScript to `dist/`
- `npm start` – build then run `dist/index.js`

## Notes

- The project uses Node ESM with `module: "NodeNext"`. When importing local TS files, `.js` extensions are used in source so the emitted JS resolves correctly at runtime.

## License

MIT
