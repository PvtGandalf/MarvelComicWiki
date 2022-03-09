# Marvel API Wiki

This service retrieves data from Marvel's Developer API and provides the user with a simple UI to traverse through Marvel's database.

## Adding your Marvel API Key

1) Go to https://developer.marvel.com/docs and create your Marvel account.

2) After signing up, login and click the "Get a Key" tab to active your API key.

3) After activating your API key, refresh the page then click the "My Developer Account" tab (this replaces "Get a Key").

4) Create .env file within the repo's root directory on your local machine, then add the lines: 

```REACT_APP_MARVEL_API_PUB_KEY = {your public key here}```
<br>
```REACT_APP_MARVEL_API_PRIV_KEY = {your private key here}```

## Project Todo List:
- [x] Create Website Outline
- [x] Create Header and Footer
- [x] Connect to Marvel API
- [x] Display API Data
- [x] Add Loading Spinner
- [x] Create Character Modals
- [x] Implement Character Search by Name
- [x] Implement Pagination for all Characters - [Demo Code](URL "https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js") using [react-paginate](URL "https://www.npmjs.com/package/react-paginate")
- [ ] Develop Comics Page
- [ ] Develop Creators Page
- [ ] Develop Events Page
- [ ] Develop Series Page
