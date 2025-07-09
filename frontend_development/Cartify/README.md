# Cartify

Cartify is a web application designed to help users manage their cards effectively. Built with React and Vite, it offers a fast and modern development experience, making it easy for users to interact with their card collections.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User-Friendly Interface**: A clean and intuitive interface for managing cards, ensuring ease of use for all users.
- **Theme Switching**: Users can toggle between different visual themes, enhancing the user experience and allowing for personalization.
- **Card Acceptance/Rejection**: Users can accept or reject cards based on their preferences. The application tracks all accepted and rejected cards, displaying details such as the card ID and counts of rejections and acceptances.
- **Dismiss Cards**: Users have the option to dismiss cards they no longer wish to see, helping to keep their interface uncluttered.

## Technologies Used
- **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
- **Vite**: A modern build tool that provides a fast and lean development experience, optimizing the build process for React applications.
- **ESLint**: A static code analysis tool that helps identify problematic patterns in JavaScript code, ensuring code quality and consistency.

## Installation
To get started with Cartify, follow these steps:

1. **Clone the Repository**: Use the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/CHINMAYJAI/FullStack-Playground.git
   ```

2. **Navigate to the Project Directory**: Change into the project directory:
   ```bash
   cd FullStack-Playground/frontend_development/Cartify
   ```

3. **Install Dependencies**: Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

## Usage
To run the application locally, execute the following command:
```bash
npm run dev
```

Open your web browser and navigate to `http://localhost:3000` to view the application in action. You can start managing your cards right away!

## Project Structure
The project follows a structured layout, making it easy to navigate:
```
  ├── Cartify/
     ├── eslint.config.js
     ├── index.html
     ├── package-lock.json
     ├── package.json
     ├── public/
     │   └── favicon.ico
     ├── README.md
     ├── src/
     │   ├── App.jsx
     │   ├── assets/
     │   ├── components/
     │   │   ├── Cards/
     │   │   │   ├── Cards.jsx
     │   │   │   └── index.js
     │   │   ├── CardTracker/
     │   │   │   ├── CardTracker.jsx
     │   │   │   └── index.js
     │   │   ├── ThemeSwitcher/
     │   │   │   ├── index.js
     │   │   │   └── ThemeSwitcher.jsx
     │   ├── main.jsx
     └── vite.config.js
```

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author
`CHINMAYJAI`
