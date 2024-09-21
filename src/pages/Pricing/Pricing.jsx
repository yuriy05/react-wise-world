import styles from "./Pricing.module.css";

import PageNav from "../../components/PageNav/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src="/images/img-2.jpg"
          width={365}
          height={365}
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
