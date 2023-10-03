import {NextResponse} from "next/server";
import {navLinks} from "./navLinks";

export async function GET(req: Request) {
  return NextResponse.json(navLinks)
}