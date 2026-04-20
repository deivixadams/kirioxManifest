import styles from "@/styles/manifest-shift.module.css";

const shifts = [
  {
    from: "De gestionar elementos",
    to: "a entender sistemas",
  },
  {
    from: "De reportar cumplimiento",
    to: "a defender estabilidad",
  },
  {
    from: "De reaccionar a fallas",
    to: "a anticipar el punto donde comienzan",
  },
];

export function ManifestShift() {
  return (
    <section id="gri" className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Cambio de paradigma</span>
        <h2 className={styles.heading}>De GRC a GRI</h2>
        <p className={styles.text}>
          El futuro del riesgo no exige más capas de documentación. Exige una
          infraestructura capaz de revelar dependencias, concentración, cascadas
          y puntos de ruptura antes del fallo.
        </p>
      </div>

      <div className={styles.grid}>
        {shifts.map((shift) => (
          <article key={shift.from} className={styles.card}>
            <p className={styles.from}>{shift.from}</p>
            <p className={styles.to}>{shift.to}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
