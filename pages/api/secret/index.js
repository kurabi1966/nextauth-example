import { getSession } from "next-auth/client";

export default async (req,res) => {
  const session = await getSession({req})

  if(session){
    res.send({
      content: "Secret content of the secret page"
    });
  } else {
    res.send({
      error: "You are not Authorized to access this page. You need to sign in first"
    });
  }
}