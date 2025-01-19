const items = document.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

const logCategoryContent = items.forEach((item) => {
  item.lastElementChild.classList.add("content-list");
  const heading = item.firstElementChild.textContent;
  console.log(`Category: ${heading}`);
  const itemContent = item.lastElementChild.children;
  console.log(`Elements: ${itemContent.length}`);
});
