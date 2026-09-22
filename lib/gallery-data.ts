export interface GalleryItem {
  src: string;
  alt: string;
}

// Erste Kachel ist die große: die eigene Baustelle mit fertiger Terrasse.
// Danach Leistungen, die der Betrieb tatsächlich anbietet.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/acquisition/baustellen/gartenbaustelle-mit-neuer-terrasse-01.jpg",
    alt: "Baustelle mit fertig verlegter Terrasse aus Großformatplatten, Winkelstützmauern und vorbereitetem Erdreich"
  },
  {
    src: "/assets/leistungen/terrassenbau-grossformatplatten-02.webp",
    alt: "Terrasse aus großformatigen Platten mit angrenzender Bepflanzung"
  },
  {
    src: "/assets/leistungen/pflasterarbeiten-terrasse.webp",
    alt: "Verlegen großformatiger Platten im Splittbett"
  },
  {
    src: "/assets/leistungen/gartenpflege-heckenschnitt.webp",
    alt: "Heckenschnitt bei der laufenden Gartenpflege"
  },
  {
    src: "/assets/leistungen/zaun-und-sichtschutz.webp",
    alt: "Montierter Sichtschutzzaun als Grundstücksabschluss"
  }
];
