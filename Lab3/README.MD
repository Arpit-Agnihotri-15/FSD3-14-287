# http Module

* HTTP:Hyper Text transfer protocol 
* HTML:Hyper Text Markup Language 
* CSS:Cascading Style Sheet 
* npm:Non package management

## HTTP Status Code

| Code | Status |
|------|--------|
| 200  | OK |
| 201  | Created |
| 400  | Bad Request |
| 401  | Unauthorized |
| 403  | Forbidden |
| 404  | Not Found |

# API

> Any API can be of 4 types (CRUD)
* Post - Create
* Get - Read 
* Put/ Patch - Update
* Delete - Delete

> API can be responsed by server with status code and JSON data
* API generally starts with ex:-
* /api/v1/products
* /api/v2/products/2169
* /api/...
> by default the browser can check only GET request; to check other 3 request types like (POST/ PUT/ DELETE) we require frontend or third party API tester like postman, thunderclient, echoapi
   
Not exactly. **`Content-Type` is not a function**, and it doesn't ask the user to store anything.

A better definition is:

> ## Content-Type

`Content-Type` is an HTTP response header that tells the browser what type or format of data is being sent by the server.

It is **not a function** and it does not ask the user to store a file.

### Example

```js
res.setHeader("Content-Type", "text/html")

#Server can send followinf types of data
1. html content
2. html files
3. json data
4. plain text
5. css
6. jss
7. file

## Server can set Header to send data
1. res.statusCode()
2. res.writeHead()

#request methods
1. get
2.post
3.put.patch
4. delete
