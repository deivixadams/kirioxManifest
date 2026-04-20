import styles from "@/styles/manifest-hero.module.css";

export function ManifestHero() {
  return (
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
          <a className={styles.secondaryAction} href="#gri">
            Ver cambio de paradigma
          </a>
        </div>
      </div>
    </section>
  );
}
