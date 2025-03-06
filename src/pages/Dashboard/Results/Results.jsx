import { useState } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import CardList from '../../../components/CardList/CardList';
import Card from '../../../components/Card/Card';

export default function Results() {
  const [cardInformation] = useState([
    {
      name: 'Blood test',
      information: [
        {
          'Date & Time': 'April 1, 2023',
          From: 'Jamie Duder',
          Message: 'Best blood in the business',
        },
      ],
    },
    {
      name: 'Ultrasound',
      information: [
        {
          'Date & Time': 'May 13, 2024',
          From: 'Jamie Dragon',
          Message: 'You are pregnant... with twins.',
        },
      ],
    },
  ]);

  return (
    <>
      <PageTitle title={'Results'} />
      <CardList>
        {cardInformation.map((card, index) => (
          <li key={card.name + index}>
            <Card
              title={card.name}
              subtitles={card.subtitles}
              information={card.information}
            />
          </li>
        ))}
      </CardList>
    </>
  );
}
