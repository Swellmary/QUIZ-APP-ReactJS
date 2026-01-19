# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Quiz App

A simple interactive quiz built with React + Vite.  
Answer multiple-choice questions, see your score, and restart to play again.

---

## 🚀 Quick Overview

- Questions are defined in a hard-coded `questionBank` array  
- Users select answers and navigate with **Previous** / **Next** buttons  
- Final score is calculated by comparing `userAnswers` vs. correct answers  
- **Restart Quiz** resets everything back to question 1

---

## 🛠️ Tech Stack

- React (v18+)  
- Vite (dev server + build)  
- JavaScript (ES6+)  
- CSS for styling

---

## 🔍 How to Use

1. Click an option to answer.  
2. Click **Next** (or **Finish Quiz**) to advance.  
3. View your score and click **Restart Quiz** to play again.