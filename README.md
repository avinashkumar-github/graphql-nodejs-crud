# graphql-nodejs-crud

## Run the file node index.js

## Navigate to localhost:4000

## On the left hand side add the query and click on the play button to see the response from GraphQL server

### Create Query

mutation {
createComment(title: "Test comment", author: 1, post: 1) {
id
title
author {
name
}
}
}

### Read Query

query {
comments{
id
title
}
}

### Update query

mutation {
updateComment(
id:1
data:{title : "Test from avinash"}
){
id
title
}
}

### Delete query

mutation {
deleteComment(id : 1){
id
title
}
}
