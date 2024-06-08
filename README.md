# Music Quote

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a><a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
</p>

https://music-quote.vercel.app/

The project uses React JS as the frontend library and Bootstrap as the CSS framework. The data of the quotes was collected inside a JavaScript array of objects so then it could be randomized when the user clicked on the button. The useState hook was used to rerender the DOM based on the quote selected by the randomizer. Besides that, user can also share the quote on their X/Twitter account directly. The quote text was passed into the X/Twitter intent URL as a query so all they had to do was click the button, and post the tweet.

![Website Preview (shots.so)](https://github.com/faizbyp/music-quote/assets/65883882/424bb658-4316-4790-a933-4f4c125ac595)

## User Stories

1. I can see a wrapper element with a corresponding `id="quote-box"`.

2. Within `#quote-box`, I can see an element with a corresponding `id="text"`.

3. Within `#quote-box`, I can see an element with a corresponding `id="author"`.

4. Within `#quote-box`, I can see a clickable element with a corresponding `id="new-quote"`.

5. Within `#quote-box`, I can see a clickable `a` element with a corresponding `id="tweet-quote"`.

6. On first load, my quote machine displays a random quote in the element with `id="text"`.

7. On first load, my quote machine displays the random quote's author in the element with `id="author"`.

8. When the `#new-quote` button is clicked, my quote machine should fetch a new quote and display it in the `#text` element.

9. My quote machine should fetch the new quote's author when the `#new-quot`e button is clicked and display it in the `#author` element.

10. I can tweet the current quote by clicking on the `#tweet-quote` `a` element. This `a` element should include the `"twitter.com/intent/tweet"` path in its `href` attribute to tweet the current quote.

11. The `#quote-box` wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

## All Tests Passed

Visit the [test deployment](https://mellifluous-frangollo-f9256a.netlify.app/)

![Screenshot of the tests](https://github.com/faizbyp/music-quote/assets/65883882/74740062-1a51-4298-ac3d-146a6da73ce1)

![All tests passed](https://github.com/faizbyp/music-quote/assets/65883882/e87efce8-8175-4261-8275-cceded935650)
