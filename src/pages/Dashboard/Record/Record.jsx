import { useState } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import CardList from '../../../components/CardList/CardList';
import Card from '../../../components/Card/Card';

export default function Record() {
  const [cardInformation] = useState([
    {
      name: 'Bone surgery',
      information: [
        {
          'Date & Time': 'May 1, 2023 2PM',
          From: 'Jane Doe',
          Message: 'Fix patients broken bones.',
        },
      ],
    },
    {
      name: 'X-ray visit',
      information: [
        {
          'Date & Time': 'April 1, 2023 2PM',
          From: 'Jane Doe',
          Message: 'Took an X-ray, patient has broken bones.',
        },
      ],
    },
    {
      name: 'Hospital visit',
      information: [
        {
          'Date & Time': 'March 1, 2023 2PM',
          From: 'Jane Doe',
          Message: 'Patient noted they had hurt their leg lol.',
        },
      ],
    },
  ]);

  return (
    <>
      <PageTitle title={'Record'} />
      <CardList>
        {cardInformation.map((card, index) => (
          <li key={card.name + index}>
            <Card
              title={card.name}
              information={card.information}
            />
          </li>
        ))}
      </CardList>
    </>
  );
}
