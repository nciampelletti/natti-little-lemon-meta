const Special = ({ image, title, text, price }) => {
  return (
    <article className="special-card">
      <div className="special-img-container">
        <img src={image} className="special-img" alt={title} />
      </div>
      <div className="special-info">
        <div className="special-header">
          <span className="special-title">{title}</span>
          <span className="special-price">${price}</span>
        </div>
        <p>{text}</p>
        <div className="special-footer">
          <p>
            Order a delivery
            <span>
              <i class="fa-solid fa-motorcycle"></i>
            </span>
          </p>
        </div>
      </div>
    </article>
  )
}
export default Special
