const svg = d3.select("svg");

// Load song song 2 file CSV
Promise.all([
  d3.csv("nodes.csv", d => ({ id: +d.id, name: d.name })), 
  d3.csv("links.csv", d => ({ source: +d.source, target: +d.target }))
]).then(([nodes, links]) => {
  
  // Tạo force simulation
  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(150))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(300, 200));

  // Vẽ edges
  const link = svg.selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", "#999")
    .attr("stroke-width", 2);

  // Vẽ nodes
  const node = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 20)
    .attr("fill", "steelblue")
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended)
    );

  // Update simulation mỗi tick
  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });

  // Hàm kéo-thả node
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
});
