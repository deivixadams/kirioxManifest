"use client";

import { useState } from "react";
import styles from "@/styles/manifest-hero.module.css";
import { NaceElGriModal } from "@/components/NaceElGriModal";

export function ManifestHero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.kicker}>Kiriox GRI</span>

          <h1 className={styles.title}>
            El riesgo no es una lista.
            <br />
            Es un sistema.
          </h1>

          <p className={styles.subtitle}>
            Una nueva infraestructura de Governance, Risk &amp; Intelligence para
            observar, medir y defender la estabilidad organizacional.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#manifiesto">
              Leer manifiesto
            </a>
            <button
              className={styles.primaryAction}
              onClick={() => setShowModal(true)}
              type="button"
            >
              Nace el G.R.I
            </button>
            <a className={styles.secondaryAction} href="#gri">
              Ver cambio de paradigma
            </a>
            <a className={styles.secondaryAction} href="#gri-vs-grc">
              GRI vs GRC
            </a>
          </div>
        </div>
      </section>

      {showModal && <NaceElGriModal onClose={() => setShowModal(false)} />}
    </>
  );
}
