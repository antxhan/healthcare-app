import './Card.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function Card({
  isSmall = false,
  title,
  subtitles = [],
  information = [],
  footerButtons = [],
}) {
  const hasZeroRemainingPrescription = information.some(
    (infoObj) => infoObj['Remaining prescription'] === 0
  );

  return (
    <article className={`card ${isSmall ? 'small' : ''}`}>
      <header>
        <h2 className="heading-m">{title}</h2>
        {isSmall && (
          <Link
            to={`/${title.split(' ').join('_').toLowerCase()}`}
            className="btn"
          >
            See all
          </Link>
        )}
      </header>
      <main>
        {isSmall && subtitles.length > 0 && information.length > 0 ? (
          <>
            {subtitles.map((subtitle, index) => (
              <h3 key={index} className="heading-xs">
                {subtitle}
              </h3>
            ))}
            {information.map((infoRow, rowIndex) => (
              <div key={rowIndex} className="card-information-row">
                {infoRow.map((info, colIndex) => (
                  <p key={colIndex}>{info}</p>
                ))}
              </div>
            ))}
          </>
        ) : (
          <>
            {information.map((infoObj) => (
              <>
                {Object.entries(infoObj).map(([key, value]) => (
                  <div key={key} className="card-information-row">
                    <h3 className="heading-xs">{key}</h3>
                    <p>{value}</p>
                  </div>
                ))}
              </>
            ))}
          </>
        )}
      </main>
      <footer>
        {hasZeroRemainingPrescription && (
          <>
            <p>
              We've noticed your prescription for Loratidin is expiring soon. To
              ensure you don't miss a dose, you can quickly renew it here. We'll
              send the request directly to your closest pharmacy.
            </p>
            <div className="footer-buttons">
              <Button text={'Renew'} />
            </div>
          </>
        )}
        {footerButtons.length > 0 && (
          <div className="footer-buttons">
            {footerButtons.map((text, index) => (
              <Button key={text + index} text={text} />
            ))}
          </div>
        )}
      </footer>
    </article>
  );
}
