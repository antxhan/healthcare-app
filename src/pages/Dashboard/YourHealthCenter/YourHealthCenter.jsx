import { useState } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import CardList from '../../../components/CardList/CardList';
import Card from '../../../components/Card/Card';

export default function YourHealthCenter() {
  const [cardInformation] = useState([
    {
      name: 'Flemingsbergs Vårdcentral',
      information: [
        {
          Address: 'Röntgenvägen 3, 141 52 Huddinge',
          Phone: '08-123 425 00',
        },
      ],
      footerButtons: ['Change'],
    },
  ]);

  return (
    <>
      <PageTitle title={'Your Health Center'} />
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
