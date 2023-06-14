const url = 'https://api.tvmaze.com/people'

export async function getPeople() {
    const respuesta = await fetch(`${url}`)
    const people = await respuesta.json()
    return people
}