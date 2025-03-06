import './Card.css';
import '../Button/Button.css';
import { Link } from 'react-router-dom';

export default function Card({
  isSmall = false,
  title,
  subtitles = [],
  information = [],
}) {
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
            {information.map((infoObj, index) => (
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
    </article>
  );
}
