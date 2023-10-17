import {NextResponse} from "next/server";
import {news} from "../news";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const poster = news[+id - 1]
  return NextResponse.json(poster);
}