export const getAllScenes = async () => {
  try {
    const response = await fetch(process.env.HOST_NAME + "/api/scenes")
    return response.json();
  }
  catch (e) {
    return console.log(e)
  }
}