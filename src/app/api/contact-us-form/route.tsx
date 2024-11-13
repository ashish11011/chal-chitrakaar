import { connect } from "@/dbConfig/dbConfig";
import { ContactUs } from "@/models/contactUsModel";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  connect();
  try {
    await ContactUs.create(body);
  } catch (error) {
    console.log(error);
    return new Response("Error submitting contact form", { status: 500 });
  }
  return new Response("Contact form submitted successfully", { status: 201 });
}
