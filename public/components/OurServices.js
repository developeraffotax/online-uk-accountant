function OurServices() {
    const OurServices = document.getElementById("our-services");
    const Container = document.createElement("div");
    const BG = document.createElement("div");

    Container.classList.add("container");
    BG.classList.add("hero-bg");
  
    Container.innerHTML = `
   <div class="services-container-homepage">
        <h1>Our Amazing Services</h1>
        <div class="services-grid">
            <div class="service-item">
                
                <h2>Company Formation✅</h2>
                
            </div>
            <div class="service-item">
                
                <h2>Bookkeeping✅</h2>
                
            </div>
            <div class="service-item">
                
                <h2>Accounts✅</h2>
                
            </div>
            <div class="service-item">
                
                <h2>Corporation Tax✅</h2>
                
            </div>

             <div class="service-item">
                
                <h2>Self-Assessment✅</h2>
                
            </div>

             <div class="service-item">
                
                <h2>Payroll Services✅</h2>
                
            </div>

             <div class="service-item">
                
                <h2>VAT Services✅</h2>
                
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
  