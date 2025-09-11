# Kanban Board

A simple Kanban board application built with React and TypeScript. It allows users to manage tasks across different stages: Backlog, In Progress, Completed, and Cancelled. Tasks are stored in the browser's local storage for persistence. You can test the application [here](https://kanban.ritikpatni.me/).

## Features

- Add new tasks with a title and description.
- Drag and drop tasks between different stages.
- Tasks are saved in local storage to retain state across sessions.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the Application

```bash
npm start
# or
yarn start
```

Open your browser and navigate to `http://localhost:5173` to view the application.

### Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `build` directory.

## Technologies Used

- React
- TypeScript
- dnd-kit for drag-and-drop functionality
- CSS(SASS) for styling
- Local Storage for data persistence

## Folder Structure

```
/src
  /app
    /assets
    /components
      /kanban
        - index.tsx
        - index.scss
        /create-task
          - index.tsx
          - index.scss
        /mock
          - index.ts
        /task-container
          - index.tsx
          - index.scss
          /header
            - index.tsx
            - index.scss
          /task
            - index.tsx
            - index.scss
        /view-task
          - index.tsx
          - index.scss
      /common
        /modal
          - index.tsx
          - index.scss
        /header
          - index.tsx
          - index.scss
        /tags-row
          - index.tsx
          - index.scss
    /constants
      - index.ts
    /types
      - index.ts
    /utilities
      - index.ts
    /routes
      - home.tsx
    - root.tsx
    - routes.ts
```

## Scope for Improvement

- Add workflows for adding assignee, labels, and priority.
- Add Markdown support for task descriptions.
- Allow editing and deleting tasks.
- Update the favicon and add a logo.
- Add Light theme support.

## Working URL

You can test the application [https://kanban.ritikpatni.me](https://kanban.ritikpatni.me/).
