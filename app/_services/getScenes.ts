export const getAllScenes = async () => {
  const response = await fetch(process.env.HOST_NAME + "/api/scenes")
  if (!response.ok) throw new Error('Unable to fetch scenes')
  return response.json();

}