function WhoWeHelp() {
  const WhoWeHelp = document.getElementById("who-we-help");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">Who we help!</h2>
  <p class="">
    We provide Comprehensive accountancy services for every business type, whether you're an Individual, Sole Trader, Limited Company, Small Business, Freelancer, Contractor, Partnership, Landlord or Start Up we have the online accounting package for you.

  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center ">
      <img class="icon-image img-fluid" src="./Images/iqtick.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Individual</div>
      <div class="description text-center">
        Simplicity and complete accounting support for an unbeatable price
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img class="icon-image img-fluid" src="./Images/iqtick.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Sole Trader</div>
      <div class="description text-center">
        Simplicity and complete accounting support for an unbeatable price
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img class="icon-image img-fluid" src="./Images/iqtick.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Limited Company</div>
      <div class="description text-center">
        Expert accounting assistance for your growing business
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img class="icon-image img-fluid" src="./Images/iqtick.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Small Business</div>
      <div class="description text-center">
        Expert accountancy services for small-businesses
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img class="icon-image img-fluid" src="./Images/iqtick.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Freelancer</div>
      <div class="description text-center">
       Expert accountancy services for self-employed freelancers
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img class="icon-image img-fluid" src="./Images/iqtick.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Contractors</div>
      <div class="description text-center">
        Experienced accounting services for contractors
      </div>
    </div>
  </div>
</div>
    `;
  WhoWeHelp.appendChild(Container);
}
WhoWeHelp();
