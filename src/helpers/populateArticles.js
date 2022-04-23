export function populateCategories(categories, articles = []) {
  const copyCategories = [...categories];

  articles.forEach((article) =>
    article.categories.forEach((categoryId) => {
      const category = copyCategories.find((cat) => cat.id === categoryId);
      category.articles.push(article);
    }),
  );
  return copyCategories;
}

export function selectArticlesForCategory(categoryId, articles = []) {
  return articles.filter((article) =>
    article.categories.includes(Number(categoryId)),
  );
}
