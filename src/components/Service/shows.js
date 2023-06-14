const url = 'https://api.tvmaze.com/shows'

export async function getShows() {
    const respuesta = await fetch(`${url}`)
    const people = await respuesta.json()
    return people
}