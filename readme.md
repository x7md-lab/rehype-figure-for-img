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
markdownOptions: {
		render: [
		'@astrojs/markdown-remark',
		{
            rehypePlugins: [
                ...
                // add this
                ['rehype-figure-for-img'],
            ]
		},
		],
	}
...
```