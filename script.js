// FETCH TWO API DATA USE ONE OUTPUT INSIDE OTHER IS THE TASK
// KEY POINT OT NOTE IS DATA O/P PATH IS VERY IMPORTANT


// Async await function

const getData = async () =>

// async function getData()

{
    try{
        const res = await fetch("https://random-word-api.herokuapp.com/word?number=1");

        const data = await res.json();

        console.log(data);

        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=iLH7U1VMy343fTNkUTM0QS7QMjLCM948&q=${data}&limit=3&offset=0&rating=g&lang=en`)    
    
        const data1 = await resp.json();    
        
        let image = document.createElement("img");
        image.src = data1.data[0].images.original.url;
        image.style.width="400px"
        image.style.maxHeight="800px"
        document.body.appendChild(image);   

        // (data1.data[0].images.original.url);
        
        console.log(data1);

        

    }catch(err){ console.log(err, "unable to fetch data")}
}

console.log(getData())


