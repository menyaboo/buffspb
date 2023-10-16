import {NextResponse} from "next/server";
import {posters} from "../posters";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const poster = posters[+id - 1]
  return NextResponse.json(poster);
}