"use client";

import { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import Image from 'next/image';

interface CardComponentProps {
  item: {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
  };
}

function CardComponent({ item }: CardComponentProps) {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <Card className="h-100">
      <Image
        src={item.imageSrc}
        alt={item.title}
        width={450}
        height={250}
        layout="responsive"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item.title}</Card.Title>
        <Button
          onClick={handleToggle}
          aria-controls={`collapse-text-${item.id}`}
          aria-expanded={open}
          className="mt-auto"
        >
          {open ? 'Hide Details' : 'Learn more'}
        </Button>
        <Collapse in={open}>
          <div id={`collapse-text-${item.id}`}>
            <Card.Text className="mt-3">{item.description}</Card.Text>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;