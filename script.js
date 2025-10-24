let addbutton = document.getElementById("addpopup");
      let overlay = document.querySelector(".overlay");
      let popupbox = document.querySelector(".popupbox");
      addbutton.addEventListener("click", show);
      function show() {
        overlay.style.display = "block";
        popupbox.style.display = "block";
      }

      let cancelpopup = document.getElementById("cancelpopup");
      cancelpopup.addEventListener("click", function (event) {
        event.preventDefault();
        overlay.style.display = "none";
        popupbox.style.display = "none";
      });
      overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        popupbox.style.display = "none";
      });

      let addbook = document.getElementById("addbook");

      let container = document.querySelector(".container");
      addbook.addEventListener("click", function (event) {
        event.preventDefault();

        let booktitle = document.getElementById("booktitle").value.trim();
        let bookauthor = document.getElementById("bookauthor").value.trim();
        let bookdescription = document
          .getElementById("bookdescription")
          .value.trim();
        if (booktitle === "" || bookauthor === "" || bookdescription === "") {
          return; // stop execution
        }
        let newdiv = document.createElement("div");
        newdiv.setAttribute("class", "bookbox");
        newdiv.innerHTML = ` <h2>${booktitle}</h2>
        <h4>${bookauthor}</h4>
        <p>
          ${bookdescription}
        </p>
        <button onclick="del(event)">Delete</button>`;
        container.appendChild(newdiv);
        document.getElementById("booktitle").value = "";
        document.getElementById("bookauthor").value = "";
        document.getElementById("bookdescription").value = "";
        overlay.style.display = "none";
        popupbox.style.display = "none";
      });

      function del(event) {
        event.target.parentElement.remove();
      }