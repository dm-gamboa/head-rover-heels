// Inserts HTML-escaped text into a given selector with a given parentNode
export const insertText = (parentNode, selector, text) => {
    const element = parentNode.querySelector(selector);
    element.appendChild(document.createTextNode(text));
}