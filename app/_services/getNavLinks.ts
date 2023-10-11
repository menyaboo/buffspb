export const getNavLinks = async () => {
  const response = await fetch("https://menyaboo.github.io/buffspb/api/nav-links")
  if (!response.ok) throw new Error('Unable to fetch nav-links')
  return response.json();
}