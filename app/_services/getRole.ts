export const getAllRole = async () => {
  try {
    const response = await fetch(process.env.HOST_NAME + "/api/role")
    return response.json();
  } catch (e) {
    return console.log(e)
  }
}