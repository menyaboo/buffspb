import {NextResponse} from "next/server";
import {news} from "./news";

export async function GET(req: Request) {
  return NextResponse.json(news)
}