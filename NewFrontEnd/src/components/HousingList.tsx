import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HouseCard, { PathProps } from './HouseCard';

const HousingList: React.FC = () => {
  const [cards, setCards] = useState<PathProps[]>([]);

  useEffect(() => {
    // fake the api call to get the housing card info
    setCards([
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
      {
        pricePerMonth: 1200,
        roomType: 'Single',
        moveIn: 'Anytime',
        distance: 20,
        address: '8550 Julian Street, 93660',
      },
    ]);
  }, []);

  return (
    <Container fluid>
      <Row>
        {cards.map(({ pricePerMonth, roomType, moveIn, distance, address }) => (
          <Col xs={12} md={6} className="mb-5">
            <HouseCard
              pricePerMonth={pricePerMonth}
              roomType={roomType}
              moveIn={moveIn}
              distance={distance}
              address={address}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HousingList;
