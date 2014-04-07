# Seamless Iframe

A fallback that emulates the main features of the seamless iframe.

## How it works

> "The browser should render the frame in a way that makes **it appear to be part of the containing document**."

Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#Attributes

## Demo
[See it in action](http://mercadolibre.github.io/seamless-iframe/)

## Features

*Seamless Iframe* will:

- open any anchor in the parent, unless you specify otherwise,
- inherit the CSS declarations from the parent,
- behave as block element, adjusting its size to its content.

## Change log
[See history.md](https://github.com/mercadolibre/seamless-iframe/blob/gh-pages/history.md)

## How to use (parent document)

### CSS
Link to `/dist/seamless-parent.css` file:
```html
<link rel="stylesheet" href="/dist/seamless-parent.css"/>
```
or include its declaration in your CSS:
```css
iframe[seamless] {
    background-color: transparent;
    border: none;
    overflow: hidden;
    padding: 0;
    margin: 0;
}
```

### JavaScript
Link to `/dist/seamless-parent.js` file:
```html
<script src="/dist/seamless-parent.js"></script>
```

### HTML
Include the `seamless` attribute (boolean) to your iframes as [defined by W3C](http://www.w3.org/TR/2011/WD-html5-20110525/the-iframe-element.html#attr-iframe-seamless).

```html
<iframe src="..." seamless></iframe>
```


## How to use (into the iframe)

### CSS
Link to `/dist/seamless-iframe.css` file:
```html
<link rel="stylesheet" href="/dist/seamless-iframe.css"/>
```
or include its declaration in your CSS:
```css
html {
    width: intrinsic; /* Safari/WebKit uses a non-standard name */
    width: -webkit-max-content;
    width: -moz-max-content; /* Firefox/Gecko */
    width: max-content;
    width: fit-content;
}
```

### JavaScript
Link to `/dist/seamless-iframe.js` file:
```html
<script src="/dist/seamless-iframe.js"></script>
```

## TO-DO
- Support IE.
- Continue event bubbling from iframe to the parent document.
- Expose a method that allow to suscribe to the iframe messages to extend the functionality.
- Also [see the issue tracker](https://github.com/mercadolibre/seamless-iframe/issues).

## Support
- Tested in most of mayor browsers.
