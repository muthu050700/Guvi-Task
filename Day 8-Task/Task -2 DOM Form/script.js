let forContainer = document.querySelector(".container");
let forMainContent = document.querySelector(".main-content");

//For Background
let forBackGround = document.createElement("div");
forBackGround.setAttribute("class", "background-img");
forContainer.append(forBackGround);
//For Title
let forHeader = document.createElement("div");
forHeader.setAttribute("class", "head");
forHeader.innerHTML = `<h1 id="title">Food Order Form</h1>`;
forContainer.append(forHeader);

//For Description
let forDescribtion = document.createElement("div");
forDescribtion.setAttribute("class", "head-con");
forDescribtion.innerHTML = `<p id="description">The purpose of this webpage is to collect the information from the user and to display that information in a clearly in table format.</p>`;
forContainer.append(forDescribtion);

//For Content
let forMainCon = document.createElement("div");
forMainCon.setAttribute("class", "form-con");
forMainCon.setAttribute("id", "theForm");
let forForm = document.createElement("form");
forForm.setAttribute("id", "form");
forForm.innerHTML = `
<div class = "form-group">
<div class="input-box">
            <label for="firstname">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your firstname"
              name="firstname"
              required
            />
          </div>
          <div class="input-box">
            <label for="lastname">lastname</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your lastname"
                   required
            />
          </div>
              <div class="food-cate">
            <label for="food">Coice of food</label>
            <select id="food" name="food" required>
              <option hidden>Food Category</option>
              <option value="Briyani" id="briyani">Briyani</option>
              <option value="Friedrice">Fried Rice</option>
              <option value="Noodles">Noodles</option>
              <option value="Parrotta">Parrotta</option>
              <option value="sadwich">sadwich</option>
            </select>
          </div>
          <div class="input-box">
            <label for="address">Address</label>
            <textarea  type="textarea" id="address" placeholder="Enter your address" required/></textarea>
          </div>
          <div class="input-box">
            <label for="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              placeholder="Enter your pincode"
              required
            />
          </div>
          <div class="input-box">
            <label for="state">State</label>
            <input type="text" id="state" placeholder="Enter your state" required/>
          </div>
          <div class="input-box">
            <label for="country">Country</label>
            <input type="text" id="country" placeholder="Enter your country" />
          </div>
          <div class="gender-details">
            <span class="gender-title">Gender</span>
            <div class="gender-cate">
              <input type="radio" name="gender" id="male" value ="male"/>
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value ="female"/>
              <label for="female">female</label>
            </div>
          </div>
          <button class="btn btn-primary" id="submit">submit</button>
        
</div>
          
`;
forMainCon.append(forForm);
forContainer.append(forMainCon);
// class="remove"
let forTableContainer = document.querySelector(".table-container");
forTableContainer.innerHTML = `
<div class=" remove table">
 <table id="table">
    <caption>
    Details of the customer
    </caption>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Choice of food</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>state</th>
        <th>Country</th>
        <th>Gender</th>
      </tr>
    </table>
</div>
   
`;
let formAction = document.querySelector("#form");
formAction.addEventListener("submit", function (event) {
  event.preventDefault();
  let firstName = document.querySelector("#first-name").value;
  let lastName = document.querySelector("#last-name").value;
  let foodSeletion = document.querySelector("#food").value;
  let address = document.querySelector("#address").value;
  let state = document.querySelector("#state").value;
  let country = document.querySelector("#country").value;
  let pincode = document.querySelector("#pincode").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let table = document.querySelector("#table");
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6);
  let cell8 = row.insertCell(7);
  cell1.innerText = firstName;
  cell2.innerText = lastName;
  cell3.innerText = foodSeletion;
  cell4.innerText = address;
  cell5.innerText = pincode;
  cell6.innerText = state;
  cell7.innerText = country;
  cell8.innerText = gender;
  if (document.querySelector(".remove").classList.contains("table")) {
    document.querySelector(".remove").classList.remove("table");
  }
  formAction.reset();
});
