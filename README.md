# 🍬 7alawaaa

Script to generate thousands of fake commits across different dates using Node.js.  
Perfect for customizing your GitHub contribution graph 🍭

## 📦 Project Structure

```
7alawaaa/
│
├── index.js       # Main script file to create commits
├── data.json      # Stores date info for each commit
├── package.json   # Node.js project config
└── package-lock.json
```

## 🛠️ Setup Instructions

1. **Create a private repository** on GitHub.
2. **Clone** your repo locally:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
3. **Initialize your project:**
   ```bash
   npm init -y
   ```
4. In your `package.json`, under `"main": "index.js",` add:
   ```json
   "type": "module",
   ```
5. **Create the files**:
   ```bash
   touch index.js data.json
   ```
6. **Install dependencies**:
   ```bash
   npm install jsonfile moment random simple-git
   ```
7. **Copy the contents** of `index.js` from this repo.
8. **Run the script**:
   ```bash
   node index.js
   ```

> 💡 The script creates random dates within the past year and commits them.  
> If you want fixed dates, search online for similar scripts or modify this one.

## ⚠️ Disclaimer

This project is for **educational and fun purposes** only. Avoid abusing contribution stats.

## ✅ Example Output

You’ll see something like:
```
Committing for date: 2024-09-05T12:34:56+01:00
Committing for date: 2024-10-21T08:12:33+01:00
...
```

## 👨‍💻 Author

Created by [LE_H]  
Inspired by GitHub commit art 💚
