"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/nace-el-gri.module.css";

interface Props {
  onClose: () => void;
}

const FULL_TEXT = `
Kiriox. El primer GRI del planeta.
Una plataforma de gobierno inteligente que convierte riesgo, control, auditoría y cumplimiento en un sistema vivo de decisión ejecutiva.

Kiriox. Gobierno, Riesgo e Inteligencia. Componentes de Kiriox.

Riesgo lineal. Registro, evaluación, tratamiento, priorización básica, seguimiento y cumplimiento mediante modelos operativos gobernables.

Riesgo estructural. Interdependencias, fragilidad sistémica, nodos críticos, relaciones ocultas y efectos de cascada mediante grafos.

Simulaciones. Monte Carlo, escenarios y simulación de liquidez para evaluar incertidumbre, sensibilidad y comportamiento bajo condiciones críticas.

Monitoreo. Seguimiento continuo de riesgos, controles, indicadores, alertas y evolución del perfil de exposición.

Eventos. Registro y trazabilidad de incidentes, materializaciones, desviaciones, pérdidas y señales tempranas para retroalimentar el sistema de riesgo.

Clara ventaja competitiva.
Kiriox no solo administra riesgos: identifica qué puede romper realmente una organización, prioriza dónde invertir primero y adapta completamente el sistema a la realidad de cada empresa. Su arquitectura extensible por plugins convierte la plataforma en una suite evolutiva de gobierno empresarial.

Nuestra promesa de valor.
Las matrices tradicionales priorizan riesgos aislados. Kiriox muestra cómo los riesgos se conectan, se amplifican y pueden comprometer toda la organización. La plataforma identifica fragilidad sistémica, dependencias críticas y efectos de cascada para entregar en días un mapa accionable de decisiones, controles prioritarios y nodos críticos para comité, auditoría, cumplimiento y dirección.

Por qué Kiriox es superior.
Kiriox es superior porque une lo que históricamente estaba separado: la gobernabilidad simple de la matriz y la verdad estructural del grafo. No reemplaza una por otra: usa cada una donde es más potente.

El nacimiento del GRI.
El nacimiento del primer GRI del mundo no representa una expansión funcional del modelo GRC tradicional; representa una ruptura ontológica en la forma de comprender el riesgo organizacional. Los sistemas GRC fueron diseñados para administrar objetos de cumplimiento: riesgos, controles, evidencias, hallazgos, tareas y responsables dentro de estructuras auditables, repetibles y regulatorias. Su lógica central consiste en ordenar y demostrar conformidad.

GRI, Governance, Risk e Intelligence, emerge desde una premisa radicalmente distinta: el riesgo no existe como entidad aislada, sino como comportamiento emergente de un sistema interdependiente. Su unidad de análisis ya no es el control individual ni el hallazgo independiente, sino la arquitectura relacional que determina cómo la fragilidad se concentra, cómo las dependencias amplifican vulnerabilidades y cómo las fallas se propagan en cascada.

Por esa razón, Kiriox no debe posicionarse como un GRC más avanzado. Ese encuadre reduce la magnitud real de la innovación. Kiriox constituye una nueva capa de infraestructura organizacional. Mientras las plataformas convencionales describen elementos aislados de la operación, Kiriox modela la mecánica profunda de la organización: identifica cómo interactúan sus componentes, dónde se acumula la fragilidad crítica, qué dependencias condicionan la resiliencia y qué puntos pueden desencadenar ruptura sistémica. La diferencia no es incremental; es epistemológica.

GRC: administra objetos de cumplimiento. Pregunta qué riesgos existen. Registra controles y evidencias. Ordena y demuestra conformidad. Trazabilidad administrativa.
GRI: gobierna relaciones sistémicas. Pregunta cómo se comporta el sistema. Revela dependencias y fragilidades. Modela dinámica emergente. Inteligencia estructural operacional.

La distinción fundamental entre GRC y GRI no se limita al alcance funcional de sus preguntas, sino a la naturaleza misma de la realidad que cada modelo intenta representar. GRI incorpora una dimensión completamente distinta: cómo se comporta el sistema completo bajo condiciones reales de interdependencia. Pregunta qué elementos dependen estructuralmente de otros, dónde se concentra la fragilidad acumulativa, qué componente fallará primero bajo tensión, qué efectos de cascada pueden propagarse a través de procesos, proveedores, servicios o controles, y qué intervención produce la mayor reducción de riesgo sistémico.

La ruptura histórica.
Durante décadas, el mercado de gobierno, riesgo y cumplimiento quedó atrapado entre dos modelos incompletos. Por un lado, las matrices lineales de impacto y probabilidad: fáciles de explicar, auditar, reportar y defender ante comités o reguladores, pero limitadas para capturar interdependencias reales. Por otro lado, los modelos estructurales basados en grafos: mucho más fieles a la complejidad organizacional, capaces de revelar dependencias, acumulación de fragilidad, nodos críticos y efectos de cascada, pero históricamente difíciles de institucionalizar.

Las matrices no dominaron porque fueran superiores como representación del riesgo, sino porque eran gobernables. El análisis estructural no se convirtió en estándar porque exigía una gramática operacional más rigurosa.

La ruptura histórica que introduce GRI consiste precisamente en resolver esa contradicción sin degradar ninguno de los dos paradigmas. Kiriox establece una separación formal y estable entre la capa lineal y la capa estructural del riesgo organizacional. Ambas capas coexisten sin confundirse.

Un software universal interrelacional.
Kiriox no debe interpretarse simplemente como software de riesgo, sino como una infraestructura de inteligibilidad organizacional: un sistema capaz de representar cómo interactúan los distintos componentes de la empresa y cómo dichas interacciones producen resiliencia, fragilidad o comportamiento emergente.

Su premisa profunda es que cualquier entidad relevante para la organización, persona, proceso, control, proveedor, servicio, regulación, sistema legasi, activo tecnológico o agente de inteligencia artificial, puede incorporarse a un mismo universo computacional siempre que posea identidad, capacidad, relación y trazabilidad verificable.

Por eso Kiriox no compite realmente contra plataformas GRC tradicionales. Esa comparación pertenece al marco antiguo. Kiriox compite contra la fragmentación epistemológica del software corporativo: la tendencia histórica a dividir la organización en módulos, áreas, reportes, controles y bases de datos que rara vez explican cómo funciona el conjunto.

La definición final.
GRI, Governance, Risk e Intelligence, es una categoría de infraestructura empresarial que modela la organización como un sistema interrelacional de gobierno, riesgo, cumplimiento, auditoría, datos, inteligencia artificial, servicios, terceros y evidencia, permitiendo comprender cómo se comporta, dónde concentra fragilidad, cómo puede romperse y qué decisiones incrementan de manera verificable su resiliencia estructural.

GRC administra cumplimiento. GRI interpreta el comportamiento del sistema organizacional. GRC organiza objetos. GRI gobierna relaciones. GRC documenta controles, evidencias y hallazgos. GRI revela dependencias, fragilidades y efectos de cascada. Por eso Kiriox no debe definirse como una herramienta para administrar controles, sino como la infraestructura que convierte la empresa en un sistema observable, inteligible, simulable y defendible.
`.trim();

function IconSpeaker() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function IconPause() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}

function IconResume() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

// Split into sentences: short enough to avoid Chrome desktop's ~15 s silent-freeze bug,
// while the per-chunk timeout fallback covers Android's missing onend event.
const CHUNKS = FULL_TEXT
  .split(/\n{2,}/)
  .flatMap((para) =>
    para
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean)
  );

const RATES = [0.6, 0.8, 1.0, 1.2, 1.5, 1.8];
const DEFAULT_RATE_INDEX = 2; // 1.0×

export function NaceElGriModal({ onClose }: Props) {
  const [ttsState, setTtsState] = useState<"idle" | "speaking" | "paused">("idle");
  const [rateIndex, setRateIndex] = useState(DEFAULT_RATE_INDEX);
  const rateRef = useRef(RATES[DEFAULT_RATE_INDEX]);
  const chunkIndexRef = useRef(0);
  const pausedRef = useRef(false);
  const chunkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const block = (e: Event) => e.preventDefault();
    const blockKey = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ["c", "a", "s", "p", "u"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("keydown", blockKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("keydown", blockKey);
      document.body.style.overflow = "";
      stopAll();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const pickLatinVoice = (): SpeechSynthesisVoice | null => {
    const voices = window.speechSynthesis.getVoices();
    for (const lang of ["es-MX", "es-419", "es-CO", "es-AR", "es-CL", "es-PE", "es-US", "es"]) {
      const match = voices.find((v) => v.lang.startsWith(lang));
      if (match) return match;
    }
    return voices.find((v) => v.lang.startsWith("es")) ?? null;
  };

  const speakChunk = (index: number) => {
    if (index >= CHUNKS.length || pausedRef.current) return;

    if (chunkTimerRef.current) {
      clearTimeout(chunkTimerRef.current);
      chunkTimerRef.current = null;
    }

    const utterance = new SpeechSynthesisUtterance(CHUNKS[index]);
    utterance.lang = "es-MX";
    utterance.rate = rateRef.current;
    utterance.pitch = 1;

    const voice = pickLatinVoice();
    if (voice) utterance.voice = voice;

    const advance = () => {
      if (chunkTimerRef.current) {
        clearTimeout(chunkTimerRef.current);
        chunkTimerRef.current = null;
      }
      if (!pausedRef.current) {
        chunkIndexRef.current = index + 1;
        if (index + 1 < CHUNKS.length) {
          speakChunk(index + 1);
        } else {
          stopAll();
          setTtsState("idle");
        }
      }
    };

    // Fallback timeout: Android sometimes never fires onend
    const wordCount = CHUNKS[index].split(/\s+/).length;
    const estimatedMs = Math.max((wordCount / 130) * 60000 / rateRef.current, 2000) + 5000;
    chunkTimerRef.current = setTimeout(advance, estimatedMs);

    utterance.onend = advance;
    utterance.onerror = (e) => {
      if (chunkTimerRef.current) {
        clearTimeout(chunkTimerRef.current);
        chunkTimerRef.current = null;
      }
      if (e.error === "interrupted") return;
      chunkIndexRef.current = index + 1;
      speakChunk(index + 1);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopAll = () => {
    if (chunkTimerRef.current) {
      clearTimeout(chunkTimerRef.current);
      chunkTimerRef.current = null;
    }
    window.speechSynthesis.cancel();
  };

  const startSpeaking = () => {
    const go = () => {
      chunkIndexRef.current = 0;
      pausedRef.current = false;
      stopAll();
      speakChunk(0);
      setTtsState("speaking");
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      let started = false;
      // Fallback: some Android devices never fire onvoiceschanged
      const fallback = setTimeout(() => {
        if (!started) { started = true; go(); }
      }, 2000);
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        if (!started) { started = true; clearTimeout(fallback); go(); }
      };
    } else {
      go();
    }
  };

  const changeRate = (delta: 1 | -1) => {
    const next = Math.min(Math.max(rateIndex + delta, 0), RATES.length - 1);
    rateRef.current = RATES[next];
    setRateIndex(next);
    // if already speaking, restart current chunk with new rate
    if (ttsState === "speaking") {
      stopAll();
      speakChunk(chunkIndexRef.current);
    }
  };

  const handleTts = () => {
    if (ttsState === "speaking") {
      pausedRef.current = true;
      stopAll();
      setTtsState("paused");
      return;
    }

    if (ttsState === "paused") {
      pausedRef.current = false;
      speakChunk(chunkIndexRef.current);
      setTtsState("speaking");
      return;
    }

    startSpeaking();
  };

  const handleStop = () => {
    pausedRef.current = false;
    stopAll();
    setTtsState("idle");
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      {/* TTS control */}
      <div className={styles.ttsBar}>
        <button
          className={`${styles.ttsBtn} ${ttsState !== "idle" ? styles.ttsBtnActive : ""}`}
          onClick={handleTts}
          aria-label={
            ttsState === "speaking"
              ? "Pausar lectura"
              : ttsState === "paused"
              ? "Continuar lectura"
              : "Leer en voz alta"
          }
          title={
            ttsState === "speaking"
              ? "Pausar"
              : ttsState === "paused"
              ? "Continuar"
              : "Escuchar"
          }
        >
          {ttsState === "speaking" ? (
            <IconPause />
          ) : ttsState === "paused" ? (
            <IconResume />
          ) : (
            <IconSpeaker />
          )}
          <span className={styles.ttsBtnLabel}>
            {ttsState === "speaking"
              ? "Pausar"
              : ttsState === "paused"
              ? "Continuar"
              : "Escuchar"}
          </span>
        </button>

        {/* Speed control — always visible */}
        <div className={styles.speedControl}>
          <button
            className={styles.speedBtn}
            onClick={() => changeRate(-1)}
            disabled={rateIndex === 0}
            aria-label="Reducir velocidad"
            title="Más lento"
          >
            −
          </button>
          <span className={styles.speedLabel}>
            {RATES[rateIndex].toFixed(1)}×
          </span>
          <button
            className={styles.speedBtn}
            onClick={() => changeRate(1)}
            disabled={rateIndex === RATES.length - 1}
            aria-label="Aumentar velocidad"
            title="Más rápido"
          >
            +
          </button>
        </div>

        {ttsState !== "idle" && (
          <button
            className={styles.ttsStopBtn}
            onClick={handleStop}
            aria-label="Detener lectura"
            title="Detener"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
          </button>
        )}
      </div>

      {/* Close */}
      <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
        ✕
      </button>

      <div className={styles.inner}>
        <div
          className={styles.content}
          onCopy={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* ── Header ── */}
          <span className={styles.brand}>KIRIOX</span>

          <h1 className={styles.mainTitle}>
            El primer <span style={{ color: "var(--accent)" }}>GRI</span>
            <br />del planeta.
          </h1>

          <p className={styles.tagline}>
            Una plataforma de gobierno inteligente que convierte riesgo, control,
            auditoría y cumplimiento en un sistema vivo de decisión ejecutiva.
          </p>

          <hr className={styles.divider} />

          {/* ── Gobierno, Riesgo e Inteligencia ── */}
          <h2 className={styles.sectionTitle}>
            Kiriox&nbsp;&mdash;&nbsp;
            <span className={styles.accent}>Gobierno, Riesgo e Inteligencia</span>
          </h2>

          <p className={styles.componentsLabel}>Componentes de Kiriox</p>

          <div className={styles.moduleGrid}>
            <div className={styles.moduleCard}>
              <h3>Riesgo lineal</h3>
              <p>
                Registro, evaluación, tratamiento, priorización básica,
                seguimiento y cumplimiento mediante modelos operativos
                gobernables.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <h3>Riesgo estructural</h3>
              <p>
                Interdependencias, fragilidad sistémica, nodos críticos,
                relaciones ocultas y efectos de cascada mediante grafos.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <h3>Simulaciones</h3>
              <p>
                Monte Carlo, escenarios y simulación de liquidez para evaluar
                incertidumbre, sensibilidad y comportamiento bajo condiciones
                críticas.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <h3>Monitoreo</h3>
              <p>
                Seguimiento continuo de riesgos, controles, indicadores, alertas
                y evolución del perfil de exposición.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <h3>Eventos</h3>
              <p>
                Registro y trazabilidad de incidentes, materializaciones,
                desviaciones, pérdidas y señales tempranas para retroalimentar
                el sistema de riesgo.
              </p>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* ── Ventaja competitiva ── */}
          <h2 className={styles.sectionTitle}>Clara ventaja competitiva</h2>
          <p className={styles.body}>
            Kiriox no solo administra riesgos: identifica{" "}
            <strong>qué puede romper realmente una organización</strong>,
            prioriza dónde invertir primero y adapta completamente el sistema a
            la realidad de cada empresa. Su arquitectura extensible por plugins
            convierte la plataforma en una suite evolutiva de gobierno
            empresarial.
          </p>

          {/* ── Promesa de valor ── */}
          <h2 className={styles.sectionTitle}>Nuestra promesa de valor</h2>
          <p className={styles.body}>
            Las matrices tradicionales priorizan riesgos aislados. Kiriox
            muestra cómo los riesgos se conectan, se amplifican y pueden
            comprometer toda la organización. La plataforma identifica fragilidad
            sistémica, dependencias críticas y efectos de cascada para entregar
            en días un mapa accionable de decisiones, controles prioritarios y
            nodos críticos para comité, auditoría, cumplimiento y dirección.
          </p>

          <hr className={styles.divider} />

          {/* ── Por qué es superior ── */}
          <h2 className={styles.sectionTitle}>Por qué Kiriox es superior</h2>
          <div className={styles.highlight}>
            <p>
              Kiriox es superior porque une lo que históricamente estaba
              separado: la gobernabilidad simple de la matriz y la verdad
              estructural del grafo. No reemplaza una por otra: usa cada una
              donde es más potente.
            </p>
          </div>

          <hr className={styles.divider} />

          {/* ── El nacimiento del GRI ── */}
          <h2 className={styles.sectionTitle}>El nacimiento del GRI</h2>

          <p className={styles.body}>
            El nacimiento del primer GRI del mundo no representa una expansión
            funcional del modelo GRC tradicional; representa una{" "}
            <strong>ruptura ontológica</strong> en la forma de comprender el
            riesgo organizacional. Los sistemas GRC fueron diseñados para
            administrar objetos de cumplimiento: riesgos, controles, evidencias,
            hallazgos, tareas y responsables dentro de estructuras auditables,
            repetibles y regulatorias. Su lógica central consiste en ordenar y
            demostrar conformidad.
          </p>

          <p className={styles.body}>
            GRI —Governance, Risk &amp; Intelligence— emerge desde una premisa
            radicalmente distinta: el riesgo no existe como entidad aislada,
            sino como{" "}
            <strong>comportamiento emergente de un sistema interdependiente</strong>.
            Su unidad de análisis ya no es el control individual ni el hallazgo
            independiente, sino la arquitectura relacional que determina cómo la
            fragilidad se concentra, cómo las dependencias amplifican
            vulnerabilidades y cómo las fallas se propagan en cascada.
          </p>

          <p className={styles.body}>
            Por esa razón, Kiriox no debe posicionarse como un "GRC más
            avanzado". Ese encuadre reduce la magnitud real de la innovación.
            Kiriox constituye una nueva capa de{" "}
            <strong>infraestructura organizacional</strong>. Mientras las
            plataformas convencionales describen elementos aislados de la
            operación, Kiriox modela la mecánica profunda de la organización:
            identifica cómo interactúan sus componentes, dónde se acumula la
            fragilidad crítica, qué dependencias condicionan la resiliencia y qué
            puntos pueden desencadenar ruptura sistémica. La diferencia no es
            incremental; es epistemológica.
          </p>

          {/* ── GRC vs GRI compare ── */}
          <div className={styles.compareGrid}>
            <div className={styles.compareCard}>
              <p className={`${styles.label} ${styles.grc}`}>GRC</p>
              <ul>
                <li>Administra objetos de cumplimiento</li>
                <li>Pregunta qué riesgos existen</li>
                <li>Registra controles y evidencias</li>
                <li>Ordena y demuestra conformidad</li>
                <li>Trazabilidad administrativa</li>
              </ul>
            </div>
            <div className={`${styles.compareCard} ${styles.griCard}`}>
              <p className={`${styles.label} ${styles.gri}`}>GRI</p>
              <ul>
                <li>Gobierna relaciones sistémicas</li>
                <li>Pregunta cómo se comporta el sistema</li>
                <li>Revela dependencias y fragilidades</li>
                <li>Modela dinámica emergente</li>
                <li>Inteligencia estructural operacional</li>
              </ul>
            </div>
          </div>

          <p className={styles.body}>
            La distinción fundamental entre GRC y GRI no se limita al alcance
            funcional de sus preguntas, sino a la naturaleza misma de la realidad
            que cada modelo intenta representar. GRI incorpora una dimensión
            completamente distinta: cómo se comporta el sistema completo bajo
            condiciones reales de interdependencia. Pregunta qué elementos
            dependen estructuralmente de otros, dónde se concentra la fragilidad
            acumulativa, qué componente fallará primero bajo tensión, qué efectos
            de cascada pueden propagarse a través de procesos, proveedores,
            servicios o controles, y qué intervención produce la mayor reducción
            de riesgo sistémico.
          </p>

          <hr className={styles.divider} />

          {/* ── Ruptura histórica ── */}
          <h2 className={styles.sectionTitle}>La ruptura histórica</h2>

          <p className={styles.body}>
            Durante décadas, el mercado de gobierno, riesgo y cumplimiento quedó
            atrapado entre dos modelos incompletos. Por un lado, las{" "}
            <strong>matrices lineales</strong> de impacto y probabilidad: fáciles
            de explicar, auditar, reportar y defender ante comités o reguladores,
            pero limitadas para capturar interdependencias reales. Por otro lado,
            los <strong>modelos estructurales basados en grafos</strong>: mucho
            más fieles a la complejidad organizacional, capaces de revelar
            dependencias, acumulación de fragilidad, nodos críticos y efectos de
            cascada, pero históricamente difíciles de institucionalizar.
          </p>

          <p className={styles.body}>
            Las matrices no dominaron porque fueran superiores como
            representación del riesgo, sino porque eran{" "}
            <strong>gobernables</strong>. El análisis estructural no se convirtió
            en estándar porque exigía una gramática operacional más rigurosa.
          </p>

          <div className={styles.highlight}>
            <p>
              La ruptura histórica que introduce GRI consiste precisamente en
              resolver esa contradicción sin degradar ninguno de los dos
              paradigmas. Kiriox establece una separación formal y estable entre
              la capa lineal y la capa estructural del riesgo organizacional.
              Ambas capas coexisten sin confundirse.
            </p>
          </div>

          <hr className={styles.divider} />

          {/* ── Software universal interrelacional ── */}
          <h2 className={styles.sectionTitle}>
            Un software universal interrelacional
          </h2>

          <p className={styles.body}>
            Kiriox no debe interpretarse simplemente como software de riesgo,
            sino como una{" "}
            <strong>infraestructura de inteligibilidad organizacional</strong>:
            un sistema capaz de representar cómo interactúan los distintos
            componentes de la empresa y cómo dichas interacciones producen
            resiliencia, fragilidad o comportamiento emergente.
          </p>

          <p className={styles.body}>
            Su premisa profunda es que cualquier entidad relevante para la
            organización —persona, proceso, control, proveedor, servicio,
            regulación, sistema legacy, activo tecnológico o agente de
            inteligencia artificial— puede incorporarse a un mismo universo
            computacional siempre que posea identidad, capacidad, relación y
            trazabilidad verificable.
          </p>

          <p className={styles.body}>
            Por eso Kiriox no compite realmente contra plataformas GRC
            tradicionales. Esa comparación pertenece al marco antiguo. Kiriox
            compite contra la{" "}
            <strong>fragmentación epistemológica del software corporativo</strong>:
            la tendencia histórica a dividir la organización en módulos, áreas,
            reportes, controles y bases de datos que rara vez explican cómo
            funciona el conjunto.
          </p>

          <hr className={styles.divider} />

          {/* ── Definición final ── */}
          <h2 className={styles.sectionTitle}>La definición final</h2>

          <div className={styles.highlight}>
            <p>
              GRI —Governance, Risk &amp; Intelligence— es una categoría de
              infraestructura empresarial que modela la organización como un
              sistema interrelacional de gobierno, riesgo, cumplimiento,
              auditoría, datos, inteligencia artificial, servicios, terceros y
              evidencia, permitiendo comprender cómo se comporta, dónde concentra
              fragilidad, cómo puede romperse y qué decisiones incrementan de
              manera verificable su resiliencia estructural.
            </p>
          </div>

          <p className={styles.body}>
            <strong>
              GRC administra cumplimiento; GRI interpreta el comportamiento del
              sistema organizacional.
            </strong>{" "}
            GRC organiza objetos; GRI gobierna relaciones. GRC documenta
            controles, evidencias y hallazgos; GRI revela dependencias,
            fragilidades y efectos de cascada. Por eso Kiriox no debe definirse
            como una herramienta para administrar controles, sino como la
            infraestructura que convierte la empresa en un sistema observable,
            inteligible, simulable y defendible.
          </p>

          {/* ── Author ── */}
          <p className={styles.author}>Autor: deivisadames@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
