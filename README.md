
# Image search API

This is a project for free code camp.

This API uses Bing image search. You can search for pictures by putting a keyword inside the url.
You can add an offset query to the url to skip results. You can also view your search history.
### Image search example
Go to https://image-search-yogaboll.herokuapp.com/api/imagesearch/boeing 747?offset=10

You will receive a JSON response with a list of objects. Each object has link to an image, the name of the image file, a link to a thumbnail and a link to the website on which the image was originally displayed. An offset value of 10 means that Bing skipped the first 10 results.

### Search history
Go to https://image-search-yogaboll.herokuapp.com/api/latest

You will receive a list of all the latest searches on this API
