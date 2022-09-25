### NextJS base

- [x] Fast Refresh (React)
- [x] Routes by folders
    - [x] `[..id]` Dinamic routes
- [x] SPA: Single Page Application
- [x] SSG: Static Site Generation
- [x] CSR: Client Side Rendering
- [x] SSR: Server Side Rendering
- [ ] ISG / ISR - Incremental Static Generation/Regeneration

### Project to intro NextJs

- [x] Movie Listing
- [ ] Search Movies (themoviedb.org)
- [ ] movie delathe screen

### Fast Refresh
- It is the instant update of changes to React components and pages without having to reload the page in the browser. NextJS already has this configured by default.

### Routes by folders
- The route creation system in NextJS is already configured by default to follow the name of the files inserted into the `page` folder.

### Dinamic routes
- These are routes with dynamic parameters, NextJS recognizes these routes by filename [..id], [ id], [variable-name] and so on. These are pages where they receive values that change according to what the passed value or variable is looking for and this also implies the content of the page.

### Single Page Application
- Single page applications load only one HTML page and every time the user requests new content it is dynamically added and processed by JavaScript through DOM manipulation

### Static Site Generation (Executes only 1x in the build)
- It is a feature used for pages where the content is fixed, i.e. your page doesn't need to be rendered again because it doesn't have any changes, with SSG it renders the page only once at server start or build time and gives it to you already pre-built.

Note: SSG is also used for fixed-content pages, but also for pages that receive data but not often.

### Client Side Rendering (Executes each request by the browser)
- This feature is used on pages where your data changes frequently. The CSR reprocesses your data on each browser request.

### Server Side Rendering (Runs on each request by the server)
- This feature is used for pages or components whose data is changing frequently, i.e. the SSR is triggered with each request made on it, it fetches the data from the server side for this.   

### Incremental Static Generation/Regeneration [wip]