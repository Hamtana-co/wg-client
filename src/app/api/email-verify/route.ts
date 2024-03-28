import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { api } from "@/common";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  return api
    .post("/auth/verify-email", {
      email: formData.get("email"),
      code: formData.get("code"),
    })
    .then((response) => {
      if (response.status === 200) {
        return NextResponse.json(
          { user: response.data.user },
          {
            status: response.status,
          }
        );
      }
    })
    .catch((error: AxiosError) => {
      return NextResponse.json(
        { status: error.response?.status || 500 },
        { status: error.response?.status || 500 }
      );
    });
}
