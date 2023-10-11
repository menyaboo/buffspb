export const getAllScenes = async () => {
  const response = await fetch("https://menyaboo.github.io/buffspb/api/scenes")
  if (!response.ok) throw new Error('Unable to fetch scenes')
  return response.json();
}