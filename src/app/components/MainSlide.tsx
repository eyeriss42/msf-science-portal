"use client";

import { Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

interface MainSlideProps {
  title: string;
  description: string;
  imageSrc: string;
  linkUrl: string;
  linkTitle: string;
}

function MainSlide({ title, description, imageSrc, linkUrl, linkTitle }: MainSlideProps) {
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
      <Col lg={6} sm={12} xs={12} className="py-2 pr-lg-5 ps-sm-5">
        <h3 className="text-left text-dark px-4 ms-sm-2 ms-md-0 ps-sm-3">{title}</h3>
        <Row className="text-left text-dark pr-lg-5 carousel-description overflow-auto" style={{ maxHeight: '400px' }}>
          <span className="text-left ps-sm-3 preserve-newlines">{description}</span>
        </Row>
        <Row className="align-content-start">
          <Col className="button-container ms-3 ps-sm-4">
            <Button
              href={linkUrl}
              className="pill-btn"
              target="_self"
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