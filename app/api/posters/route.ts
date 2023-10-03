import {NextResponse} from "next/server";
import {posters} from "./posters";

export async function GET(req: Request) {
  return NextResponse.json(posters)
}