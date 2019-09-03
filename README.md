# Code Challenge

Using a json file, given an input of products, design a page that:

* Consumes the JSON of products
* Builds the product details page with all products
* Displays the product details, including price, product name and the main hero image
* Interacts intuitively; if you click on the image, you should see an overlay with a carousal of all thumbnail images

## Getting Started

First you will need to download/clone the repo.

### Installing

Next you will need to install Node.js and Grunt.

You can find information on how to download Node.js and Grunt from their websites.

* <https://nodejs.org/en/>
* <https://gruntjs.com/>

After installing Node.js and Grunt open up your command line

and navigate to the repo you downloaded.

in your command line type:

```
npm install
```

### Start Local Sever and View Page

in your command line type:

```
grunt connect
```

open up your web browser and go to localhost:8000

### Test

The web page is responsive and when you click the product a lightbox effect
will show the product with the thumbnails. Hovering the thumbnails will change
the main image and on mobile clicking the thumbnails will change the main image.
