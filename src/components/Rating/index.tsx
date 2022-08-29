import "./styles.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Rating = () => {
  return (
    <main className="container col">
      <section className="container col">
        <article className="review">
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
              alt=""
              id="img"
            />
            <FormatQuoteIcon
              className="fa-quote-right"
              sx={{ width: "40px", height: "40px" }}
            />
          </div>
          <p id="author">User</p>
          <p id="job"></p>
          <p id="info">
            Absolutely great service from the staff. Super friendly when I can
            and picked up the car. I had a one way rental and was charged the
            incorrect mileage at drop off location, I called this location to
            resolve the issue and they were super helpful and quick about it
          </p>
        </article>
      </section>
    </main>
  );
};
export default Rating;
