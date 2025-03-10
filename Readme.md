
# 802 Owner's Manual

The Repository is for the 802 Owner's Manual in html/xml format.

Please contact Mark for access to modify the files in this repository.



## What is this anyways?

Historically, these documents have been written and maintained in normal word processors like MSWord and WordPerfect.

These documents are getting too large and need to be better organized which makes maintenance with MSWord, very difficult or impossible.

Organizing all the content into HTML files allows for easier editing of individual sections.

The document is compiled from the HTML files into a single page that is then rendered for print using the Paged.js javscript library.

DocDef.js is the javascript script that links and orders all of the individual sections into a single document.

## Styles

Inline styling of elements needs to be limited in the HTML files or it will be difficult to maintain.  Generally, all the styling should be in elementStyling.css which is in the css folder.

Certain Paged.js related styles relating to pagination and headers and things like that are in pagedjs.css and should not be modified.

## Rules of Thumb

The html files should be as small as practical.  A single paragraph is perfectly acceptable.
The overarching idea is that these small files can eventually be organized and reused in other documents to avoid copying and pasting.


## Images

We need to standardize the shape and formatting of images that are in the document.

Currently acceptable shapes are:

    | Width(in) | Height(in)    |
    |-----------|---------------|
    | 6.0       | 8.0           |
    | 3.0       | 2.0           |


## Caution and Warning Boxes

The standard caution and warning boxes are:

small: 3in wide x Content Height\
medium: 4.5in wide x Content Height\
large: 6in wide x Content Height

Each size has corresponding css classes that should be applied.

For a small box, html markup is as follows:
```html
<div class="boxCautionSmall">
    <p class="boxCautionSmallHeader">CAUTION</p>
    <p class="boxCautionSmallText">Caution's text goes here.</p>
</div>
```

# Paged.js Notes
## Page Number Counters
Page number counters are finnicky.
To track individual section counters, it works best to declare a counter against the body in css:
```css
body{
    counter-reset: CounterName
}
```
Then use the header elements class to increment the counter.  
```css
.descriptionHeaderRight {
    counter-increment: CounterName;
}

.descriptionHeaderLeft {
    counter-increment: CounterName;
}
```
If you try to add a new custom counter that increments on @page, pagedjs has a runtime error.