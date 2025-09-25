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

## 2. Something I need to do:
### Week 36:
- Analys the requiments
- Download the editor (if needs)
- Learn about Javascript with the d3 library
- Set up Github (aven I work alone but I can save all my work their for a future purpose)

### Week 37:
- Customer meeting 1: Clarify MVP (Minimum viable product) and confirm MVP scope for Demo 1.
    - Shoud be web
    - Language: which one you like
    - Function: add delete edit, have version history, seach degree, seach by text, sample database, neo4J, genarater graph... 
    - who will use it program? Lucas, teacher, software engineer. create a graph, fine format.... 
- Questions:
    - Is it ok if I only support one of those kind of files: CSV, JSON, GraphML? => One is ok. JSON. How the JSON should look like... blah blah. 
    - focus on desktop web. 
    - How large are the input files? Can I limited it in about 500.000 nodes? (The library becomes drop with more than 500.000 nodes and I dont want to have risk). => If it's limited so I can do this. File is valid => start. If not => show the error. check the file link... value for the customer.... Try to import huge graph first. 
    - When the user want to add the graph from file, which kind of information is mandatory: node or edge? (name, type, weight): node, edge, direction. weight (I think it not very important)
    - What metadata of the nodes or edges should be shown on the graph (name, type, weight)? Is it ok to have only those three?
    - Need to write documentation.
    - When the user imports a graph from a file and edits it, should the system: take the easy. 
    - Overwrite the original file when saving,
    - Always save as a new file with a different name. (take it)
    - Let the user choose between overwriting the original or saving as a new file?
    - How much versioning must we support? Can I limit it with 5 versions? => full version history but it's ok if I want to limit it.
========        
    - Editing Needs
        - When the user adds, deletes, or edits nodes/edges, how should it work?
            - Can the user click on the screen to add a node, then type node/edge info in a popup box?
            - Or should the user add a row in a table, fill in the info, then click “Create” to add it?
            - Or user can click on a button named "Add node" and the node will be added automatic?
        - Choose something best of me but remember that need node, edge, direction. 
        - It's ok force-directed. Need to can create a graph. 
        - Can display very large graph is the best point, dont make something too detail and complex.
        - The point is: large graph with basic tools: import, add, delete, edit, can zoom, share, querry. 
    - with undo/redo function can I do it with only 1-3 stegs forward? it's ok. (datasources)
    - Visualization
        - Which layouts are critical (Force-directed, hierarchical, circular, grid; manual drag/snap; rule-based styling by attributes; mini-map, zoom/pan)? The user need to choose the layouts first or can change it later? 
        We need to choose it first. 
        - Can I have only 1 of those layouts, or three of them or I need to do all of this? If I need to do all, which kind of layouts is the default? yes. dont focus too much on detail. ok with 2 (Force-directed, hierarchical).
        can do the d2 graph? Import Export, Run... 
        - Is dark mode/theme switching a must-have? If must, can I choose only one of them? Skip it. 
========
    - Search & Analytics
        - Is it ok if I have only simple search (not advance search) for text search? search for find all testcases to connected with the software class. 
            - Property filters (only by name or type). 
            - subgraph extraction: how maximum? Can I support only 3 or 10 nodes? 
            - neighbourhood expansion: how maximum?
            - shortest-path finder: how maximum?
        - Which analytics (Degree/betweenness/PageRank, community detection, connected components; highlight results in the view) are must-have vs. nice-to-have? one of three things if I want.
    - Collaboration & Sharing
        - With this part, I want that user must save graph on the server before they share the link to other person and it is readonly file. Annotations/comments, snapshots function can only the creater can do. If the user A share link to B, B can share to C, is it right?
        - Can I support to export only 1 in those kind of files (PNG/SVG/PDF/GraphML)? ok 
    - Integrations & Security
        - Do you need integration with Neo4j/Postgres/API now or later? Check neo4J. 
        - Can I have only admin and normal user, is it ok? Who can access the audit log?
    - Data sources & integrations: Is ETL nice-to-have or must have?
    - Performance & security
        - Is it ok if the programe have only admin and normal user? And only the admin can see the audit logs. 
        - username, password log in would be fine. (can have out source). 
======
#### Week 38:
- Setup environment
- next.js: npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm
- react flow: npm install @xyflow/react
- tailwindcss: npm install tailwindcss @tailwindcss/vite
- react types: npm install --save-dev @types/react @types/react-dom
- run file: npm run dev
- redux: npm install @reduxjs/toolkit
- react-redux: npm install react-redux

- npm i
- npm i -Dvitest
- Add to package.json:  
    "test": "vitest",
    "test:ui": "vitest --ui"


#### Week 39:
- Set up
    - next.js: npx create-next-app@latest 
    - (npm install)
    - d3 library: npm install d3
    - type definitions for d3: npm install --save-dev @types/d3
    - git: brew install git
- Edit the layout.tsx with the name of website
- Create components: force-direct, hierachy
- Create ... many things
- Write test for US1-4 in sprint 1





=====================
# FOR "READ ME" DOCUMENT

## This is a Graph Editor app built with the following technologies and libraries
- Next.js (framwork)
- Typescpript
- Tailwind
- RadixUI
- React 
- Redux
- Auth0
- Vitest