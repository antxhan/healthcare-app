import { useState } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import CardList from '../../../components/CardList/CardList';
import Card from '../../../components/Card/Card';

export default function Messages() {
  const [cardInformation] = useState([
    {
      name: 'New perscription for you',
      information: [
        {
          'Date & Time': 'March 2, 2025 1PM',
          From: 'Jane Doe',
          Message: 'Hello, its time to renew your prescriptions',
        },
      ],
      footerButtons: ['Show more'],
    },
    {
      name: 'Survey about your last visit to Karolinska Institutet',
      information: [
        {
          'Date & Time': 'May 2, 2025 1PM',
          From: 'Jane Doe',
          Message: 'Dear John Doe, We hope thi...',
        },
      ],
      footerButtons: ['Show more'],
    },
  ]);

  return (
    <>
      <PageTitle title={'Messages'} />
      <CardList>
        {cardInformation.map((card, index) => (
          <li key={card.name + index}>
            <Card
              title={card.name}
              information={card.information}
              footerButtons={card.footerButtons}
            />
          </li>
        ))}
      </CardList>
    </>
  );
}
