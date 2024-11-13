import { connect } from "@/dbConfig/dbConfig";
import Newsletter from "@/models/newsletterModel";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  connect();
  try {
    await Newsletter.create(body);
  } catch (error) {
    console.log(error);
    return new Response("Error submitting contact form", { status: 500 });
  }
  return new Response("Newsletter form submitted successfully", {
    status: 201,
  });
}
