# COLLABORAFRONT - Collaboration Platform Frontend

## Overview
COLLABORAFRONT is a React-based frontend application for a collaboration platform. It's built with React and bundled using Vite, providing a modern development environment with features like Hot Module Replacement (HMR).

## Project Structure
The project follows a typical React application structure:

- **public** - Static assets
  - **/assets** - Contains vendor libraries (tinymce, echarts, quill, etc.)
  - **/assets_front** - Frontend-specific static assets
- **src** - Source code
  - **/component** - React components
  - **/frontoffice** - User-facing components including a versioning system

## Key Features
Based on the codebase analysis, the application appears to include:

- Document Collaboration - Includes versioning and comparison features
- Rich Text Editing - Integration with TinyMCE and Quill editors
- Data Visualization - Charts and graphs powered by ECharts
- Responsive Design - Modern UI components

## Technologies Used
- React - Frontend library for building user interfaces
- Vite - Build tool and development server
- TinyMCE - Rich text editor
- Quill - Modern WYSIWYG editor
- ECharts - Charting and visualization library
- Chart.js - Additional charting capabilities

## Getting Started

### Prerequisites
- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd COLLABORAFRONT
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The application will start and be available at http://localhost:3000 (or another port if 3000 is busy).

### Build for Production
To create a production build:
```
npm run build
```

The built assets will be available in the `dist` directory.

## Features in Detail

### Versioning Component
The project includes a versioning system that allows users to:

- Compare different versions of documents
- Visualize changes with highlighted additions and removals
- Handle both text and image content

```jsx
document.push(
  <span
    key={index}
    style={{ backgroundColor: part.added ? "lightgreen" : "salmon" }}
  >
    {part.value.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {i > 0 && <br />}
        {line}
      </React.Fragment>
    ))}
  </span>
);
```

### Rich Text Editing
The application integrates professional rich text editors:

- **TinyMCE**: Full-featured editor with advanced formatting options
- **Quill**: Modern, lightweight editor with good mobile support

### Data Visualization
Using ECharts and Chart.js, the application can render various data visualizations:

- Line and bar charts
- Pie charts
- Interactive and responsive visualizations

## Project Configuration
The project uses Vite's configuration system, which provides:

- Fast development server with HMR
- Optimized production builds
- Plugin-based architecture

## Contributing
To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- React
- Vite
- TinyMCE
- Quill
- ECharts
- Chart.js
