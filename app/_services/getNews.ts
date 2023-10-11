export const getAllNews = async () => {
  const response = await fetch("https://menyaboo.github.io/buffspb/api/news")
  if (!response.ok) throw new Error('Unable to fetch news')
  return response.json();
}