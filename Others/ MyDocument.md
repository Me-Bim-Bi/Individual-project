# Bài 1 — JavaScript cơ bản (ngay bây giờ)

Mục tiêu: hiểu cú pháp JS, kiểu dữ liệu, function, object, array, và hiển thị/console logs. Những kiến thức này cần trước khi đi sâu d3.

## 1. Kiến thức chính

Kiểu dữ liệu: Number, String, Boolean, null, undefined, Object, Array, Symbol, BigInt.

Khai báo biến: let, const (tránh var trừ khi cần).

Hàm: function declaration, function expression, arrow functions.

Object và Array: tạo/clone/filter/map/reduce.

Template literals: `Hello ${name}`.

Destructuring: const {id, name} = obj.

Promise / async-await (sơ lược) — sẽ dùng khi gọi fetch.

## 2. Ví dụ ngắn trong console

Mở DevTools (F12) → Console, dán các đoạn sau:

// biến
const pi = 3.14;
let x = 10;

// mảng
const arr = [1,2,3];
const doubled = arr.map(n => n*2);
console.log(doubled); // [2,4,6]

// object
const node = { id: "A", label: "Node A", attrs: { color: "red" } };
const { id, attrs } = node;
console.log(id, attrs.color);

// hàm async (ví dụ giả lập)
async function fakeFetch() {
  return new Promise(resolve => setTimeout(() => resolve({ok:true}), 300));
}
(async () => {
  const r = await fakeFetch();
  console.log("fetch ok:", r.ok);
})();


Trường hợp 1: có let trong block
let x = 10;
{
  let x = 20;   // khai báo biến mới, chỉ tồn tại trong block
  console.log("Trong block:", x); // 20
}
console.log("Ngoài block:", x);   // 10


Trong block: tạo một biến mới tên x, chỉ có hiệu lực trong {}.

Ngoài block: biến x ban đầu không bị ảnh hưởng.

Trường hợp 2: không có let, chỉ gán giá trị
let x = 10;
{
  x = 20;       // không tạo biến mới → gán vào biến x ở scope ngoài
  console.log("Trong block:", x); // 20
}
console.log("Ngoài block:", x);   // 20


Không có let → JS hiểu đây là đang dùng biến đã tồn tại ở scope cha.

Vì vậy gán giá trị mới sẽ làm biến ngoài block bị đổi theo.

### Sự khác nhau giữa let, const, và var
#### let

Khai báo biến có thể thay đổi giá trị.

Có block scope (phạm vi khối lệnh): chỉ tồn tại trong cặp {} nơi khai báo.

Có cơ chế temporal dead zone (TDZ): không thể sử dụng biến trước khi được khai báo.

Thường dùng cho biến mà giá trị sẽ thay đổi.


#### const

Khai báo biến không thể gán lại (immutable binding).

Cũng có block scope và TDZ giống let.

Quan trọng: const chỉ ngăn thay đổi tham chiếu, chứ không ngăn thay đổi nội dung của object/array.

#### var

Tránh dùng trong code hiện đại vì có nhiều đặc điểm dễ gây bug:

Function scope chứ không phải block scope:

if (true) {
  var a = 10;
}
console.log(a); // 10 (không bị giới hạn trong block)


Hoisting kỳ lạ: biến được "nâng" lên đầu scope với giá trị undefined, nên có thể dùng trước khi khai báo mà không báo lỗi.

console.log(b); // undefined (không lỗi!)
var b = 20;


Không có TDZ → dễ vô tình dùng biến trước khi gán.

Vì vậy, chuẩn ES6 khuyến khích dùng let và const.

👉 Tóm lại:

Dùng const mặc định (an toàn, dễ đọc).

Dùng let nếu biến thực sự cần thay đổi.

Tránh var trừ khi làm việc với code cũ.


## 3. Bài tập nhỏ (làm trong console hoặc file .js)

Viết hàm uniqueId(prefix) trả về chuỗi duy nhất (ví dụ "node_1", "node_2").

Viết hàm cloneGraph(graph) nhận {nodes, links} và trả về bản sao sâu (deep copy).

Viết hàm neighbors(nodeId, graph) trả về danh sách id các node kề với nodeId.


// 1
let _counter = 0;
function uniqueId(prefix="n") { _counter++; return `${prefix}${_counter}`; }


// 2
function cloneGraph(g) {
  return {
    nodes: g.nodes.map(n => ({ ...n })),
    links: g.links.map(l => ({ ...l }))
  };
}

// 3
function neighbors(nodeId, graph) {
  const out = new Set();
  graph.links.forEach(l => {
    const s = l.source, t = l.target;
    if (s === nodeId) out.add(t);
    if (t === nodeId) out.add(s);
  });
  return Array.from(out);
}

Roadmap làm dự án (chi tiết theo tính năng) — thứ tự đề xuất (kỹ thuật + tip)

Mục tiêu: bạn có thể triển khai tính năng một cách incremental (MVP → mở rộng).

MVP (cốt lõi để demo):

Load/import graph JSON/CSV (frontend).

Show force-directed graph (d3), drag nodes, zoom/pan.

Add/delete nodes & edges, edit node label.

Export JSON/GraphML/PNG.

Mở rộng theo đề bài:

Undo/Redo & simple versioning (history stacks + server snapshot).

Layouts: thêm hierarchical (dagre), circular (tự tính toán), grid (thuật toán sắp xếp).

Search & filter (client-side): property filter, text search.

Shortest path (Dijkstra) & neighbourhood expansion (BFS).

Analytics: degree, PageRank (cài đặt vòng lặp), connected components (DFS/BFS), community detection (library graphology-louvain).

Collaboration: server Node.js + socket.io để broadcast thay đổi; snapshots + shareable links (signed token).

Performance: nếu >5k nodes → dùng canvas/WebGL renderer (sigma.js, pixi.js), LOD clustering.

Tip công nghệ:

Frontend: Vanilla JS + d3 cho learning; chuyển sang React + d3 nếu muốn UI phức tạp.

Backend: Node.js + Express; realtime: socket.io hoặc raw WebSocket.

DB: nếu cần lưu đồ thị lớn & query: Neo4j (graph DB). Nếu bạn muốn relational: PostgreSQL + table for nodes/edges.

Graph libs (hữu ích): graphology, sigma.js, cytoscape.js (nhưng bạn ưu tiên d3 — tốt để custom).

Build tooling: Vite (ESM + dev server), package manager: npm hoặc pnpm.

Một số thuật toán & code mẫu quan trọng
Shortest path (Dijkstra) — mã JS đơn giản (O(V^2), đủ cho moderate graph)
// nodes: [{id:...}], links: [{source: "A", target: "B", weight: 1}]
function dijkstra(nodes, links, sourceId) {
  const ids = nodes.map(n => n.id);
  const dist = {}; const prev = {};
  ids.forEach(id => dist[id] = Infinity);
  dist[sourceId] = 0;
  const Q = new Set(ids);
  const neighbors = {};
  ids.forEach(id => neighbors[id] = []);
  links.forEach(l => {
    neighbors[l.source].push({ id: l.target, w: l.weight || 1 });
    neighbors[l.target].push({ id: l.source, w: l.weight || 1 }); // nếu graph vô hướng
  });
  while (Q.size) {
    let u = null, min = Infinity;
    for (const id of Q) if (dist[id] < min) { min = dist[id]; u = id; }
    if (u === null) break;
    Q.delete(u);
    for (const nb of neighbors[u]) {
      const alt = dist[u] + nb.w;
      if (alt < dist[nb.id]) { dist[nb.id] = alt; prev[nb.id] = u; }
    }
  }
  return { dist, prev };
}

PageRank (iteration, xử lý dangling)
function pagerank(nodes, links, iterations = 25, d = 0.85) {
  const ids = nodes.map(n => n.id);
  const N = ids.length;
  const pr = {}, incoming = {}, outdeg = {};
  ids.forEach(id => { pr[id] = 1/N; incoming[id] = []; outdeg[id] = 0; });
  links.forEach(l => {
    incoming[l.target].push(l.source);
    outdeg[l.source] = (outdeg[l.source] || 0) + 1;
  });
  for (let it = 0; it < iterations; it++) {
    const newPr = {};
    let danglingSum = 0;
    ids.forEach(j => { if (!outdeg[j]) danglingSum += pr[j]; });
    ids.forEach(i => {
      let sum = 0;
      incoming[i].forEach(j => { sum += pr[j] / (outdeg[j] || 1); });
      newPr[i] = (1 - d) / N + d * (danglingSum / N + sum);
    });
    ids.forEach(i => pr[i] = newPr[i]);
  }
  return pr;
}

Undo / Redo — pattern đơn giản

Trước mọi thay đổi lớn (add/delete/edit), lưu snapshot (JSON) vào undo stack.

Khi undo: push current state vào redo, pop undo và restore.

Khi redo: ngược lại.

Lưu ý: snapshot JSON đơn giản nhưng có thể tốn bộ nhớ; cho độ phức tạp lớn hãy lưu diff thay vì toàn bộ snapshot.

Ví dụ đã có trong demo ở trên.

Backend realtime cơ bản (skeleton)

server (Node.js + Express + socket.io) — pseudo-code:

// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', socket => {
  console.log('client connected', socket.id);
  socket.on('joinRoom', room => socket.join(room));
  socket.on('graph:update', data => {
    // broadcast to others in room
    socket.to(data.room).emit('graph:update', data);
    // optionally persist update to DB
  });
});

app.post('/save', (req, res) => {
  const graph = req.body; // validate, then save to DB
  res.json({ ok: true });
});

server.listen(3000);


Client: const socket = io('https://yourserver'); socket.emit('joinRoom', 'project-123'); socket.on('graph:update', applyUpdate);

Tài nguyên học (không cần link ngay, dễ tìm)

MDN Web Docs (JavaScript, DOM, fetch) — tài liệu chính thống.

JavaScript.info — tutorial hiện đại, dễ đọc.

Eloquent JavaScript (sách miễn phí) — làm bài tập rất tốt.

D3 official docs & API — đọc ví dụ / gallery.

Observable notebooks — nơi nhiều ví dụ d3 tương tác.

Thư viện tham khảo: d3, graphology, sigma.js, cytoscape.js, neo4j-driver, socket.io.

Cấu trúc repo đề xuất (gọn)
graph-editor/
├─ frontend/
│  ├─ index.html
│  ├─ src/
│  │  ├─ main.js
│  │  ├─ components/ (ui pieces)
│  │  ├─ viz/ (d3 visualization code)
│  └─ package.json
├─ backend/
│  ├─ server.js
│  └─ package.json
├─ docs/
└─ README.md