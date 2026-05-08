import styles from "@/styles/gri-vs-grc-article.module.css";

export function GriVsGrcArticle() {
  return (
    <section id="gri-vs-grc" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Kiriox GRI</span>
        <h2 className={styles.heading}>En palabras simples: GRC vs GRI</h2>
      </div>

      <div className={styles.panel}>
        <p>
          Un día aparece un estudio diciendo: <em>"el café causa cáncer"</em>.
          Meses después otro estudio afirma: <em>"el café previene el cáncer"</em>.
          Tiempo después aparece otro asegurando que el café y el té aumentan el
          riesgo de cáncer de próstata. Luego surge uno nuevo concluyendo
          exactamente lo contrario.
        </p>

        <p className={styles.question}>¿Qué está pasando ahí?</p>

        <p>
          Muchos dirán: <em>"intereses económicos"</em>. Y sí, a veces ocurre.
          Pero existe otro problema más profundo: el paradigma metodológico.
        </p>

        <p>
          La ciencia moderna heredó una visión reduccionista y mecanicista del
          conocimiento: para entender un fenómeno complejo, se divide en partes
          pequeñas y se estudia una muestra aislada esperando que represente el
          sistema completo.
        </p>

        <p className={styles.highlight}>
          Es como intentar comprender el océano tomando un vaso de agua de una
          playa.
        </p>

        <p>
          El problema es evidente: el vaso contiene agua del océano, pero no
          contiene la dinámica del océano. No captura corrientes, presión,
          temperatura global, interacciones, turbulencias ni fenómenos sistémicos.
        </p>

        <p>
          Algo muy parecido ocurre hoy con el análisis de riesgo. La mayoría de
          metodologías GRC siguen funcionando bajo una lógica lineal y
          fragmentada: toman "muestras" del sistema —riesgos aislados, controles
          aislados, procesos aislados— y a partir de eso intentan representar la
          complejidad total de la organización.
        </p>

        <p>
          Por eso vemos matrices de riesgo que funcionan bien en el papel, pero
          explican muy poco sobre la estructura real del sistema. No muestran:
        </p>

        <ul className={styles.list}>
          <li>dependencias críticas</li>
          <li>concentración de fragilidad</li>
          <li>efectos cascada</li>
          <li>nodos críticos</li>
          <li>puntos de ruptura sistémica</li>
        </ul>

        <p>
          Y precisamente ahí nacen muchos de los grandes eventos de riesgo.
        </p>

        <p>
          Hoy necesitamos evolucionar del análisis lineal hacia un análisis
          estructural del riesgo. No basta con medir elementos aislados. Hay que
          entender cómo interactúan entre sí para producir fragilidad sistémica.
        </p>

        <p>
          Por eso hemos desarrollado Kiriox, el primer GRI: Governance, Risk
          &amp; Intelligence. Kiriox incluye gobernanza de riesgo lineal para
          clasificar, ordenar y priorizar riesgos; pero también gobernanza de
          riesgo sistémico para entender interdependencias, nodos críticos,
          concentración de fragilidad y efectos de cascada que las matrices
          tradicionales no capturan.
        </p>

        <p className={styles.closing}>
          Ese es el paso de GRC a GRI:<br />
          de gestionar listas de riesgos,<br />
          a entender matemáticamente la arquitectura completa del sistema.
        </p>
      </div>
    </section>
  );
}
