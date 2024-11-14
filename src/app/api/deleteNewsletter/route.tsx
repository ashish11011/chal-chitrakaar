import { connect } from "@/dbConfig/dbConfig";
import Newsletter from "@/models/newsletterModel";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id } = body;

  console.log(id);
  connect();

  try {
    await Newsletter.updateOne({ _id: id }, { $set: { isDeleted: true } });
  } catch (error) {
    console.log(error);
    return new Response("Error deleting contact", { status: 500 });
  }
  return new Response("Contact deleted successfully", { status: 201 });
}
