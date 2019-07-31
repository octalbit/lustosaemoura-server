'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
  title: {
    type: String,
    required: 'Necessary enter the title of the post'
  },
  subtitle: {
    type: String,
    required: 'Necessary enter the subtitle of the post'
  },
  description: {
    type: String,
    required: 'Necessary enter the description of the post'
  },
  author: {
    type: String,
    required: 'Necessary enter the author of the post'
  },
  url_movie: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);
