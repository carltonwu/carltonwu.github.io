class myNav extends HTMLElement {
  connectedCallback() {
    document.head.innerHTML+='<meta name="robots" content="noindex">'
    this.innerHTML = `
      <nav class="main-nav transparent stick-fixed wow-menubar">
          <div class="full-wrapper relative clearfix">

              <!-- Logo ( * your text or image into link tag *) -->
              <div class="nav-logo-wrap local-scroll">
                  <a href="index.html" class="logo">
                  Carlton Wu</a>
              </div>

              <!-- Mobile Menu Button -->
              <div class="mobile-nav" role="button" tabindex="0">
                  <i class="fa fa-bars"></i>
                  <span class="sr-only">Menu</span>
              </div>

              <!-- Main Menu -->
              <div class="inner-nav desktop-nav">
                  <ul class="clearlist">

                      <!-- Item -->
                      <li>
                          <a href="index.html">Home </a>
                      </li>
                      <!-- End Item -->

                      <!-- Item -->
                      <li>
                          <a href="aboutme.html" >About Me </a>
                      </li>
                      <!-- End Item -->

                      <!-- Item -->
                      <li>
                          <a href="projects.html">Projects </a>
                      </li>
                      <!-- End Item -->

                      <!-- Item -->
                      <li>
                          <a href="resume.html">Resume </a>
                      </li>
                      <!-- End Item -->

                      <!-- Item -->
                      <li>
                          <a href="contact.html">Contact </a>
                      </li>
                      <!-- End Item -->

                  </ul>
              </div>
              <!-- End Main Menu -->

          </div>
      </nav>
    `
  }
}

class myLogotypes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="small-section pt-20 pb-20">
        <div class="container relative">

            <div class="row wow fadeInUpShort">
                <div class="col-md-12">

                    <div class="small-item-carousel black owl-carousel mb-1">

                        <!-- Logo Item -->
                        <div class="logo-item">
                            <img src="images/logo/python.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                        <!-- Logo Item -->
                        <div class="logo-item">
                          <img src="images/logo/c.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                        <!-- Logo Item -->
                        <div class="logo-item">
                          <img src="images/logo/cpp.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                        <!-- Logo Item -->
                        <div class="logo-item">
                          <img src="images/logo/java.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                        <!-- Logo Item -->
                        <div class="logo-item">
                          <img src="images/logo/javascript.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                        <!-- Logo Item -->
                        <div class="logo-item">
                          <img src="images/logo/react.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                        <!-- Logo Item -->
                        <div class="logo-item">
                          <img src="images/logo/html.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                        <!-- Logo Item -->
                        <div class="logo-item">
                          <img src="images/logo/css.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                        <!-- Logo Item -->
                        <div class="logo-item">
                          <img src="images/logo/git.png" width="300px" height="180px" alt="Company Name" />
                        </div>
                        <!-- End Logo Item -->

                    </div>

                 </div>
             </div>

         </div>
    </section>
    `
  }
}
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="page-section bg-gray-lighter footer pb-50 pb-sm-20 pt-50">
          <div class="container">

              <!-- Social Links -->
              <div class="footer-social-links mb-50 mb-xs-30">
                  <a href="https://github.com/carltonwu" title="GitHub" target="_blank"><i class="fab fa-github"></i> <span class="sr-only">GitHub profile</span></a>
                  <a href="https://www.linkedin.com/in/carlton-wu/" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i> <span class="sr-only">LinkedIn profile</span></a>
              </div>
              <!-- End Social Links -->

              <!-- Footer Text -->
              <div class="footer-text">
                  <div class="footer-made">
                    <br>
                    <a href="contact.html" class="btn btn-mod btn-gray btn-circle">Get in touch.</a>
                  </div>

              </div>
              <!-- End Footer Text -->

           </div>

           <!-- Top Link -->
           <div class="local-scroll">
               <a href="#top" class="link-to-top"><i class="link-to-top-icon"></i><span class="sr-only">Scroll to top</span></a>
           </div>
           <!-- End Top Link -->

      </footer>
    `
  }
}

customElements.define('my-nav', myNav)
customElements.define('my-logotypes', myLogotypes)
customElements.define('my-footer', myFooter)
