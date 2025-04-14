function OurServices() {
    const OurServices = document.getElementById("our-services");
    const Container = document.createElement("div");
    const BG = document.createElement("div");

    Container.classList.add("container");
    BG.classList.add("hero-bg");
  
    Container.innerHTML = `
   <div class="services-container-homepage">
        <h1 class="text-5xl pb-6 font-[poppins] ">Our Amazing Services</h1>
        <div class="services-grid mt-3">
              <div class="service-item">
                  
                  <a href="/company-formation.html"><h2>Company Formation✅</h2></a>
                  
              </div>
              <div class="service-item">
                  <a href="/bookkeeping.html"><h2>Bookkeeping✅</h2></a>
                  
                  
              </div>
              
  
              
  
               <div class="service-item">
                <a href="/payroll.html"> <h2>Payroll Services✅</h2></a>
                 
                  
              </div>
  
               <div class="service-item">
                <a href="/vat.html"><h2>VAT Services✅</h2></a>
                  
                  
              </div>
  
               
          </div>
    </div>
      `;


      BG.innerHTML = `
        
        
  `;






    OurServices.appendChild(Container);
    OurServices.appendChild(BG);
  }
  OurServices();
  