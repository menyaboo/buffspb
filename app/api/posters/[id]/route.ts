import {NextResponse} from "next/server";
import {posters} from "../posters";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  let result = posters[0]

  for (let i= 0; i < posters.length; i++) {
    if (+id === posters[i].id) {
      return NextResponse.json( result = posters[i]);
    }
  }
}