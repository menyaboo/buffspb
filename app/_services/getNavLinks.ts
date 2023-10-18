export const getNavLinks = async () => {
  try {
    const response = await fetch(process.env.HOST_NAME + "/api/nav-links")
    return response.json();
  }
  catch (e) {
    return console.log(e)
  }

}