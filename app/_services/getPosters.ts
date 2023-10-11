export const getAllPosters = async () => {
  const response = await fetch(process.env.HOST_NAME + "/api/posters")
  if (!response.ok) throw new Error('Unable to fetch posters')
  return response.json();
}