/* code before refactoring*/

"use client";

import { Carousel, Row, Col, Button } from 'react-bootstrap';

function CarouselComponent() {
  const carouselItems = [
    {
      id: 1,
      title: 'What is the Science Portal?',
      description: 'Welcome to the Science Portal Take home test! \n\n The MSF Science Portal is a digital platform for Médecins Sans Frontières to share the medical evidence we gather as part of our medical humanitarian work aiding people and communities affected by conflict, epidemics, disasters, or exclusion from health services. Here you will find the peer-reviewed journal articles, MSF/Epicentre Scientific Days conference materials and other expert content that emerges from the hundreds of research studies and analyses we do each year, all aimed at improving patient care and advocating for evidence-based policy and practices. The site also features curated collections of our work in specific medical topics and ongoing crises, providing good entry points into what is often a large amount of relevant content in a given area.',
      imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/styles/crop_article_desktop_1238_529/public/image_base_media/2019/05/MSF134504.jpg?itok=keKI0rga',
      linkUrl: '/instructions',
      linkTitle: 'Submission Details'
    },
    {
      id: 2,
      title: 'Instructions',
      description: 'The project is built using Next.js and React, with TypeScript support. It uses Bootstrap and React Bootstrap for styling and components. A successful submission will be one where the individual carousel slides have been broken out accordingly. \n\n The slides should be broken out in a manner that extracts the first slide into its own component and has it displayed prominently above the other slides. The other slides should be converted into a general card component, which when clicked reveals the associated text as dropdown text. These card components should be arranged in a grid layout. ',
      imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/styles/crop_article_mobile_335_189/public/image_base_media/2022/06/MSB127143.jpg?itok=nIKK3T18',
      linkUrl: '/instructions',
      linkTitle: 'Submission Details'
    },
    {
        id: 3,
        title: 'Third Slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Nulla facilisi. Maecenas non lectus in lacus varius venenatis. Proin sagittis, nisi in tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc.',
        imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/MSF163911%28High%29_0.jpg',
        linkUrl: '/instructions',
        linkTitle: 'Submission Details'
      },
      {
        id: 4,
        title: 'Fourth Slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Nulla facilisi. Maecenas non lectus in lacus varius venenatis. Proin sagittis, nisi in tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. \n\n Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod.',
        imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/MSF152109.jpg',
        linkUrl: '/instructions',
        linkTitle: 'Submission Details'
      }
  ];

  return (
    <section>
      <Carousel variant="dark" indicators={false} touch={false}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <Row className="align-items-center">
              <Col lg={6} sm={12} xs={12}>
                <div className="image-container">
                  <img
                    className="img-fluid py-2 pl-lg-5 mx-auto d-block max-proportions"
                    alt={item.title}
                    src={item.imageSrc}
                    height={250}
                    width={450}
                  />
                </div>
              </Col> 
              <Col lg={6} sm={12} xs={12} className="py-2 pr-lg-5 ps-sm-5">
                <h3 className="text-left text-dark px-4 ms-sm-2 ms-md-0 ps-sm-3">{item.title}</h3>
                <Row className="text-left text-dark pr-lg-5 carousel-description overflow-auto" style={{ maxHeight: '200px' }}>
                  <span className="text-left ps-sm-3 preserve-newlines">{item.description}</span>
                </Row>
                <Row className="align-content-start">
                  <Col className="button-container ms-3 ps-sm-4">
                    <Button
                      href={item.linkUrl}
                      className="pill-btn"
                      target="_self"
                      rel="noreferrer"
                    >
                      {item.linkTitle}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default CarouselComponent;
