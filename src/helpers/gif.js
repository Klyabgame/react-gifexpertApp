 export const gif=async(n)=>{
    const url= `https://api.giphy.com/v1/gifs/search?q=${n}&limit=10&api_key=Rnh0E7qkelgFQWa2NfwsILYroXBG1XHg`;
    const resp=await fetch(url);
    const {data}=await resp.json();
    const Dgifs= data.map((d)=>{
        return {
            id:d.id,
            title:d.title,
            url:d.images.downsized_medium.url
        }
    })
    
    return Dgifs;
}