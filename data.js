 class Data {

    getData() {
        fetch("http://localhost:3333/products")
        .then((result) => {
            return result.json();
        }
        )

        .then((data) => {
            let results = ``;
        
            data.forEach((user) => {
                const{productId ,  productName , productCode , releaseDate , description , price , starRating , imageUrl} = user
                results +=
                `
                    <tr>
                        <td>  ${productId}</td>
                        <td>  ${productName}</td>
                        <td>  ${releaseDate} </td>
                        <td>  ${productCode} </td>
                        <td>  ${description} </td>
                        <td>  ${price} </td>
                        <td>  ${starRating} </td>
                        <td>  ${imageUrl}</td>
                    </tr>
                 </tbody>`;
                   document.querySelector("tbody").innerHTML = results;
            }
            )
        }
        )
        .catch(function(error){
            console.log(error);
        })
    } 
}


let d = new Data();

document.body.onload = () => {
    d.getData();
}



  
