"use client";

import { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import Image from 'next/image';

interface CardComponentProps {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
}

//individual card from a grid
function CardComponent({ id, title, description, imageSrc }: CardComponentProps) {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <Card>
      <div style={{ height: '250px', position: 'relative' }}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button
          onClick={handleToggle}
          aria-controls={`collapse-text-${id}`}
          aria-expanded={open}
          className="mt-auto"
        >
          {open ? 'Hide details' : 'Learn more'}
        </Button>
        <Collapse in={open}>
          <div id={`collapse-text-${id}`}>
            <Card.Text className="mt-3">{description}</Card.Text>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;