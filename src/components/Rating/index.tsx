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
          <p id="author">Bill Anderson</p>
          <p id="job"></p>
          <p id="info">
            Edison bulb put a bird on it humblebrag, marfa pok pok heirloom
            fashion axe cray stumptown venmo actually seitan. VHS farm-to-table
            schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby
            chic.
          </p>
        </article>
      </section>
    </main>
  );
};
export default Rating;
