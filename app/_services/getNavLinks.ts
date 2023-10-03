export const getNavLinks = async () => {
  const response = await fetch("http://localhost:3000/api/nav-links", {
    next: {
      revalidate: 10
    }
  })

  return response.json();
}