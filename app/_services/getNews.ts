import { notFound } from "next/navigation";

export const getAllNews = async () => {
  try {
    const response = await fetch(process.env.HOST_NAME + "/api/news")
    return response.json();
  } catch (e) {
    return console.log(e)
  }
}

export const getOneNews = async (id: number) => {
  try {
    const response = await fetch(process.env.HOST_NAME + `/api/news/${id}`)
    if (!response.ok) notFound()
    return response.json();
  } catch (e) {
   return console.log()
  }
}
