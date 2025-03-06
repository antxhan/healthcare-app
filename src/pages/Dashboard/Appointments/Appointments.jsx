import { useState } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Button from '../../../components/Button/Button';
import CardList from '../../../components/CardList/CardList';
import Card from '../../../components/Card/Card';

export default function Appointments() {
  const [cardInformation] = useState([
    {
      name: 'Karolinska Institutet',
      information: [
        {
          'Date & Time': 'March 2, 2025 1PM',
          Doctor: 'Jane Doe',
          Department: 'X-Ray Department',
        },
      ],
      footerButtons: ['Reschedule'],
    },
  ]);

  return (
    <>
      <PageTitle title={'Appointments'}>
        <Button isPrimary={true} text={'Book'} />
      </PageTitle>
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
