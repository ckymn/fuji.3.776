import React from "react";

const Card = ({ title, cardDate, document, image }) => {
  return (
    <div>
      <div className="card">
        <div class="collapse" id="collapseExample">
          <div className="card-body" >
            <img src={image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{document}</p>
            <p className="card-text">
              <small className="text-muted">
                {`${cardDate.getDate()} / ${cardDate.getMonth()} / ${cardDate.getFullYear()}`}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
