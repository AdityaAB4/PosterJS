document.getElementById("btn-search").addEventListener("click", showPoster);

function showPoster(Search) {
  //    const name = document.getElementById('inputval').value;
  const name = document.querySelector(".form-control").value;

  fetch("http://www.omdbapi.com/?s=" + name + "&apikey=9fba416a")
    .then((res) => res.json())
    .then((data) => {
      if (data.Error === "Movie not found!") {
        //Show Alert
        alerterr = `<div class="alert alert-dismissible alert-danger" style="width=1000px">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Oh snap!</strong> <a  class="alert-link">Something went wrong :( </a><strong>Please try another search!</strong>
      </div>`;
        document.getElementById("alertid").innerHTML = alerterr;
      } else {
        console.log(data.Search[0]);
        output = `
          <img src="${data.Search[0].Poster}" style="margin-top:20px; margin-left:90px;" >
          
          `;
        document.querySelector(".col-md-10").innerHTML = output;
      }
    });

  Search.preventDefault();
}


