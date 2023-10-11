export const getAllPosters = async () => {
  const response = await fetch("https://menyaboo.github.io/buffspb/api/posters")
  if (!response.ok) throw new Error('Unable to fetch posters')
  return response.json();
}