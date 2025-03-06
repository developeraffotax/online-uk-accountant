function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">





          <div class="col-12 col-md-10 left-section ">
            <div class="brand-logo">
              <a class=" " href="#">
              <img class=" w-24 " src="./Images/logo.png"  alt="logo"  />
                
              </a>
            </div>
            <div class="nav-links d-flex flex-column mt-4">
              
               
              <ul class="nav justify-content-left row-2">
               

                <li class="nav-item">
                  <a class="nav-link" href="/index.html">Home</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/our-services.html">Our Services</a>
                </li>

             
                <li class="nav-item">
                  <a class="nav-link" href="/about-us.html">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact-us.html">Contact Us</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/careers.html">Careers</a>
                </li>
                
              </ul>



            </div>
            <div class="copyrights mt-4 black">
              © 2024 <a class='text-decoration-underline' href="https://onlineukaccountant.co.uk">ONLINE ACCOUNTANT LTD


</a>. All rights reserved
            </div>
          </div>
          
          </div>

          
                  

  <div class="flex space-x-6 mt-4">
    
    <a href="https://www.linkedin.com" target="_blank" class="text-blue-600 hover:text-blue-800 transition duration-300">
       <img src="./Images/li.png" width="40"/>
    </a>
  
    <a href="https://www.facebook.com" target="_blank" class="text-blue-800 hover:text-blue-900 transition duration-300">
       <img src="./Images/fb.png" width="40"/>
    </a>

 
    <a href="https://www.instagram.com" target="_blank" class="text-pink-500 hover:text-pink-600 transition duration-300">
      <img src="./Images/ig.png" width="40"/>
    </a>
  </div>

        </div>

          
  
  `;
  Footer.appendChild(Container);
}
Footer();
