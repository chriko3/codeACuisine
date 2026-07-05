import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordSuggestionService {
words: string[] = [
  // ===== Gemüse (1–120) =====
  'Kartoffel', 'Süßkartoffel', 'Karotte', 'Möhre', 'Zwiebel', 'Knoblauch', 'Tomate', 'Cherrytomate',
  'Gurke', 'Paprika', 'rote Paprika', 'gelbe Paprika', 'grüne Paprika', 'Zucchini', 'Aubergine',
  'Spinat', 'Blattspinat', 'Kopfsalat', 'Eisbergsalat', 'Römersalat', 'Brokkoli', 'Blumenkohl',
  'Weißkohl', 'Rotkohl', 'Grünkohl', 'Lauch', 'Porree', 'Sellerie', 'Stangensellerie',
  'Knollensellerie', 'Radieschen', 'Rettich', 'Rote Bete', 'Kürbis', 'Hokkaido Kürbis',
  'Butternut Kürbis', 'Mais', 'Erbsen', 'grüne Erbsen', 'Zuckerschoten', 'grüne Bohnen',
  'Wachsbohnen', 'Pilze', 'Champignons', 'Pfifferlinge', 'Steinpilze', 'Shiitake',
  'Austernpilze', 'Fenchel', 'Spargel', 'weißer Spargel', 'grüner Spargel', 'Artischocke',
  'Okra', 'Mangold', 'Pak Choi', 'Chinakohl', 'Frühlingszwiebel', 'Schalotte',
  'Ingwer', 'Chili', 'grüne Chili', 'rote Chili', 'Knoblauchzehe', 'Zwiebelgrün',
  'Rucola', 'Feldsalat', 'Endivie', 'Chicorée', 'Topinambur', 'Pastinake',
  'Steckrübe', 'Kohlrabi', 'Brokkoli Röschen', 'Blumenkohl Röschen', 'Salatherz',
  'Lauchzwiebel', 'Palmkohl', 'Kresse', 'Alfalfa Sprossen', 'Sojasprossen',
  'Bambussprossen', 'Meerrettich', 'Wasabi',

  // ===== Obst (121–200) =====
  'Apfel', 'roter Apfel', 'grüner Apfel', 'Banane', 'Birne', 'Orange', 'Blutorange',
  'Zitrone', 'Limette', 'Grapefruit', 'Mandarine', 'Clementine', 'Erdbeere', 'Himbeere',
  'Blaubeere', 'Heidelbeere', 'Brombeere', 'Johannisbeere', 'rote Johannisbeere',
  'schwarze Johannisbeere', 'Stachelbeere', 'Traube', 'rote Traube', 'weiße Traube',
  'Pfirsich', 'Nektarine', 'Aprikose', 'Pflaume', 'Mirabelle', 'Kirsche', 'Sauerkirsche',
  'Ananas', 'Mango', 'Kiwi', 'Melone', 'Wassermelone', 'Honigmelone', 'Cantaloupe',
  'Papaya', 'Passionsfrucht', 'Maracuja', 'Guave', 'Litschi', 'Feige', 'Granatapfel',
  'Dattel', 'Kokosnuss', 'Avocado', 'Quitte', 'Rhabarber',

  // ===== Kräuter & Gewürze (201–280) =====
  'Basilikum', 'Oregano', 'Thymian', 'Rosmarin', 'Petersilie', 'glatte Petersilie',
  'krause Petersilie', 'Dill', 'Schnittlauch', 'Minze', 'Pfefferminze', 'Koriander',
  'Kreuzkümmel', 'Kümmel', 'Paprikapulver', 'edelsüßes Paprikapulver', 'rosenscharf',
  'Zimt', 'Muskatnuss', 'Nelken', 'Kurkuma', 'Ingwerpulver', 'schwarzer Pfeffer',
  'weißer Pfeffer', 'grüner Pfeffer', 'Kardamom', 'Safran', 'Lorbeerblatt', 'Vanille',
  'Vanilleschote', 'Senfkörner', 'gelbe Senfkörner', 'braune Senfkörner',
  'Fenchelsamen', 'Anis', 'Sternanis', 'Chiliflocken', 'Chilipulver', 'Salbei',
  'Majoran', 'Estragon', 'Zitronengras', 'Sumach', 'Bockshornklee', 'Wasabi',
  'Meerrettich', 'Piment', 'Lavendel', 'Selleriesamen', 'Sesam', 'Schwarzkümmel',
  'Curry', 'Curry Pulver', 'Garlic Powder', 'Zwiebelpulver', 'Kakaopulver',

  // ===== Milchprodukte & Eier (281–330) =====
  'Milch', 'Vollmilch', 'fettarme Milch', 'Butter', 'Sahne', 'Schlagsahne',
  'Joghurt', 'Naturjoghurt', 'Griechischer Joghurt', 'Käse', 'Gouda', 'Emmentaler',
  'Mozzarella', 'Parmesan', 'Cheddar', 'Feta', 'Ricotta', 'Mascarpone',
  'Frischkäse', 'Hüttenkäse', 'Saure Sahne', 'Schmand', 'Crème fraîche',
  'Buttermilch', 'Eier', 'Eigelb', 'Eiweiß', 'Ghee',

  // ===== Fleisch, Fisch & Meeresfrüchte (331–400) =====
  'Hähnchen', 'Hähnchenbrust', 'Hähnchenschenkel', 'Hähnchenflügel',
  'Pute', 'Rindfleisch', 'Rinderhack', 'Rindersteak', 'Schweinefleisch',
  'Schweinebauch', 'Schweinekotelett', 'Lammfleisch', 'Ente', 'Kalbfleisch',
  'Speck', 'Bacon', 'Schinken', 'Salami', 'Bratwurst', 'Wiener Würstchen',
  'Mett', 'Hackfleisch', 'Leber',

  'Fisch', 'Lachs', 'Thunfisch', 'Kabeljau', 'Seelachs', 'Forelle', 'Makrele',
  'Sardinen', 'Hering', 'Scholle', 'Zander', 'Hecht',

  'Garnelen', 'Krabben', 'Hummer', 'Muscheln', 'Miesmuscheln',
  'Tintenfisch', 'Calamari', 'Jakobsmuscheln',

  // ===== Vorrat / Basics (401–500) =====
  'Reis', 'Basmati Reis', 'Jasminreis', 'Naturreis', 'Nudeln', 'Spaghetti',
  'Penne', 'Fusilli', 'Lasagneplatten', 'Mehl', 'Weizenmehl', 'Roggenmehl',
  'Dinkelmehl', 'Maismehl', 'Haferflocken', 'Gerste', 'Quinoa', 'Couscous',
  'Bulgur', 'Linsen', 'rote Linsen', 'grüne Linsen', 'Kichererbsen',
  'Bohnen', 'Kidneybohnen', 'schwarze Bohnen', 'weiße Bohnen',

  'Olivenöl', 'Sonnenblumenöl', 'Rapsöl', 'Sesamöl', 'Essig',
  'Apfelessig', 'Weißweinessig', 'Balsamico', 'Sojasauce', 'Honig',
  'Zucker', 'brauner Zucker', 'Puderzucker', 'Salz', 'Meersalz',

  'Backpulver', 'Natron', 'Hefe', 'Trockenhefe',

  'Schokolade', 'Zartbitterschokolade', 'Vollmilchschokolade',
  'Kakaopulver', 'Erdnussbutter', 'Marmelade', 'Nussmus'
];

  searchWord(search: string): string | undefined {
    if (search.length < 2) {
      return undefined;
    }

    const s = search.toLowerCase();

    return this.words.find((word) => word.toLowerCase().startsWith(s));
  }
}
