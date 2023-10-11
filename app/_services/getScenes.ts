export const getAllScenes = async () => {
  const response = await fetch("http://localhost:3000/api/scenes", {
    next: {
      revalidate: 10
    }
  })

  return response.json();
}