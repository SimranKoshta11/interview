# code2offer - Master Your Coding Interview Prep 🚀

![Project Banner](https://img.shields.io/badge/code2offer-Interview%20Prep-6366f1?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, responsive web platform designed to help students and developers master coding interviews **company by company**. Practice curated LeetCode problems from top tech companies with an elegant user interface and smart filtering.

---

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage Guide](#-usage-guide)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

### 🏢 Company-Specific Practice
- Browse **75+ top tech companies** including Google, Amazon, Microsoft, Meta, and more
- Access company-wise curated interview questions
- View question counts for each company at a glance

### 🎯 Smart Filtering & Sorting
- **Difficulty filters**: Easy, Medium, Hard
- **Sort options**: Name (A-Z), Question count, Recommended
- **Search functionality**: Find companies quickly by name
- **Pagination**: View 10, 15, 20, or 25 companies per page (multiples of 5)

### 📱 Modern Responsive Design
- **5-column grid layout** on desktop (automatically adjusts for smaller screens)
- Smooth animations and transitions
- 3D rotating cube and floating cards in hero section
- Gradient backgrounds and glassmorphism effects
- Mobile-optimized navigation

### 📊 Statistics Dashboard
- Animated counters showing:
  - Total interview questions
  - Number of tech companies
  - Active learners
  - Success rate percentage

### 🎨 Premium UI/UX
- Clean, professional card-based design
- Uniform card dimensions for consistent layout
- Hover effects and interactive elements
- Custom scrolling animations
- Newsletter subscription section in footer

---

## 🎥 Demo

### Homepage Hero Section
![Hero Section](https://via.placeholder.com/800x400/6366f1/ffffff?text=code2offer+Hero+Section)

### Company Grid View
![Company Grid](https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Company+Grid+-+5+Cards+Per+Row)

### Questions Page
![Questions Page](https://via.placeholder.com/800x400/a78bfa/ffffff?text=Company+Questions+View)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (ES6+)** | Interactivity, filtering, pagination |
| **Google Fonts** | Poppins font family |

### Key Technologies & Concepts Used:
- CSS Grid & Flexbox for layouts
- CSS Variables for theming
- CSS Keyframe animations
- Intersection Observer API
- Local Storage (for future enhancements)
- Responsive design with media queries

---

## 📁 Project Structure

```
code2offer/
│
├── csv/                    # CSV data files (if applicable)
│
├── logos/                  # Company logo images
│   ├── google.png
│   ├── amazon.png
│   ├── microsoft.png
│   └── ...
│
├── index.html             # Main HTML file
│   ├── Home page
│   ├── Features section
│   ├── Companies section
│   ├── Stats section
│   ├── Questions page
│   └── Footer
│
├── script.js              # JavaScript functionality
│   ├── Company data array
│   ├── Pagination logic
│   ├── Search & filtering
│   ├── Sorting algorithms
│   └── Page navigation
│
├── style.css              # All styling
│   ├── CSS variables (colors, gradients)
│   ├── Global styles
│   ├── Navigation bar
│   ├── Hero section
│   ├── Company cards
│   ├── Questions page
│   ├── Footer styles
│   └── Responsive breakpoints
│
└── README.md             # This file
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) - optional
- Basic knowledge of HTML/CSS/JS for customization

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/code2offer.git
   cd code2offer
   ```

2. **Open the project**

   **Option 1: Direct Browser Access**
   - Simply double-click `index.html` to open in your default browser

   **Option 2: Using a Local Server (Recommended)**

   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   ```

   Using Node.js:
   ```bash
   # Install http-server globally
   npm install -g http-server

   # Run server
   http-server -p 8000
   ```

   Using VS Code:
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **Access the application**
   ```
   http://localhost:8000
   ```

---

## 📖 Usage Guide

### Navigation

#### **Home Page**
1. **Hero Section**: Introduction with call-to-action buttons
2. **Features Section**: Key benefits of the platform
3. **Companies Section**: Grid of company cards
4. **Stats Section**: Animated statistics

#### **Company Search & Filter**
- Use the **search bar** to find companies by name
- **Sort dropdown**: Order by name or question count
- **Page size selector**: Choose 10/15/20/25 companies per page
- Click on any **company card** to view their questions

#### **Questions Page**
- **Difficulty filters**: Click All/Easy/Medium/Hard buttons
- **Sort questions**: Use dropdown to order by title or difficulty
- **Back button**: Return to companies list
- **Solve button**: Opens the question on LeetCode (or your preferred platform)

---

## 🎨 Customization

### Changing Colors & Theme

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-purple: #6366f1;
    --secondary-purple: #8b5cf6;
    --accent-purple: #a78bfa;
    --dark-bg: #0f0b1f;
    --surface: #1a1433;
    /* ... more variables */
}
```

### Adding Companies

Edit the companies array in `script.js`:

```javascript
const companies = [
    {
        name: "Company Name",
        logo: "logos/company.png",
        count: 150,
        questions: [
            {
                title: "Two Sum",
                difficulty: "easy",
                link: "https://leetcode.com/problems/two-sum/"
            }
            // ... more questions
        ]
    }
    // ... more companies
];
```

### Modifying Grid Layout

Change the number of cards per row in `style.css`:

```css
.company-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Change 5 to desired number */
    gap: 1.5rem;
}
```

### Updating Logo & Branding

Replace in `index.html` and footer:

```html
<span class="logo-text">code</span>
<span class="logo-number">2</span>
<span class="logo-text">offer</span>
```

---

## 🔧 Configuration Options

### Pagination
Default page size: **10 companies**  
Available options: 10, 15, 20, 25

To change default, edit `script.js`:
```javascript
let itemsPerPage = 10; // Change this value
```

### Card Dimensions
Cards are set to uniform size (280px height). To adjust:

```css
.company-card {
    min-height: 280px; /* Adjust as needed */
    max-height: 280px;
}
```

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Opera | ✅ Latest |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Ideas
- [ ] Add more companies and questions
- [ ] Implement user authentication
- [ ] Add progress tracking
- [ ] Create a backend API
- [ ] Add company-wise statistics
- [ ] Implement dark/light mode toggle
- [ ] Add question notes and solutions
- [ ] Create mobile app version

---

## 🐛 Issues & Bug Reports

Found a bug? Have a suggestion? Please open an issue on GitHub:
- Use descriptive titles
- Include steps to reproduce
- Add screenshots if applicable
- Mention browser and OS details

---

## 📝 Roadmap

### Phase 1 (Current)
- [x] Company grid with search and filters
- [x] Questions page with difficulty filters
- [x] Responsive design
- [x] Pagination

### Phase 2 (Planned)
- [ ] User accounts and authentication
- [ ] Progress tracking and analytics
- [ ] Bookmarking favorite questions
- [ ] Personal study plans

### Phase 3 (Future)
- [ ] Community discussion forum
- [ ] Company interview experiences
- [ ] Mock interview feature
- [ ] AI-powered recommendations

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 code2offer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Simran Koshta**
- GitHub: https://github.com/SimranKoshta11
- LinkedIn: https://www.linkedin.com/in/simran-koshta-40b3b2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
- Email: simrankoshta20@gmail.com

Built with ❤️ by a computer science student passionate about interview preparation and clean web design.

---

## 🙏 Acknowledgments

- [LeetCode](https://leetcode.com) for interview problem inspiration
- [Google Fonts](https://fonts.google.com) for Poppins font
- Tech companies for creating amazing interview challenges
- The developer community for feedback and support

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/yourusername/code2offer?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/code2offer?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/code2offer)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yourusername/code2offer)

---

## 💬 Support

If you like this project, please:
- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest new features
- 🔀 Submit pull requests

---

<div align="center">
  <p>Made with <span style="color: #ef4444;">♥</span> for aspiring engineers</p>
  <p>© 2025 code2offer. All rights reserved.</p>
</div>
