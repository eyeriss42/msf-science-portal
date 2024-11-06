"use client";

import { Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';

const gridItems = [
  {
    id: 2,
    title: 'Instructions',
    description: 'The project is built using Next.js and React, with TypeScript support. It uses Bootstrap and React Bootstrap for styling and components. A successful submission will be one where the individual carousel slides have been broken out accordingly. \n\n The slides should be broken out in a manner that extracts the first slide into its own component and has it displayed prominently above the other slides. The other slides should be converted into a general card component, which when clicked reveals the associated text as dropdown text. These card components should be arranged in a grid layout. ',
    imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/styles/crop_article_mobile_335_189/public/image_base_media/2022/06/MSB127143.jpg?itok=nIKK3T18',
  },
  {
    id: 3,
    title: 'Third Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Nulla facilisi. Maecenas non lectus in lacus varius venenatis. Proin sagittis, nisi in tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc.',
    imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/MSF163911%28High%29_0.jpg',
  },
  {
    id: 4,
    title: 'Fourth Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Nulla facilisi. Maecenas non lectus in lacus varius venenatis. Proin sagittis, nisi in tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. \n\n Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod.',
    imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/MSF152109.jpg',
  }
];

function GridComponent() {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
      {gridItems.map(function(item) {
        return (
          <Col key={item.id}>
            <CardComponent
              id={item.id}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default GridComponent;