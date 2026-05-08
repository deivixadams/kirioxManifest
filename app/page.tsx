import { ManifestHero } from "@/components/ManifestHero";
import { ManifestBody } from "@/components/ManifestBody";
import { GriVsGrcArticle } from "@/components/GriVsGrcArticle";
import { ManifestShift } from "@/components/ManifestShift";
import { ManifestClosing } from "@/components/ManifestClosing";
import styles from "@/styles/page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <ManifestHero />
      <ManifestBody />
      <GriVsGrcArticle />
      <ManifestShift />
      <ManifestClosing />
    </main>
  );
}
