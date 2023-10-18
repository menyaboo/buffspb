import {NextResponse} from "next/server";
import {theaterPeople} from "./theaterPeople";
import {role} from "@/app/api/role/role";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('grope');
  let result = theaterPeople;

  if (query) {
    let index = 0
    role.forEach(el => {
      if (el.code?.toLowerCase() === query.toLowerCase()) index = el.id
    })
    result = theaterPeople.filter(people => people.roleId === index)
  }

  return NextResponse.json(result)
}