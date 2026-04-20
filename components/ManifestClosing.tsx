import styles from "@/styles/manifest-closing.module.css";

export function ManifestClosing() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <span className={styles.eyebrow}>Cierre</span>
        <h2 className={styles.heading}>
          El futuro del riesgo no es más control.
          <br />
          Es más comprensión.
        </h2>

        <p className={styles.text}>
          Y esa comprensión define quién resiste… y quién falla.
        </p>

        <div className={styles.actions}>
          <a
            className={styles.primaryAction}
            href="https://wa.me/18296389999"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar demo
          </a>
          <a className={styles.secondaryAction} href="#manifiesto">
            Volver al manifiesto
          </a>
        </div>
      </div>
    </section>
  );
}
