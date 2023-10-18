import { notFound } from 'next/navigation'

export const getAllPosters = async () => {
  try {
    const response = await fetch(process.env.HOST_NAME + "/api/posters")
    return response.json();
  } catch (e) {
    return console.log(e)
  }
}

export const getOnePoster = async (id: number) => {
  try {
    const response = await fetch(process.env.HOST_NAME + `/api/posters/${id}`)
    if (!response.ok) notFound()
    return response.json();
  } catch (e) {
    return console.log(e)
  }

}