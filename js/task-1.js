const liItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItem.length}`);



liItem.forEach((el) => {
    const textLogo = el.querySelector('h2').textContent;
    const liCount = el.querySelectorAll('li').length;
    console.log(`Category: ${textLogo}`)
    console.log(`Elements: ${liCount}`);
});

