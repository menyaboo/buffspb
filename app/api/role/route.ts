import {NextResponse} from "next/server";
import {role} from "./role";

export async function GET(req: Request) {
  return NextResponse.json(role)
}