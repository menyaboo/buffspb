export const getAllNews = async () => {
  const response = await fetch("http://localhost:3000/api/news", {
    next: {
      revalidate: 10
    }
  })

  return response.json();
}