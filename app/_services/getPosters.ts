import { notFound } from 'next/navigation'

export const getAllPosters = async () => {
  const response = await fetch(process.env.HOST_NAME + "/api/posters")
  if (!response.ok) throw new Error('Unable to fetch posters')
  return response.json();
}

export const getOnePoster = async (id: number) => {
  const response = await fetch(process.env.HOST_NAME + `/api/posters/${id}`)
  if (!response.ok) {
    notFound()
  }
  return response.json();
}