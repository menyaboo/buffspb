import { notFound } from 'next/navigation'

export const getAllTheaterPeople = async () => {
  const response = await fetch(process.env.HOST_NAME + "/api/theater-people")
  if (!response.ok) throw new Error('Unable to fetch posters')
  return response.json();
}

export const getOneTheaterPeople = async (id: number) => {
  const response = await fetch(process.env.HOST_NAME + `/api/theater-people/${id}`)
  if (!response.ok) notFound()
  return response.json();
}

export const getTheaterPeopleByGrope = async (grope: string) => {
  const response = await fetch(process.env.HOST_NAME + `/api/theater-people/?grope=${grope}`)
  if (!response.ok) throw new Error('Unable to fetch posters')
  return response.json();
}