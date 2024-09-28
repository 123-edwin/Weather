import PropTypes from 'prop-types';
import './NewsCard.css';

export function NewsCard({ newsData }) {
  return (
    <div className="card">
      {newsData ? (
        <img
          src={newsData.urlToImage}
          alt={newsData.title}
          className="card-image"
        />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
      <div className="card-content">
        <h2 className="card-title">{newsData.title}</h2>
        <p className="card-author">By: {newsData.author || "Unknown"}</p>
        <p className="card-description">{newsData.description}</p>
        <a
          href={newsData?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  newsData: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
};
