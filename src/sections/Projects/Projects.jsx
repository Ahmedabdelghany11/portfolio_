import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import projects from "../../data/projects";

import "./_projects.scss";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* ================================
            Header
        ================================= */}

        <div className="projects__header">
          <SectionTitle subtitle="Selected Work" title="Projects" />

          <p className="projects__intro">
            A selection of web applications and digital products I've worked on
            using modern frontend technologies.
          </p>
        </div>

        {/* ================================
            Carousel
        ================================= */}

        <div className="projects__carousel">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            className="projects__swiper"
            centeredSlides
            loop={projects.length > 2}
            grabCursor
            watchSlidesProgress
            speed={650}
            spaceBetween={14}
            slidesPerView={1.55}
            slideToClickedSlide
            navigation={{
              prevEl: ".projects__nav-prev",
              nextEl: ".projects__nav-next",
            }}
            pagination={{
              el: ".projects__pagination",
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },

              600: {
                slidesPerView: 1.15,
                spaceBetween: 14,
                centeredSlides: true,
              },

              900: {
                slidesPerView: 1.45,
                spaceBetween: 14,
                centeredSlides: true,
              },

              1200: {
                slidesPerView: 1.55,
                spaceBetween: 14,
                centeredSlides: true,
              },

              1500: {
                slidesPerView: 1.65,
                spaceBetween: 16,
                centeredSlides: true,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="projects__slide">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ================================
              Carousel Controls
          ================================= */}

          <div className="projects__controls">
            <button
              type="button"
              className="projects__nav projects__nav-prev"
              aria-label="Previous project"
            >
              <span aria-hidden="true">←</span>
            </button>

            <div
              className="projects__pagination"
              aria-label="Projects pagination"
            />

            <button
              type="button"
              className="projects__nav projects__nav-next"
              aria-label="Next project"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
