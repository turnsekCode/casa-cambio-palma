import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          Cambia moneda extranjera en {""}
          <span className={styles.linea}>Palma</span>
        </h2>
        <p>
          Tanto si vives en Palma de Mallorca como si estás de vacaciones o
          visitando la catedral basílica de Santa María, tienes la suerte de
          tener una casa de cambio Quickgold para que cambiar divisa sea un
          proceso sencillo y rápido. Recuerda que en nuestra casa de cambio en
          Palma de Mallorca realizamos mejoras en el tipo de cambio por
          cantidad. Indícanos tus necesidades y, sin compromiso, te asesoraremos
          y te ofreceremos el mejor tipo de cambio de la ciudad. Cambia moneda
          extranjera en Palma de manera fácil y rápida.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-palma.webp"
          alt="Cambiar Dólares a Euros palma"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
