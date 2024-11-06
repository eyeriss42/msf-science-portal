"use client";

import { Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const mainSlideData = {
  id: 1,
  title: 'What is the Science Portal?',
  description: 'Welcome to the Science Portal Take home test! \n\n The MSF Science Portal is a digital platform for Médecins Sans Frontières to share the medical evidence we gather as part of our medical humanitarian work aiding people and communities affected by conflict, epidemics, disasters, or exclusion from health services. Here you will find the peer-reviewed journal articles, MSF/Epicentre Scientific Days conference materials and other expert content that emerges from the hundreds of research studies and analyses we do each year, all aimed at improving patient care and advocating for evidence-based policy and practices. The site also features curated collections of our work in specific medical topics and ongoing crises, providing good entry points into what is often a large amount of relevant content in a given area.',
  imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/styles/crop_article_desktop_1238_529/public/image_base_media/2019/05/MSF134504.jpg?itok=keKI0rga',
  linkUrl: '/instructions',
  linkTitle: 'Submission Details'
};

function MainSlide() {
  const { title, description, imageSrc, linkUrl, linkTitle } = mainSlideData;

  return (
    <Row className="Main-slide align-items-center">
      <Col lg={6} sm={12} xs={12}>
        <div className="image-container">
          <Image
            src={imageSrc}
            alt={title}
            width={450}
            height={250}
            style={{ width: '100%', height: 'auto' }}
            className="py-2 pl-lg-5 mx-auto d-block max-proportions"
            priority
          />
        </div>
      </Col>
      <Col lg={6} sm={12} xs={12} className="py-2 pr-lg-5 ps-sm-5 d-flex flex-column">
        <h3 className="text-left text-dark px-4 ms-sm-2 ms-md-0 ps-sm-3">{title}</h3>
        <Row className="text-left text-dark pr-lg-5 carousel-description overflow-auto" style={{ maxHeight: '400px' }}>
          <span className="text-left ps-sm-3 preserve-newlines">{description}</span>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <Button
              href={linkUrl}
              className="pill-btn"
              rel="noreferrer"
            >
              {linkTitle}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MainSlide;