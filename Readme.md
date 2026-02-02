

# Sentience // Reactive Text Editor

**Sentience** is a minimalist, biometric-inspired text editor that analyzes the emotional gravity of your writing in real-time. Using a custom-weighted sentiment engine, the interface physically and visually adapts to the mood of your input—shifting colors, glow intensities, and kinetic feedback.

##  Unique Features

* **Real-time Sentiment Engine**: A lightweight, keyword-weighted logic engine that detects four primary emotional states: `ANGRY`, `HAPPY`, `SAD`, and `CALM`.
* **Dynamic Theming**: Utilizes CSS Variables and Hardware-accelerated transitions to transform the UI mood without page reloads.
* **Kinetic UI**: High-intensity "Angry" states trigger a CSS shake animation to provide haptic-style visual feedback.
* **Persistence Layer**: Implements a **Debounce** pattern to auto-save content to `localStorage`, ensuring data safety without performance lag.
* **PDF Intelligence**: Integrated `html2pdf.js` to export logs while maintaining the current visual theme/mood.

##  Tech Stack

* **Frontend**: HTML5, CSS3 (Modern Flexbox & CSS Variables)
* **Scripting**: Vanilla JavaScript (ES6+)
* **Libraries**: 
* **Typography**: JetBrains Mono via Google Fonts

##  Project Structure

```bash
├── index.html      # The core structure & UI layout
├── style.css       # Dynamic variables & kinetic animations
├── script.js      # Sentiment logic, Debounce & Persistence
└── README.md       # Project documentation

```

##  Behind the Logic: The Sentiment Engine

Unlike traditional AI models that require heavy API calls, **Sentience** uses a fast, local dictionary-mapping algorithm.

1. **Tokenization**: The input string is converted to lowercase and scanned.
2. **Weighting**: Each keyword found adds to a specific emotional "bucket."
3. **Normalization**: The system calculates the `Dominant Mood` and scales the `Intensity` (0-100%).
4. **DOM Injection**: The calculated values are injected back into the CSS root variables:
* `--accent`
* `--glow`




### Author

**[Aditya Kumar Jha]**
https://github.com/technical-aditya-rathore:-Github Must be followed If you are watching show your empathy and support.
*A project exploring the intersection of Psychology and User Experience.*

---

