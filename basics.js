"use library";
db.createCollection("books")
db.books.insertMany([
    { title: "Book A", author: "Author 1", publishedYear: 1999, genre: "Fiction", ISBN: "111-111" },
    { title: "Book B", author: "Author 2", publishedYear: 2005, genre: "Science", ISBN: "222-222" },
    { title: "Book C", author: "Author 1", publishedYear: 2010, genre: "Fiction", ISBN: "333-333" },
    { title: "Book D", author: "Author 3", publishedYear: 2015, genre: "History", ISBN: "444-444" },
    { title: "Book E", author: "Author 2", publishedYear: 2022, genre: "Science", ISBN: "555-555" }
  ])
  db.books.find()
  db.books.find({ author: "Author 1" })
  db.books.find({ publishedYear: { $gt: 2000 } })
  db.books.updateOne({ ISBN: "111-111" }, { $set: { publishedYear: 2020 } })
  db.books.updateMany({}, { $set: { rating: 5 } })
  db.books.deleteOne({ ISBN: "111-111" })
  db.books.deleteMany({ genre: "Fiction" })
  db.users.insertMany([
    { name: "Alice", email: "alice@123.com", age: 30 },
    { name: "Bob", email: "bob@456.com", age: 25 }
  ])
  db.products.insertMany([
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" }
  ])
  db.orders.insertMany([
    { userId: ObjectId("67c97efae367585a13fa4219"), productId: ObjectId("67c97f0ce367585a13fa421c"), quantity: 2 }
  ])
  db.books.aggregate([
    { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
  ])
  db.books.aggregate([
    { $group: { _id: null, avgYear: { $avg: "$publishedYear" } } }
  ])
  db.books.find().sort({ rating: -1 }).limit(1)
  db.books.createIndex({ author: 1 })
//benefits of indexing
/* -Speeds up queries on indexed fields
-Reduces scan time when searching for documents 
-Improves performance for large datasets*/ 