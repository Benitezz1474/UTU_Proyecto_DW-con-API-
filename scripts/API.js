
    let page = 1;
    
        const btn_back = document.getElementById("back");
        const btn_next = document.getElementById("next");
        
        btn_back.addEventListener("click",()=>{
            page += 10;
            window.scrollTo(0,0)
            API_Marvel_result()
            
        })
    
        btn_next.addEventListener("click",()=>{
            page += 10;
            window.scrollTo(0,0)
            API_Marvel_result();
            
            
        })


const API_Marvel=async()=>{

    

    const req = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=9009485fac92633ff6ab8b0f5308ab4e&hash=f640017a5bd67947b7c30f0ca8cbc738&limit=12&offset=${page}`);
    const data = await req.json();

    console.log(data)

    return data.data.results.map((char)=>{
         return {
            id: char.id,
            name: char.name,
            image: char.thumbnail.path
         }
    })
}

const API_Marvel_result =async()=>{
    const container = document.getElementById("container");
    container.innerHTML = "";

    const data = await API_Marvel();
    console.log(data);

    data.map((char) => {
        container.innerHTML += `
        <div class = "card" > 
        <h3> ${char.name} <h3>
        <img src = ${char.image + ".jpg"} />
        </div>


        
        `;
    })
}

API_Marvel_result();