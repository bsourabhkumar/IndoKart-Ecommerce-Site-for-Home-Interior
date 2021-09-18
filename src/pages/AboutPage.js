import React from "react";
import styled from "styled-components";
// import { PageHero } from "../components";
// import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      {/* <PageHero title="about" /> */}
      <Wrapper className="page section section-center">
        <img src="https://media.designcafe.com/wp-content/uploads/2019/11/17054921/best-tips-on-budget-friendly-home-interior-design.jpg" alt="nice desk" />
        <article>
          <div className="title">
            <h2>About us</h2>
   
          </div>
          <p>
            {" "}
            IndoKart is India’s premium furniture brand in both home and
            institutional segments with a strong commitment to sustainability
            and centers of excellence in design, manufacturing and retail.{" "}
            <br />
            Led by the largest in-house design team in the country in the
            furniture category and awarded with 34 India Design Mark Awards till
            date, IndoKart aims to transform spaces with its thoughtfully
            designed furniture to create brighter homes and offices with
            products that have the highest design quotient in aesthetics,
            functionality and technology. <br />
            With consistent pursuit of excellence and a special focus on health
            and ergonomics, IndoKart’s product portfolio comprises a massive
            range in the home, office and other specialized applications. <br />
            IndoKart’s commitment to the environment has resulted in
            manufacturing products with lesser carbon footprint. IndoKart has
            the widest range of green choices for our customers which not only
            includes products but also services such as green interiors and
            recycling.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
