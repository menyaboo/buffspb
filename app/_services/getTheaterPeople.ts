import { notFound } from 'next/navigation'

export const getAllTheaterPeople = async () => {
  try {
    const response = await fetch(process.env.HOST_NAME + "/api/theater-people")
    return response.json();
  } catch (e) {
    return console.log(e)
  }
}

export const getOneTheaterPeople = async (id: number) => {
  try {
    const response = await fetch(process.env.HOST_NAME + `/api/theater-people/${id}`)
    if (!response.ok) notFound()
    return response.json();
  } catch (e) {
    return console.log(e)
  }
}

export const getTheaterPeopleByGrope = async (grope: string) => {
  try {
    const response = await fetch(process.env.HOST_NAME + `/api/theater-people/?grope=${grope}`)
    return response.json();
  } catch (e) {
    return console.log(e)
  }
}