# 🏛️ CivicConnect | Empowering Kenyans Through Digital Democracy

**Understand Laws. Participate. Be Heard.** 

CivicConnect is a modern civic tech platform designed to democratize legal information and facilitate public participation for Kenyan citizens. It transforms complex parliamentary bills into simple, accessible language and provides a central hub for exercising constitutional rights.

---

## 🎯 Project Vision

The mission of CivicConnect is to bridge the gap between legislation and the people. By providing simplified legal content and a direct channel for feedback, we empower every Kenyan to:

*   **Learn**: Understand new bills and their potential impacts on daily life.
*   **Track**: Monitor the progress of legislation through the National Assembly and Senate.
*   **Act**: Participate in public forums and submit opinions on critical issues.
*   **Defend**: Know their constitutional rights and how to protect them.

---

## 🚀 Key Features

### ⚖️ Legislative Bill Tracker (`/bills`)
Explore a database of ongoing and upcoming legislation. Filter by status (**Upcoming**, **Active**, **Passed**) or category (**Technology**, **Health**, **Finance**) to stay updated on the laws that matter to you.

### 📝 Simplified Legal Analysis (`/bills/:id`)
We take the heavy legal jargon out of parliamentary bills. Read clear explanations of:
*   What the bill seeks to achieve.
*   **Pros** (Potential Benefits) & **Cons** (Criticisms/Concerns).
*   Key provisions summarized in bullet points.

### 🛡️ Rights & Constitution Hub (`/rights`)
Search for specific legal topics like **Land Ownership**, **Succession**, or **Freedom of Expression** to learn how the Constitution of Kenya protects your interests.

### 📢 Public Participation Portal (`/participate`)
A central calendar of public forums and stakeholder dialogues. Use our digital form to submit **Memos** directly to parliamentary committees, ensuring your voice is part of the official record.

### 🎓 Civic Education Guide (`/learn`)
A modular learning resource covering:
*   How voting works in Kenya.
*   The actual role of an MP.
*   The journey of a bill from an idea to an Act of Parliament.

---

## 🎨 Tech Stack & UI/UX

*   **React (Vite)**: For a lightning-fast, modern frontend experience.
*   **Tailwind CSS**: Custom-designed design system for a premium, accessible aesthetic.
*   **Lucide-React**: Elegant, consistent iconography.
*   **React Router**: For clean navigation and scroll management.
*   **Mobile-First Approach**: Optimized for the smartphone experience—the primary device for most Kenyans.

---

## 🛠️ Installation & Setup

1.  **Clone the project**:
    ```bash
    git clone https://github.com/your-repo/CivicConnect.git
    cd CivicConnect
    ```

2.  **Navigate to the frontend**:
    ```bash
    cd frontend
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Start the development server**:
    ```bash
    npm run dev
    ```

---

## 📁 Project Structure

```text
CivicConnect/
├── frontend/ (All frontend code)
│   ├── src/
│   │   ├── components/      # Reusable UI (Navbar, Footer, BillCard)
│   │   ├── data/            # Mock database (Bills, Rights, Events)
│   │   ├── pages/           # Route-level views
│   │   ├── layouts/         # App shell & Navigation logic
│   │   └── App.jsx          # Routing & Entry Logic
│   └── tailwind.config.js   # Design tokens (Colors, Shadows, Fonts)
└── .gitignore               # Ignored files (node_modules, dist, .env)
```

---

## 🔮 Future Roadmap

*   **Africa’s Talking Integration**: SMS/USSD alerts for upcoming public participation events.
*   **Backend Integration**: Real-time database for storing citizen opinions and official bill updates.
*   **Interactive Chatbot**: AI assistant to answer simple legal questions in Kiswahili and English.
*   **Hansard Sync**: Automated synchronization with parliamentary records.

---

Built with ❤️ for the People of Kenya. 🇰🇪 🏛️
