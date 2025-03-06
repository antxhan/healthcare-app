import './Card.css';
import { NavLink, Link } from 'react-router-dom';

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
          <Link to={`/${title.split(' ').join('_').toLowerCase()}`}>
            See all
          </Link>
        )}
      </header>
      <main>
        {isSmall && subtitles.length > 0 && information.length > 0 && (
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
        )}
      </main>
    </article>
  );
}
