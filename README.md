# Utils

## Codice all'interno di un post

Se un post contiene del codice, aggiungere questi script all'interno dell'header:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/typescript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/bash.min.js"></script>
<script src="https://unpkg.com/highlightjs-svelte/dist/svelte.min.js"></script>
```

Questi invece all'interno del footer:

```html
<script src="https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.8.0/dist/highlightjs-line-numbers.min.js"></script>
<script>
  hljs.addPlugin(new CopyButtonPlugin());
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();

  document
    .querySelectorAll("div.content h1, div.content h2, div.content h3, div.content h4")
    .forEach((el) => {
      if (el.id) {
        el.addEventListener("click", () => {
          window.location.hash = el.id;
        });
      }
    });
</script>
```
