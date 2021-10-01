
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

// Let us add the Github configuration
const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // Providers.Twitter({
    //   clientId: "",
    //   clientSecret: ""
    // }),
    // Providers.Email({
    //   server: {
    //     host: "",
    //     port: "",
    //     auth: {
    //       user: "",
    //       pass: ""
    //     }
    //   },
    //   from: ""
    // })
  ]
}

export default (req, res) => NextAuth(req,res,options)
