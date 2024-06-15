fetch("https://dummyjson.com/products")
    .then(Respons => Respons.json())
    .then(Mydata => {
        // console.log(Mydata);
        let x = "";
        for (let key in Mydata) {
            // console.log(Mydata[key])
            Mydata[key].forEach(element => {
                console.log(element.price)
                x += `
                    <div class="col-lg-3 mt-3" >
                        <div class="card">
                            <img class="card-img-top" src="${element.thumbnail}" alt="Title" />
                            <div class="card-body">
                                <h4 class="card-title">${element.title}</h4>
                                <p class="card-text">$:${element.price}</p>
                                <p class="card-text">${element.description}</p>

                            </div>
                        </div>
                        </div>
            `
                document.querySelector('.row').innerHTML = x;
            });
        }
        // console.log(x)

    })