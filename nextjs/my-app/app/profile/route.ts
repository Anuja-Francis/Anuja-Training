import {type NextRequest} from "next/server"
import {headers, cookies} from "next/headers"

export async function name(request:NextRequest) {
    const requestHeaders = new Headers(request.headers)
    console.log(requestHeaders.get("Authorization"))

    const headerList = await headers()
    console.log(headerList.get("Authorization"))

    const theme = request.cookies.get("theme")
    console.log(theme)

    const cookieStore = await cookies()
    cookieStore.set("resultsPerPage","20")
    console.log(cookieStore.get("resultsPerPage"))
    
    return new Response("<h1></h1>Profile API data", {
        headers: {
            "content-Type": "text/html",
            "set-Cookie": "theme=dark"
        }
    })
}