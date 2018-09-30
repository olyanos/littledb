var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ----------------------------
// YOUR CODE
db.defaults({ posts: [] })
  .write();

  var posts = db.get('posts');
// add post
// ----------------------------
// YOUR CODE
posts.push({title:'cool',id:'1',published:'false'}).write();
// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
