# Drag and Drop Application with TypeScript, React, and Tailwind CSS

This is a web application built using TypeScript, React, and Tailwind CSS, and it implements drag and drop functionality using the react-dnd library. The application allows users to drag and drop items between two zones, one on the left and one on the right. Each drop zone contains input fields to add new items to the respective drop zone. The application also includes a "Clear" button to delete the last added item and a "Save" button that saves the items in the right drop zone to a table below the drop zones. The table displays the items along with a unique ID for each item.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

1. Clone the repository:
``` git clone <repository_url> ```
2. Navigate to the project directory:
```cd <project_directory> ```
3. Install the dependencies:
```npm install```

## Usage

1. Start the development server:
```npm start```

2. Open your browser and [visit] (http://localhost:3000) to access the application.

3. Use the drag and drop functionality to move items between the left and right drop zones. Interact with the input fields within the drop zone to add new items.

4. Click the "Save" button to save the items in the right drop zone to the table below the drop zones. The table will display the input field values for each item, along with a unique ID.

## Project Structure

### The project structure is organized as follows:

* `src/`: Contains the source code for the React application.

    - `components/`: Includes the React components used in the application.
    - `hooks/`: Contains custom React hooks.
    - `interfaces/`: Contains TypeScript interfaces.
    - `App.tsx`: The entry point of the application.
    - `index.tsx`: The main file that renders the React application.

* `public/`: Contains the public assets and the HTML file used as a template for the application.

* `package.json`: Defines the project dependencies and scripts.

* `tsconfig.json`: Configures the TypeScript compiler options.
