function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
                We provide online accountancy services to UK businessess
              </h1>
              <p class="mt-3">
                Whether you are an Individual, Sole Trader, Limited Company, Small Business, Freelancer, Contractor, Partnership, Landlord or Start Up we have the online accounting package for you.
              </p>
            </div>
            <div class="btns-group mt-3">
              <a class="button btn-theme-default" href="/contact-us.html">Contact Us</a>
              
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center"
          >
            <img class="" src="./Images/iqhero.png" alt="" id="" />
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
