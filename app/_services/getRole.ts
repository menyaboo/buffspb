export const getAllRole = async () => {
  const response = await fetch(process.env.HOST_NAME + "/api/role")
  if (!response.ok) throw new Error('Unable to fetch posters')
  return response.json();
}