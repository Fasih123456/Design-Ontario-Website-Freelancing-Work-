import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Image imports
import Mainimage from "./assets/img/hero-carousel/hero-carousel-1.jpg";
import image2 from "./assets/img/hero-carousel/hero-carousel-2.jpg";
import ConstructionImage1 from "./assets/img/construction/1.jpg";
import ConstructionImage2 from "./assets/img/construction/2.jpg";
import ConstructionImage3 from "./assets/img/construction/3.jpg";
import ConstructionImage4 from "./assets/img/construction/4.jpg";

//CSS imports
import "./css/index.css";
import "./css/main.css";
import "./css/personal.css";

const Home = () => {
  return (
    <div>
      <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <h1>
              Engineers Canada<span></span>
            </h1>
          </a>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a href="index.html" class="active">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">Get A Qoute</a>
              </li>

              <li>
                <a href="projects.html">Services</a>
              </li>
              <li>
                <a href="blog.html">Projects</a>
              </li>
              <li>
                <a href="blog.html">Pricing</a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i class="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" class="hero">
        <div class="info d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Welcome to <span>UpConstruction</span>
                </h2>
                <p data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-delay="200"
                  href="#get-started"
                  class="btn-get-started"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="hero-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="carousel-item active" style={{ backgroundImage: `url(${Mainimage})` }}></div>

          <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </section>

      <main id="main">
        <section id="get-started" class="get-started section-bg">
          <div class="container">
            <div class="row justify-content-between gy-4">
              <div class="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                <div class="content">
                  <h3>Minus hic non reiciendis ea possimus at quia.</h3>
                  <p>
                    Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto
                    ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis.
                    Eum amet fugiat totam nisi possimus ut delectus dicta.
                  </p>
                  <p>
                    Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi
                    labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi
                    cupiditate.
                  </p>
                </div>
              </div>

              <div class="col-lg-5" data-aos="fade">
                <form action="forms/quote.php" method="post" class="php-email-form">
                  <h3>Get a quote</h3>
                  <p>
                    Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum
                    repellendus enim linead sero park flows.
                  </p>
                  <div class="row gy-3">
                    <div class="col-md-12">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div class="col-md-12 ">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div class="col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        name="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>

                    <div class="col-md-12">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your quote request has been sent successfully. Thank you!
                      </div>

                      <button type="submit">Get a quote</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="constructions" class="constructions">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h2>Constructions</h2>
              <p>
                Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id
                ratione ea sunt quis dolorem dolore earum
              </p>
            </div>

            <div class="row gy-4">
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div class="card-item">
                  <div class="row">
                    <div class="col-xl-5">
                      <div
                        class="card-bg"
                        style={{ backgroundImage: `url(${ConstructionImage1})` }}
                      ></div>
                    </div>
                    <div class="col-xl-7 d-flex align-items-center">
                      <div class="card-body">
                        <h4 class="card-title">Eligendi omnis sunt veritatis.</h4>
                        <p>
                          Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                          voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                          veritatis. Officia temporibus illo magnam. Dolor eos et.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div class="card-item">
                  <div class="row">
                    <div class="col-xl-5">
                      <div
                        class="card-bg"
                        style={{ backgroundImage: `url(${ConstructionImage2})` }}
                      ></div>
                    </div>
                    <div class="col-xl-7 d-flex align-items-center">
                      <div class="card-body">
                        <h4 class="card-title">Possimus ut sed velit assumenda</h4>
                        <p>
                          Sunt deserunt maiores voluptatem autem est rerum perferendis rerum
                          blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem
                          architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div class="card-item">
                  <div class="row">
                    <div class="col-xl-5">
                      <div
                        class="card-bg"
                        style={{ backgroundImage: `url(${ConstructionImage3})` }}
                      ></div>
                    </div>
                    <div class="col-xl-7 d-flex align-items-center">
                      <div class="card-body">
                        <h4 class="card-title">Error beatae dolor inventore aut</h4>
                        <p>
                          Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae
                          facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at
                          architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div class="card-item">
                  <div class="row">
                    <div class="col-xl-5">
                      <div
                        class="card-bg"
                        style={{ backgroundImage: `url(${ConstructionImage4})` }}
                      ></div>
                    </div>
                    <div class="col-xl-7 d-flex align-items-center">
                      <div class="card-body">
                        <h4 class="card-title">Expedita voluptas ut ut nesciunt</h4>
                        <p>
                          Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum
                          eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint
                          ratione dolores. Aut aliquid ea dolores libero nobis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="services section-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h2>Services</h2>
              <p>
                Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet
                deleniti fignissimos eos quam
              </p>
            </div>

            <div class="row gy-4">
              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="service-item  position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-mountain-city"></i>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus
                    dolores iure perferendis tempore et consequatur.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">
                    Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-arrow-up-from-ground-water"></i>
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti
                    neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">
                    Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-compass-drafting"></i>
                  </div>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui
                    id voluptas adipisci eos earum corrupti.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">
                    Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-trowel-bricks"></i>
                  </div>
                  <h3>Asperiores Commodit</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error
                    ea fuga sit provident adipisci neque.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">
                    Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-helmet-safety"></i>
                  </div>
                  <h3>Velit Doloremque</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis
                    aut. Sed animi at autem alias eius labore.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">
                    Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-arrow-up-from-ground-water"></i>
                  </div>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis
                    iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">
                    Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" class="projects">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h2>Our Projects</h2>
              <p>
                Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui
                vel architecto accusamus fugit aut qui distinctio
              </p>
            </div>

            <div
              class="portfolio-isotope"
              data-portfolio-filter="*"
              data-portfolio-layout="masonry"
              data-portfolio-sort="original-order"
            >
              <ul class="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" class="filter-active">
                  All
                </li>
                <li data-filter=".filter-remodeling">Remodeling</li>
                <li data-filter=".filter-construction">Construction</li>
                <li data-filter=".filter-repairs">Repairs</li>
                <li data-filter=".filter-design">Design</li>
              </ul>

              <div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/remodeling-1.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Remodeling 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/remodeling-1.jpg"
                        title="Remodeling 1"
                        data-gallery="portfolio-gallery-remodeling"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/construction-1.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Construction 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/construction-1.jpg"
                        title="Construction 1"
                        data-gallery="portfolio-gallery-construction"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/repairs-1.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Repairs 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/repairs-1.jpg"
                        title="Repairs 1"
                        data-gallery="portfolio-gallery-repairs"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/design-1.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Design 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/design-1.jpg"
                        title="Repairs 1"
                        data-gallery="portfolio-gallery-book"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/remodeling-2.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Remodeling 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/remodeling-2.jpg"
                        title="Remodeling 2"
                        data-gallery="portfolio-gallery-remodeling"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/construction-2.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Construction 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/construction-2.jpg"
                        title="Construction 2"
                        data-gallery="portfolio-gallery-construction"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/repairs-2.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Repairs 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/repairs-2.jpg"
                        title="Repairs 2"
                        data-gallery="portfolio-gallery-repairs"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/design-2.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Design 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/design-2.jpg"
                        title="Repairs 2"
                        data-gallery="portfolio-gallery-book"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/remodeling-3.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Remodeling 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/remodeling-3.jpg"
                        title="Remodeling 3"
                        data-gallery="portfolio-gallery-remodeling"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/construction-3.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Construction 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/construction-3.jpg"
                        title="Construction 3"
                        data-gallery="portfolio-gallery-construction"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/repairs-3.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Repairs 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/repairs-3.jpg"
                        title="Repairs 2"
                        data-gallery="portfolio-gallery-repairs"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                  <div class="portfolio-content h-100">
                    <img src="assets/img/projects/design-3.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Design 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/projects/design-3.jpg"
                        title="Repairs 3"
                        data-gallery="portfolio-gallery-book"
                        class="glightbox preview-link"
                      >
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <a href="project-details.html" title="More Details" class="details-link">
                        <i class="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div>
        <footer id="footer" class="footer">
          <div class="footer-content position-relative">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="footer-info">
                    <h3>UpConstruction</h3>
                    <p>
                      A108 Adam Street <br />
                      NY 535022, USA
                      <br />
                      <br />
                      <strong>Phone:</strong> +1 5589 55488 55
                      <br />
                      <strong>Email:</strong> info@example.com
                      <br />
                    </p>
                    <div class="social-links d-flex mt-3">
                      <a href="#" class="d-flex align-items-center justify-content-center">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="#" class="d-flex align-items-center justify-content-center">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="#" class="d-flex align-items-center justify-content-center">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="#" class="d-flex align-items-center justify-content-center">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Product Management</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                  <h4>Hic solutasetp</h4>
                  <ul>
                    <li>
                      <a href="#">Molestiae accusamus iure</a>
                    </li>
                    <li>
                      <a href="#">Excepturi dignissimos</a>
                    </li>
                    <li>
                      <a href="#">Suscipit distinctio</a>
                    </li>
                    <li>
                      <a href="#">Dilecta</a>
                    </li>
                    <li>
                      <a href="#">Sit quas consectetur</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                  <h4>Nobis illum</h4>
                  <ul>
                    <li>
                      <a href="#">Ipsam</a>
                    </li>
                    <li>
                      <a href="#">Laudantium dolorum</a>
                    </li>
                    <li>
                      <a href="#">Dinera</a>
                    </li>
                    <li>
                      <a href="#">Trodelas</a>
                    </li>
                    <li>
                      <a href="#">Flexo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-legal text-center position-relative">
            <div class="container">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>UpConstruction</span>
                </strong>
                . All Rights Reserved
              </div>
              <div class="credits"></div>
            </div>
          </div>
        </footer>

        <a href="#" class="scroll-top d-flex align-items-center justify-content-center">
          <i class="bi bi-arrow-up-short"></i>
        </a>

        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>

        <script src="assets/js/main.js"></script>
      </div>
    </div>
  );
};

export default Home;
