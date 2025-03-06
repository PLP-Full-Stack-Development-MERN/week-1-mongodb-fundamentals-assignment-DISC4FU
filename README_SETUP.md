# MongoDB Setup and Usage Guide

## Prerequisites
Ensure you have the following installed on your system:
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
- [MongoDB Compass (Optional)](https://www.mongodb.com/products/compass)
- Git (for pushing your work to GitHub)
- VS Code (for writing and managing your project files)

## Step 1: Install MongoDB
1. Download MongoDB Community Edition from the official website.
2. Run the installer and select **"Install MongoDB as a service"**.
3. Choose "Run service as Network Service User" (recommended).
4. Complete the installation and restart your system if necessary.

## Step 2: Start MongoDB Server
1. Open **Command Prompt (cmd)** or **PowerShell**.
2. Run the following command to start the MongoDB server:
   ```bash
   mongod
   ```
3. If you get a "command not recognized" error, add MongoDB's `bin` directory to your system's `PATH` variable.

## Step 3: Verify MongoDB Installation
Run the following command to check if MongoDB is running:
```bash
mongo --version
```
If MongoDB is installed correctly, it will display the version number.

## Step 4: Create a Database and Collection
1. Open the **MongoDB shell** by typing:
   ```bash
   mongo
   ```
2. Create a new database called `library`:
   ```javascript
   use library
   ```
3. Create a collection named `books` and insert sample data:
   ```javascript
   db.books.insertMany([
     { title: "Book 1", author: "Author A", publishedYear: 1999, genre: "Fiction", ISBN: "12345" },
     { title: "Book 2", author: "Author B", publishedYear: 2005, genre: "Non-fiction", ISBN: "67890" }
   ])
   ```

## Step 5: Query Data
Retrieve all books:
```javascript
db.books.find().pretty()
```
Find books by a specific author:
```javascript
db.books.find({ author: "Author A" })
```
Find books published after 2000:
```javascript
db.books.find({ publishedYear: { $gt: 2000 } })
```

## Step 6: Update Data
Update the published year of a specific book:
```javascript
db.books.updateOne({ ISBN: "12345" }, { $set: { publishedYear: 2020 } })
```
Add a new field `rating` to all books:
```javascript
db.books.updateMany({}, { $set: { rating: 5 } })
```

## Step 7: Delete Data
Delete a book by its ISBN:
```javascript
db.books.deleteOne({ ISBN: "12345" })
```
Remove all books of a particular genre:
```javascript
db.books.deleteMany({ genre: "Fiction" })
```

## Step 8: Indexing for Performance
Create an index on the `author` field:
```javascript
db.books.createIndex({ author: 1 })
```

## Step 9: Aggregation Pipeline
Find the total number of books per genre:
```javascript
db.books.aggregate([
  { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
])
```
Calculate the average published year of all books:
```javascript
db.books.aggregate([
  { $group: { _id: null, avgYear: { $avg: "$publishedYear" } } }
])
```
Identify the top-rated book:
```javascript
db.books.find().sort({ rating: -1 }).limit(1)
```

## Step 10: Push Your Work to GitHub
1. Initialize a Git repository:
   ```bash
   git init
   ```
2. Add all files to the repository:
   ```bash
   git add .
   ```
3. Commit the changes:
   ```bash
   git commit -m "Initial commit with MongoDB setup instructions"
   ```
4. Link to your GitHub repository:
   ```bash
   git remote add origin <your-repo-url>
   ```
5. Push the changes:
   ```bash
   git push -u origin main
   ```

## Testing
Use **MongoDB Compass** or the **MongoDB shell** to verify your inserted and updated records.

---
### 🎯 Congratulations! You have successfully set up and run a MongoDB database on Windows.

