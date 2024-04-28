// post.model.js
const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate-v2');
const { paginate } = require('./plugins');

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// postSchema.plugin(mongoosePaginate);
postSchema.plugin(paginate);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
