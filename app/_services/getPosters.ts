export const getAllPosters = async () => {
  const response = await fetch("http://localhost:3000/api/posters", {
    next: {
      revalidate: 10
    }
  })

  return response.json();
}