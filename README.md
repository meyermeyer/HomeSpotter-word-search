### Setup
Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```


### Checking the Code
Enter the word search string into the UI.  It needs to be a rectangle (each row has the same number of letters).  Spaces and quotation marks shouldn't break it, but other special characters may.  

### Known Bugs
There is no form validation to confirm submission is valid (see constraints above).
If you hit the 'bonus mode' button more than once, it clears the entries.  You need to perform the search again to re-render them.



