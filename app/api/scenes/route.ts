import {NextResponse} from "next/server";
import {scenes} from "./scenes";

export async function GET(req: Request) {
  return NextResponse.json(scenes)
}