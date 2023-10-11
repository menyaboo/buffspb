export const getNavLinks = async () => {

  const response = await fetch(process.env.HOST_NAME + "/api/nav-links")
  if (!response.ok) throw new Error('Unable to fetch nav-links')
  return response.json();
}