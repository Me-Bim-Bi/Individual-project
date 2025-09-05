#Individual project

## 1. About the project:
### a. Name: Graph Editor
### b. Project summary: 
- Design and build a prototypical, interactive graph visualizer/editor for creating, exploring, and analysing networks (e.g., knowledge graphs, dependencies, social/interactions). 
### c. Core Features:
- Graph editor (web/desktop): Create/import graphs (CSV/JSON/GraphML), add/delete nodes & edges, edit vertex/edge attributes, undo/redo, versioning.
- Layouts & styling: Force-directed, hierarchical, circular, grid; manual drag/snap; rule-based styling by attributes; mini-map, zoom/pan, theming, dark mode.
- Filter, search & query: Property filters, text search, subgraph extraction, shortest-path finder, neighbourhood expansion.
- Analytics: Degree/betweenness/PageRank, community detection, connected components; highlight results in the view.
- Collaboration & sharing: Annotations/comments, snapshots, shareable links, role-based access; export as PNG/SVG/PDF/GraphML.
- Data sources & integrations: Connectors for Neo4j/PostgreSQL/APIs; live updates/streaming; optional ETL for large imports.
- Performance & security: WebGL/LOD for large graphs, lazy loading, caching; authentication, access control, audit logs.
### d. Preferred Technology for solution:
- Javascript with the d3 library.
### e. Targeted Users:
- Software engineers trying to visualize complex dependencies between artefacts and documents, e.g. epics, feature, user stories, open-api specs, sw classes, test cases…

## 2. Product backlog:
- As a user, I want to create/import graphs (CSV/JSON).
- As a user, I want to add/delete nodes and edges.
- As a user, I want to edit node/edge attributes (labels, colors).
- As a user, I want to undo/redo my actions.
- As a user, I want to view graphs with a force-directed layout.
- As a user, I want to pan, zoom, and drag nodes.

- As a user, I want to export my graph (PNG, GraphML).
- As a user, I want to choose between layouts (hierarchical, circular, grid).
- As a user, I want to apply rule-based styling (e.g., color by type).
- As a user, I want to search nodes by text.
- As a user, I want to filter nodes/edges by property.

- As a user, I want to run analytics (degree, shortest path, connected components).
- As a user, I want to highlight analytics results in the view.
- As a user, I want to add annotations and comments.
- As a user, I want to take snapshots and share via link.
- As a user, I want to switch to dark mode and use a mini-map.
- (Optional, if time allows) As a user, I want to connect to external data sources (Neo4j/PostgreSQL)



## 3. Something I need to do:
### Week 36:
- Analys the requiments
- Download the editor (if needs)
- Learn about Javascript with the d3 library
- Set up Github (aven I work alone but I can save all my work their for a future purpose)

### Week 37:
- Customer meeting 1: Clarify MVP and confirm MVP scope for Demo 1.
    - Users & Use Cases
        - Who will use this tool (engineers, analysts, managers)?- What’s the primary use case (dependencies, knowledge graphs, networks)?
    - Graph Data
        - What file formats must we support (CSV, JSON, GraphML)?
        - How large are the graphs (hundreds, thousands of nodes)?
        - When you want to add the graph from file, you will provide information about both node and edge or only one of them?
    - Editing Needs
        - What attributes are essential for nodes/edges (name, type, weight, metadata)?
    - Do you need undo/redo, or is version history required from the start?
    - Visualization
        - Which layouts are critical (force-directed, hierarchical, circular)?
        - Is dark mode/theme switching a must-have?
    ====== 
    - Search & Analytics
        - Which search/filter options are most important?
        - Which analytics (shortest path, degree, PageRank) are must-have vs. nice-to-have?
    - Collaboration & Sharing
        - Is real-time collaboration needed, or just snapshots/links?
        - How do you want to share graphs (PNG, PDF, links)?
    - Integrations & Security
        - Do you need integration with Neo4j/Postgres/API now or later?
        - What level of authentication (login, access roles)?
    - Priorities
        - Which features do you expect in Demo 2 vs. Demo 3?
        - What’s the primary use case (dependencies, knowledge graphs, networks)?

### 3. Something I am doing:

### 4. Something I have done: