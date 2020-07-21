//query - current search term
//suggestion - suggest search term
//pages - details search response
/*
    {
    "numberOfProducts": 194,
    "start": 0,
    "productsLn": 12,
    "rows": 12,
    "noOfPages": 17,
    "currentPage": 1,
    "isNext": true,
    "isPrev": false
    }
*/
const didYouMeanUI =  function(query,suggestion,pages) {
    const {
        start,
        productsLn,
        numberOfProducts
    } = pages;
    const {
        selectorClass
    } = this.options.spellCheck
    const noUi = (suggestion) ? `<p class="UNX-no-result">Search instead for <button class="${selectorClass}">${suggestion}</button></p>` :``;
    let qUi = ``;
    if(pages && query){
        qUi = `<p class="UNX-suggestion">Showing results for <strong>${query}</strong> <span class="UNX-result-info"> - ${start} to ${productsLn+start} of ${numberOfProducts} products</span></p>`;
    }
    return  [`<div class="UNX-spellcheck-block">`,
            qUi,
        `${noUi}</div>`].join('');
}
export default didYouMeanUI
