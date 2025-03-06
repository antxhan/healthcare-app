import { useState } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import CardGrid from '../../../components/CardGrid/CardGrid';
import Card from '../../../components/Card/Card';

export default function Home() {
  const [cardInformation] = useState([
    {
      name: 'Appointments',
      subtitles: ['Date & Time', 'Location'],
      information: [['March 2, 2025 1PM', 'Karlolinska Institutet']],
    },
    {
      name: 'Medication',
      subtitles: ['Name', 'Dosage'],
      information: [
        ['EpiPen', 'When needed'],
        ['Loratidin', '2 times daily'],
      ],
    },
    {
      name: 'Record',
      subtitles: ['Date & Time', 'Title'],
      information: [
        ['May 1, 2023 2PM', 'Bone surgery'],
        ['April 1, 2023 2PM', 'X-ray visit'],
      ],
    },
    {
      name: 'Messages',
      subtitles: ['Date & Time', 'Title'],
      information: [['May 1, 2023 2PM', 'New perscription for you']],
    },
    {
      name: 'Results',
      subtitles: ['Date & Time', 'Title'],
      information: [['May 1, 2023 2PM', 'Blood test']],
    },
    {
      name: 'Your Health Center',
      subtitles: ['Name', 'Address'],
      information: [
        ['Flemingsbergs Vårdcentral', 'Röntgenvägen 3, 141 52 Huddinge'],
      ],
    },
  ]);

  return (
    <>
      <PageTitle title={'Home'} />
      <CardGrid>
        {cardInformation.map((card) => (
          <Card
            key={card.name}
            isSmall={true}
            title={card.name}
            subtitles={card.subtitles}
            information={card.information}
          />
        ))}
      </CardGrid>
    </>
  );
}
