import { connect } from "@/dbConfig/dbConfig";
import { ContactUs } from "@/models/contactUsModel";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id } = body;
  connect();

  try {
    await ContactUs.updateOne({ _id: id }, { $set: { isDeleted: true } });
  } catch (error) {
    console.log(error);
    return new Response("Error deleting contact", { status: 500 });
  }
  return new Response("Contact deleted successfully", { status: 201 });
}
