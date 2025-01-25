Here’s the updated README.md file with code snippets added for the key components:

# **True Count Blackjack Tracker**

The **True Count Blackjack Tracker** is an interactive application designed to assist blackjack players in tracking their card counting metrics in real-time using the **Hi-Lo card counting system**. This app helps users calculate critical statistics like the **count**, **true count**, and the number of remaining aces in the deck, while also recommending optimal bets based on the player's current **true count**.

---

## **Features**
- **Dynamic Counter Management**:
  - Track the running count as cards are drawn.
  - Calculate the true count dynamically based on the number of decks remaining.
- **Betting Recommendations**:
  - Display recommended bets based on the current true count and the user-defined betting unit.
- **Deck Configuration**:
  - Allow players to customize the total number of decks in play for accurate calculations.
- **Real-Time Metrics**:
  - Display the current count, true count, and the number of remaining aces for precise decision-making.
- **Interactive User Interface**:
  - Increment or decrement the count with intuitive buttons.
  - Input and update the betting unit and total decks easily.

---

## **Getting Started**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/vincentcollis/true-count-blackjack.git


2.	Navigate to the project folder:
    cd true-count-blackjack


3.	Install dependencies:

  npm install


4. Start the development server:

  npm run dev


Open your browser and navigate to http://localhost:3000.

How to Use
1.	Set the Total Decks:
	-	Use the input field to configure the number of decks in play.
2.	Track the Count:
	-	Use the +1, -1, and Ace buttons to increment or decrement the running count based on the cards drawn.
3.	View Real-Time Metrics:
	-	Observe the updated count, true count, and remaining aces in the Counter Display section.
4.	Determine Betting Strategy:
	-	Check the recommended betting unit in the Betting Unit Display section and adjust your bets accordingly.

