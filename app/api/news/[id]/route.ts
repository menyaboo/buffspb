import {NextResponse} from "next/server";
import {news} from "../news";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  let result = news[0]

  for (let i= 0; i < news.length; i++) {
    console.log(news[i])
    if (+id === news[i].id) {
      return NextResponse.json( result = news[i]);
    }
  }
}