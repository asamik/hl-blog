
$(document).ready(function() {

  let postsUrl = 'https://raw.githubusercontent.com/babelthuap/hayalab-blog/master/posts.json';
  let $postsDiv = $('#posts');

  $.get(postsUrl)
      .done(function(data) {
        console.log('data:', data);
        let posts = JSON.parse(data);
        for (let post of posts) {
          let $post = $('<div>');
          
          let $title = $('<h3>');
          $title.text(post.title);
          $post.append($title);

          let $content = $('<p>');
          $content.text(post.content);
          $post.append($content);

          $postsDiv.append($post);
        }
      })
      .fail(function(err) {
        console.log('There was an error fetching posts:', err);
      });

});
