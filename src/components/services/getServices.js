export const getServices = async()=>{
    const res = await fetch('http://localhost:3000/services/api/getAll')
    const services = res.json()
    return services
}
export const getServiceDetails = async(id)=>{
    const res = await fetch(`http://localhost:3000/services/api/${id}`)
    const service = res.json()
    return service
}

