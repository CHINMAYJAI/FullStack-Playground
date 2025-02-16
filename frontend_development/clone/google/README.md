# Google Homepage Clone

This project is a clone of the Google homepage built using **HTML** and **TailwindCSS**. It is part of the [FullStack-Playground](https://github.com/CHINMAYJAI) repository and maintained by **CHINMAYJAI**. Contributions are welcome!

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Installation

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Install TailwindCSS as a development dependency:**

   ```bash
   npm install -D tailwindcss
   ```

2. **Install TailwindCSS along with its CLI:**
   ```bash
   npm install tailwindcss @tailwindcss/cli
   ```

## Setup

1. **Configure TailwindCSS in your CSS file:**

In your `src/input.css` file, add the following line at the top:
```bash
@import "tailwindcss";
```

2. **Link the compiled CSS in your HTML:**

In your `index.html` file, include the output CSS file by adding:
```html
<link href="./output.css" rel="stylesheet">
```

3. **Compile TailwindCSS and watch for changes:**

Run the following command to process your CSS with TailwindCSS and continuously watch for any changes:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

# Project Structure
The project is located at:
```swift
FullStack-Playground/frontend_development/clone/google/
```

## 📂 Repository Structure
A sample structure might look like:

```
FullStack-Playground
└── frontend_development
    └── clone
        └── google
            ├── index.html
            └── src
                ├── input.css
```
Feel free to explore the directories and files for more details on the implementation.

## Usage
1. **Install dependencies:**
```bash
npm install -D tailwindcss
npm install tailwindcss @tailwindcss/cli
```
2. **Add Tailwind import in `src/input.css` and link `output.css` in `index.html` as described above.**

3. **Run the TailwindCSS compiler:**
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
4. **Open `index.html` in your browser to view the Google homepage clone.**


## Contributing
Contributions are highly appreciated! If you have ideas for improvements or bug fixes, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please ensure your code adheres to the existing style and that you test your changes before submission.



## 📜 License
This project is open-source and available under the MIT License.

---

## Contact
For any questions or suggestions, please feel free to reach out via GitHub Issues or contact CHINMAYJAI directly on GitHub.
