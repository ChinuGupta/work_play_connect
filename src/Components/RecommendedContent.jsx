const RecommendedContent = ({ content }) => {
    return (
      <div className="card shadow-sm border-light rounded">
        <div className="card-body">
          <h5 className="card-title text-primary">{content.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{content.company}</h6>
          <p className="card-text text-secondary"><strong>Duration:</strong> {content.duration}</p>
          <p className="card-text">{content.description}</p>
        </div>
      </div>
    );
  };
  
  export default RecommendedContent;
  