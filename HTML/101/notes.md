# HTML 101

## HTML forms the structure of all web pages 

HTML --> hyper text markup language 

The <head> tag configures the page and is not rendered by the browser. 
The <title> contains the name of the page and is rendred in the browser's tab. Tags that have opening an closing elements are known as container elements. Tags  that do not have opening and closing elements are not container elements and are called self-closing tags (`/>`). 

To make reading a HTML file easier, lines are nested within their parent element. 

Browsers read HTML and in a sense HTML is a like a big long string. 
Browsers can read files or you can start a server in VS Code with **Go Live**

### Some of the most common elements are:

#### Semantic Elements include 
```
<ul> unordered list
<ol> ordered list
<li> list item, must be contained by a <ul> or an <ol>
<header> the header area of the page
<main> the main area of the page
<body> contains all other HTML elements 
<footer> footer area of the page
<nav> contains navigation elements, usually found inside of <header>
<p> used for a single paragraph of text
<img /> used for images // self closing tag, must have a `src` attribute
<a> anchor tag, used to hyperlink elements
<h1> - h6: header text largest to smallest 
```
#### Generic Elements include 
```
<div> generic containing element
<section> defines a section for child elements 
```
#### Tags used inside <head>
```
<link> used to link stylesheets only found in the <head>
```
