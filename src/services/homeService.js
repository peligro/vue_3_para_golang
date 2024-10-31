export async function getDatosHome()
{
    let respuesta = await fetch(`${import.meta.env.VITE_API_URL}recetas-helpers/home`, {headers: {'content-type':'application/json'}});
    const resultado= await respuesta.json();
    return resultado;
}