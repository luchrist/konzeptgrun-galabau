export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "rollrasen-mit-stuetzmauer",
    title: "Rollrasen mit Stützmauer und Stufen",
    ort: "Limburgerhof",
    leistung: "Gartenneugestaltung",
    text: "Der Höhenunterschied im Grundstück wurde mit Winkelelementen und einer Stufenanlage abgefangen, darunter entstand die ebene Gartenfläche. Die Rasenfläche ist mit einem Pflasterband eingefasst, damit die Kante beim Mähen hält, und wurde als Rollrasen verlegt.",
    afterImage: "/assets/acquisition/projekte/frisch-verlegter-rasen-im-garten-01.jpg",
    alt: "Frisch verlegter Rollrasen mit Pflastereinfassung, Betonstufen und Stützmauer vor einem Holzsichtschutz"
  },
  {
    id: "gartenteich-mit-wasserlauf",
    title: "Gartenteich mit Wasserlauf",
    ort: "Limburgerhof",
    leistung: "Gartenneugestaltung",
    text: "Der Teich wurde in den Hang modelliert und über eine Natursteinmauer und Betonstufen mit einem Wasserlauf verbunden. Der Rand ist mit Kies abgedeckt, die Folie liegt darunter geschützt. Das Foto zeigt die Anlage frisch fertiggestellt, bevor die Bepflanzung angewachsen und das Wasser eingelaufen ist.",
    afterImage: "/assets/acquisition/projekte/gartenteich-mit-wasserfall-01.jpg",
    alt: "Neu angelegter Gartenteich mit Kiesrand, Trittsteinen und angrenzender Natursteinmauer"
  }
];
