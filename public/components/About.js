function CTA() {
  const CTA = document.getElementById("about-us");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
<section class="py-3 py-md-5  ">
  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" src="./Images/iqabout.png" alt="About 1">
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <h2 class="mb-3 text-white text-5xl font-[poppins]">About Us</h2>
            <p class="text-light mb-3">Online Accountant Ltd is a UK-based accountancy firm specializing in cloud accounting and bookkeeping services. We help businesses streamline their finances using Xero, QuickBooks Online (QBO), and other leading cloud-based accounting software. Our expert team ensures accurate bookkeeping, financial reporting, and seamless integration of digital accounting tools. We focus on efficiency, automation, and real-time financial insights to support business growth. With a client-centric approach, we provide tailored solutions to meet the unique needs of small and medium-sized enterprises. At Online Accountant Ltd, we make cloud accounting simple, efficient, and stress-free.</p>
            <p class="text-light mb-5"><span class="font-bold">Vision  At Online Accountant Ltd, </span>our vision is to be the leading provider of innovative and seamless online accounting solutions. We strive to empower businesses of all sizes with efficient, technology-driven financial management services that enhance productivity, foster growth, and ensure financial clarity. Our goal is to redefine the accounting industry by making financial processes more accessible, transparent, and automated, enabling businesses to focus on their core operations while we handle their financial needs with expertise and precision.</p>
            <div class="row gy-4 gy-md-0 gx-xxl-5X">
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" class="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                  <div>
                    <h2 class="h4 mb-3 text-white">Expertise</h2>
                    <p class="text-light mb-0">Our team consists of qualified accountants with extensive industry experience.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" class="bi bi-fire" viewBox="0 0 16 16">
                      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                    </svg>
                  </div>
                  <div>
                    <h2 class="h4 mb-3 text-white">24/7 Support</h2>
                    <p class="text-light mb-0">Our experts are available 24/7 to help you out and grow your business!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




        <!-- Mission Section -->
        <section class="bg-white/60 shadow-lg rounded-lg p-12 mb-8">
            <h2 class="text-3xl font-semibold text-start text-cyan-600 mb-6 font-[poppins]">Our Mission</h2>
            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                Our mission at <strong>Online Accountant Ltd</strong> is to deliver reliable, efficient, and scalable online accounting solutions tailored to the evolving needs of modern businesses. We are committed to:
            </p>
            <ul class="list-disc pl-8 text-lg text-gray-700 space-y-2 text-sm">
                <li>Leveraging the latest digital tools to streamline accounting processes and enhance financial decision-making.</li>
                <li>Providing exceptional client service through a team of dedicated and skilled professionals.</li>
                <li>Ensuring accuracy, efficiency, and security in financial data management.</li>
                <li>Empowering businesses to optimize their financial performance through strategic insights and innovative accounting solutions.</li>
                <li>Continuously adapting to industry advancements to offer cutting-edge accounting support that drives success and sustainability.</li>
            </ul>
        </section>

        <!-- Partnerships Section -->
        <section class="bg-white/60 shadow-lg rounded-lg p-12 mb-12">
            <h2 class="text-3xl font-semibold text-start text-cyan-600 mb-6 font-[poppins]">Our Partnerships</h2>
            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                At <strong>Online Accountant Ltd</strong>, we believe that strong partnerships are the foundation of sustainable business success. We collaborate with a diverse network of technology providers, financial institutions, and business consultants to offer our clients comprehensive and forward-thinking accounting solutions. Our partnerships enable us to:
            </p>
            <ul class="list-disc pl-8 text-lg text-gray-700 space-y-2 text-sm ">
                <li>Integrate advanced accounting software and cloud-based financial tools for enhanced service delivery.</li>
                <li>Work closely with industry experts to provide up-to-date financial insights and best practices.</li>
                <li>Foster long-term relationships with businesses, helping them navigate financial challenges and achieve their goals.</li>
                <li>Enhance our service offerings through strategic collaborations, ensuring that our clients receive the best possible support for their financial operations.</li>
            </ul>
            <p class="text-lg leading-relaxed text-gray-700 mt-6">
                Through our vision, mission, and strong partnerships, <strong>Online Accountant Ltd</strong> is dedicated to revolutionizing online accounting, empowering businesses, and fostering financial success in an ever-evolving digital landscape.
            </p>
        </section>



       
       <div class="w-full flex flex-row gap-8 justify-between items-start "mb-8 >


       <!-- Who We Are Section -->
        <section id="who-we-are" class="  p-8 mb-8 w-[50%]">
            <h2 class="text-3xl font-semibold text-start text-white mb-6 font-[poppins]">Who We Are</h2>
            <p class="text-lg leading-relaxed text-gray-700">
                At <strong>Online Accountant Ltd</strong>, we are passionate about providing reliable, efficient, and scalable online accounting solutions tailored to the unique needs of modern businesses. Our dedicated team of professionals is committed to ensuring that your financial data is managed with accuracy and security.
            </p>
        </section>



         <!-- Meet Our Team Section -->
        <section id="meet-our-team" class="  p-8 mb-8 w-[40%]">
            <h2 class="text-5xl font-semibold text-center text-white/80 mb-6 font-[poppins]">Meet Our Team</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                <div class="text-center">
                    <img src="./Images/person.png" alt="Team Member" class="w-32 h-32 rounded-full mx-auto mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Saba Amanat</h3>
                    <p class="text-gray-600">CEO & Founder</p>
                </div>
                <div class="text-center">
                    <img src="./Images/person.png" alt="Team Member" class="w-32 h-32 rounded-full mx-auto mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Daniel Rhodes

</h3>
                    <p class="text-gray-600">Director </p>
                </div>
              
            </div>
        </section>




        </div>










    </div>

     


  </div>
</section>
  `;
  CTA.appendChild(Container);
}
CTA();
