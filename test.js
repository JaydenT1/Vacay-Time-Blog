export const onRequest = async(context) => {
    const body = await context.request.json()
    const {fName} = body

    if (fName){
        return new Response(fName)
    } else {
        return new Response("Bye!")
    }
}
