export const getAllNews = async () => {
  const response = await fetch(process.env.HOST_NAME + "/api/news")
  if (!response.ok) throw new Error('Unable to fetch news')
  return response.json();
}