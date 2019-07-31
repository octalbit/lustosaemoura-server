'use strict';
module.exports = function(app) {
  const post = require('../controllers/postController');

  // post Routes
  app.route('/posts')
    .get(post.list_all_posts)
    .post(post.create_a_post);

  app.route('/posts/:postId')
    .get(post.read_a_post)
    .put(post.update_a_post)
    .delete(post.delete_a_post);
};