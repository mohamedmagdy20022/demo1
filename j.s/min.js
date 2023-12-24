
function NewQuote() {
    var addData = [`“If you tell the truth, you don't have to remember anything.”`, `“Always forgive your enemies; nothing annoys them so much.”`, `“To live is the rarest thing in the world. Most people exist, that is all.”`, `“A friend is someone who knows all about you and still loves you.” `, `“So many books, so little time.” `, `“A room without books is like a body without a soul.” `];

    var lastdata = [`― Mark Twain`, `― Oscar Wilde `, `― Oscar Wilde `, `― Elbert Hubbard `, `― Frank Zappa`,`― Marcus Tullius Cicer `];

    var container = Math.floor(Math.random() * lastdata.length);

    document.querySelector("#demo-1").innerHTML = addData[container];

    document.querySelector("#demo-2").innerHTML = lastdata[container];
}
