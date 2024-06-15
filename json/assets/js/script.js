fetch("assets/json/data.json")
    .then(Response => Response.json())
    .then(data => {
        // console.log(data);
        let x = "";
        for (let keys of data) {
            // console.log(keys)
            x += `
               <div class="col-lg-3">
            <div class="card">
                <img class="card-img-top" src="${keys.image}" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">${keys.name}</h4>
                    <p class="card-text">${keys.price}</p>
                    <p class="card-text">${keys.description}</p>

                </div>
            </div>
            
        </div>
            `
        }
        document.querySelector(".row").innerHTML = x;
    })