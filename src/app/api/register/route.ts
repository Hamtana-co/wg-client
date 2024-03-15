import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { api } from "@/common";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  return api
    .post("/auth/register", {
      email: formData.get("email"),
      password: formData.get("password"),
    })
    .then((response) => {
      if (response.status === 200) {
        // Save cookies
        cookies().set("token", response.data.token);
        cookies().set("user", JSON.stringify(response.data.user));

        // Set token to axios header
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        return NextResponse.json(
          { user: response.data.user },
          {
            status: response.status,
            headers: {
              "Set-Cookie": `token=${
                response.data.token
              }; user=${JSON.stringify(response.data.user)}`,
            },
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
