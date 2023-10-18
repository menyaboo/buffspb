import {NextResponse} from "next/server";
import {theaterPeople} from "../theaterPeople";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  let result = theaterPeople[0]

  for (let i= 0; i < theaterPeople.length; i++) {
    if (+id === theaterPeople[i].id) {
      return NextResponse.json( result = theaterPeople[i]);
    }
  }
}