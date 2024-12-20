//fetch , load and show categories on html

//1. create load categories
//2.  create DisplayCategories

//step-1
const handleLoadCategories = () => {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// step 2
const displayCategories = (categories) => {
  const categoriesDiv = document.getElementById("categories");
  //add data in html
  categories.forEach((item) => {
    //create btn
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoriesDiv.appendChild(button);
  });
  //

  
};
handleLoadCategories();
