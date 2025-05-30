const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic: {
    type: String,
    required: true,
    default:
      "https://imgs.search.brave.com/845m5jkbt4oTNtFQfgGDszqvpu52qS1kznU0mY1kv-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzQ3LzUwLzAy/LzM2MF9GXzEyNDc1/MDAyNzJfa0pCNWNw/TU9IZ2J6ZlhlcWcy/c3B5dERsVE1JNko3/elQuanBn",
  },
});
