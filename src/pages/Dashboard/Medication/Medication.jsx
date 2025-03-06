import { useState } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import CardList from '../../../components/CardList/CardList';
import Card from '../../../components/Card/Card';

export default function Medication() {
  const [cardInformation] = useState([
    {
      name: 'Loratidin',
      information: [
        {
          Date: 'April 1, 2023',
          From: 'Jane Doe',
          Dosage: '2 times daily',
          'Remaining prescription': 0,
        },
      ],
    },
  ]);

  return (
    <>
      <PageTitle title={'Medication'} />
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
