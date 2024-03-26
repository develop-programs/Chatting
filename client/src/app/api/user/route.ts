import { Auth } from "@/services/database/models/User.model";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { connect } from "@/services/database/connection";

export async function GET() {
  try {
    await connect();
    const res = await Auth.find();
    return await NextResponse.json(res, { status: 200 });
  } catch (error: any) {
    return await NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(Request: NextRequest) {
  try {
    await connect();
    const body = await Request.json();
    const check = await Auth.findOne({ phone: body.phone });
    if (check) {
      const validate = bcrypt.compareSync(body.password, check.password);
      if (!validate) {
        return NextResponse.json(
          { error: "Invalid Credentials" },
          { status: 400 }
        );
      } else {
        return await NextResponse.json(
          { message: "User already exist" },
          { status: 200 }
        );
      }
    }
    const encrypt = bcrypt.hashSync(body.password, 10);
    const user = {
      username: body.username,
      email: body.email,
      password: encrypt,
      image: body.image,
      phone: body.phone,
      about: body.about,
      online: body.online,
    };
    const res = await Auth.create(user);
    return await NextResponse.json(res, { status: 200 });
  } catch (error: any) {
    return await NextResponse.json({ error: error.message }, { status: 500 });
  }
}
