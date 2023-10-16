import { notFound } from "next/navigation";

export const getAllNews = async () => {
  const response = await fetch(process.env.HOST_NAME + "/api/news")
  if (!response.ok) throw new Error('Unable to fetch news')
  return response.json();
}

export const getOneNews = async (id: number) => {
  const response = await fetch(process.env.HOST_NAME + `/api/news/${id}`)
  if (!response.ok) notFound()
  return response.json();
}
