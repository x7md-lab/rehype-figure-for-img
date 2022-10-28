# rehype-figure-for-img

```bash
npm i rehype-figure-for-img
```

# What is this?

rehpye plugin replace [rehype-figure](https://github.com/josestg/rehype-figure) plugin.

because it don't work ~~*at lest with me*~~.

# How to use it with astro?

1. run `npm install rehype-figure-for-img`

2. go to astro.config.mjs 

3. edit javascript object and add 
```js
...
markdown: {
   rehypePlugins: [
        ...
        'rehype-figure-for-img'
   ],
},
...
```

To add a caption to an image, add it to the title section of the markdown. This is separate from the alt text attribute.

```md
![This is the alt text for the image](/img/image.jpg "Here is a caption")
```
This markdown then becomes:
```html
<figure>
    <img src="/img/image.jpg" alt="This is the alt text for the image" />
    <figcaption>Here is a caption</figcaption>
</figure>
```

## Plugin Options

There are options you can add to the plugin. You can add options to the plugin as below:

```js
...
markdown: {
   rehypePlugins: [
        ...
        ['rehype-figure-for-img', { allImages: true }]
   ],
},
...
```

- `allImages`: by default the plugin will only wrap figures around images with a caption, this adds the ability to add figures around all images (and add captions to any that have them)