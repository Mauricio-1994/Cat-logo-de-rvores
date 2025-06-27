import React, { useState } from 'react';
import './App.css';

// Dados das árvores
const treeData = [
  {
    id: 1,
    commonName: "Araçá",
    scientificName: "Psidium cattleyanum",
    imageUrl: "https://i.imgur.com/9AzQpFj.jpeg",
    distribution: "Florestas tropicais e subtropicais...",
    uses: "Frutos consumidos in natura e em doces.",
    heightDiameter: "Até 10 metros de altura...",
    growthTime: "De 2 a 3 anos.",
    endangered: "Algumas espécies estão ameaçadas...",
    nameMeaning: "O nome 'araçá' na linguagem tupi-guarani significa 'planta que tem olhos'",
    nativeExotic: "Nativa da América do Sul.",
    propagation: "Por sementes ou métodos como estaquia e enxertia.",
    fruitingTime: "De 2 a 3 anos após o plantio."
  },
  {
    id: 2,
    commonName: "Araucária",
    scientificName: "Araucaria angustifolia",
    imageUrl: "https://i.imgur.com/Vb25eQn.jpeg",
    distribution: "Sul do Brasil (Mata Atlântica), Argentina, Paraguai.",
    uses: "Madeira, pinhão (semente comestível).",
    heightDiameter: "Até 50m de altura, 2m de diâmetro.",
    growthTime: "Crescimento lento a moderado.",
    endangered: "Criticamente ameaçada.",
    nameMeaning: "Araucária: nome da tribo indígena 'Arauco'.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "Produz pinhões após 12-15 anos."
  },
  {
    id: 3,
    commonName: "Cedro",
    scientificName: "Cedrela fissilis",
    imageUrl: "https://i.imgur.com/diTD4AW.jpeg",
    distribution: "Mais comum na Mata Atlântica...",
    uses: "Madeira nobre para móveis...",
    heightDiameter: "Até 40m de altura...",
    growthTime: "20 a 40 anos, cedro australiano cresce mais rápido.",
    endangered: "Ameaçado de extinção.",
    nameMeaning: "Do grego 'kédros', queimar/perfumar. 'Fissilis' significa fácil de rachar.",
    nativeExotic: "Espécies nativas e exóticas.",
    propagation: "Sementes.",
    fruitingTime: "10 a 15 anos após o plantio."
  },
  {
    id: 4,
    commonName: "Farinha-seca",
    scientificName: "Albizia polycephala",
    imageUrl: "https://i.imgur.com/3nd2CsF.jpeg",
    distribution: "Mata Atlântica, Cerrado e Pantanal.",
    uses: "Frutos comestíveis, doces.",
    heightDiameter: "10 a 35 metros, 40 a 80 cm de diâmetro.",
    growthTime: "Cresce até 5m em 2 anos.",
    endangered: "Não está em extinção.",
    nameMeaning: "Casca amarelada e 'empoeirada', parecida com farinha.",
    nativeExotic: "Nativa da América do Sul.",
    propagation: "Sementes.",
    fruitingTime: "3 a 5 anos após plantio."
  },
  {
    id: 5,
    commonName: "Feijão-cru",
    scientificName: "Enterolobium contortisiliquum",
    imageUrl: "https://i.imgur.com/LQKg4HS.jpeg",
    distribution: "América do Sul (Brasil, Argentina...).",
    uses: "Paisagismo, medicina, indústria.",
    heightDiameter: "20 a 35m de altura, até 160cm de diâmetro.",
    growthTime: "Cerca de 8 anos para iniciar reprodução.",
    endangered: "Não está em extinção.",
    nameMeaning: "Vagem lembra feijão cru.",
    nativeExotic: "Nativa da América do Sul.",
    propagation: "Sementes ou mudas.",
    fruitingTime: "3 a 5 anos."
  },
  {
    id: 6,
    commonName: "Gurucaia",
    scientificName: "Acrocomia aculeata",
    imageUrl: "https://i.imgur.com/ZGlDpXb.jpeg",
    distribution: "Brasil, do México ao Paraguai.",
    uses: "Construção rústica, alimentos.",
    heightDiameter: "20 a 35m, até 140cm de diâmetro.",
    growthTime: "Até 4m em 2 anos.",
    endangered: "Não corre risco de extinção.",
    nameMeaning: "Em tupi-guarani, 'árvore para doença da alma'.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Semente ou estaquia.",
    fruitingTime: "2 a 3 anos após plantio."
  },
  {
    id: 7,
    commonName: "Guaritá",
    scientificName: "Astronium graveolens",
    imageUrl: "https://i.imgur.com/q4xKLC4.jpeg",
    distribution: "Mata Atlântica, Cerrado, Amazônia, etc.",
    uses: "Construção, móveis, paisagismo.",
    heightDiameter: "15 a 25m, 40 a 60 cm de diâmetro.",
    growthTime: "15 a 20 anos.",
    endangered: "Não é extinta.",
    nameMeaning: "Em tupi, significa 'pau-pedra'.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes, enxertia ou mergulhia.",
    fruitingTime: "10 a 15 anos."
  },
  {
    id: 8,
    commonName: "Ingá",
    scientificName: "Inga edulis",
    imageUrl: "https://i.imgur.com/JP2tOoo.jpeg",
    distribution: "Norte e Oeste da América do Sul.",
    uses: "Fruto comestível, madeira, medicina.",
    heightDiameter: "5 a 30m de altura, até 90cm de diâmetro.",
    growthTime: "2 a 3 anos.",
    endangered: "Não está em extinção.",
    nameMeaning: "'Embebido', 'ensopado' (tupi).",
    nativeExotic: "Nativa da América Latina.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "2 a 6 anos após plantio."
  },
  {
    id: 9,
    commonName: "Ipê-amarelo",
    scientificName: "Handroanthus chrysotrichus",
    imageUrl: "https://i.imgur.com/7RfFBmb.jpeg",
    distribution: "Brasil (Mata Atlântica e Cerrado).",
    uses: "Madeira, paisagismo, medicinal.",
    heightDiameter: "Até 20m, 60cm de diâmetro.",
    growthTime: "Rápido a moderado.",
    endangered: "Não ameaçado.",
    nameMeaning: "'Ipê' = casca grossa (tupi).",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "3 a 5 anos."
  },
  {
    id: 10,
    commonName: "Ipê-branco",
    scientificName: "Handroanthus roseoalba",
    imageUrl: "https://i.imgur.com/i3fE3aW.jpeg",
    distribution: "Presente em várias regiões do Brasil.",
    uses: "Paisagismo, ornamental, medicinal.",
    heightDiameter: "7 a 16m, 40 a 50cm de diâmetro.",
    growthTime: "Até 3m em 2 anos.",
    endangered: "Não está em extinção.",
    nameMeaning: "'Ipê' = casca grossa, 'branco' = flor branca.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou vegetativo.",
    fruitingTime: "3 a 5 anos."
  },
  {
    id: 11,
    commonName: "Ipê-roxo",
    scientificName: "Handroanthus impetiginosus",
    imageUrl: "https://i.imgur.com/MI2ZlG7.jpeg",
    distribution: "América do Sul.",
    uses: "Construção civil, medicina popular.",
    heightDiameter: "8 a 12m, 60 a 80cm de diâmetro.",
    growthTime: "3 a 5 anos até florescer.",
    endangered: "Não está ameaçada de extinção.",
    nameMeaning: "'Ipê' = casca dura (tupi), 'roxo' = cor das flores.",
    nativeExotic: "Nativa da América do Sul.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "3 a 7 anos."
  },
  {
    id: 12,
    commonName: "Jaracatiá",
    scientificName: "Jacaratia spinosa",
    imageUrl: "https://i.imgur.com/oqB4SgE.jpeg",
    distribution: "Sul da Bahia ao Rio Grande do Sul.",
    uses: "Fruto e tronco usados na culinária.",
    heightDiameter: "10 a 20m de altura, até 90cm de diâmetro.",
    growthTime: "4 a 6 anos.",
    endangered: "Está em risco de extinção.",
    nameMeaning: "Tupi-guarani: árvore semelhante ao mamoeiro.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "3 a 4 anos após o plantio."
  },
  {
    id: 13,
    commonName: "Jatobá",
    scientificName: "Hymenaea courbaril",
    imageUrl: "https://i.imgur.com/IEsXoMa.jpeg",
    distribution: "Amazônia, Mata Atlântica, Cerrado, Pantanal.",
    uses: "Construção, móveis, medicina popular.",
    heightDiameter: "15 a 40m de altura, até 2m de diâmetro.",
    growthTime: "8 a 12 anos.",
    endangered: "Está em risco de extinção.",
    nameMeaning: "Tupi-guarani: árvore de frutos duros.",
    nativeExotic: "Nativa da América do Sul e Central.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "8 a 12 anos após plantio."
  },
  {
    id: 14,
    commonName: "Jequitibá",
    scientificName: "Cariniana legalis",
    imageUrl: "https://i.imgur.com/VVA84vJ.jpeg",
    distribution: "Leste do Brasil (Mata Atlântica).",
    uses: "Construção civil, móveis, medicina, ornamentação.",
    heightDiameter: "Até 50m de altura e mais de 3m de diâmetro.",
    growthTime: "20 a 30 anos.",
    endangered: "Está ameaçado de extinção.",
    nameMeaning: "Tupi-guarani: gigante da floresta.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "Cerca de 20 anos."
  },
  {
    id: 15,
    commonName: "Mamica-de-porca",
    scientificName: "Zanthoxylum rhoifolium",
    imageUrl: "https://i.imgur.com/cA7N96c.jpeg",
    distribution: "Várias partes do Brasil e América do Sul.",
    uses: "Paisagismo, medicina, arborização.",
    heightDiameter: "6 a 12m, 30 a 40cm de diâmetro.",
    growthTime: "Até 2m em 2 anos.",
    endangered: "Não está em extinção.",
    nameMeaning: "Refere-se aos espinhos do tronco.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "9 a 11 anos."
  },
  {
    id: 16,
    commonName: "Paineira",
    scientificName: "Ceiba speciosa",
    imageUrl: "https://i.imgur.com/1KcGz26.jpeg",
    distribution: "Brasil, Argentina, Paraguai.",
    uses: "Fibra (paina), madeira leve, paisagismo.",
    heightDiameter: "Até 30m, 1m de diâmetro.",
    growthTime: "Crescimento rápido.",
    endangered: "Não ameaçada.",
    nameMeaning: "Referência à paina dos frutos.",
    nativeExotic: "Nativa da América do Sul.",
    propagation: "Sementes, estacas.",
    fruitingTime: "5 a 8 anos."
  },
  {
    id: 17,
    commonName: "Pau-d’alho",
    scientificName: "Gallesia integrifolia",
    imageUrl: "https://i.imgur.com/zuZ5FG2.jpeg",
    distribution: "Bahia ao Paraná e países vizinhos.",
    uses: "Medicina popular, construções rústicas.",
    heightDiameter: "15 a 30m, até 140cm de diâmetro.",
    growthTime: "3 a 4m em 2 anos.",
    endangered: "Risco de extinção.",
    nameMeaning: "Cheiro forte de alho na madeira.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "Após 4 anos."
  },
  {
    id: 18,
    commonName: "Peroba-rosa",
    scientificName: "Aspidosperma polyneuron",
    imageUrl: "https://i.imgur.com/EdxFmfx.jpeg",
    distribution: "Brasil, Argentina, Colômbia, Peru, etc.",
    uses: "Ornamentação, madeira de alta qualidade.",
    heightDiameter: "20 a 30m de altura, até 120cm.",
    growthTime: "Cerca de 12 anos.",
    endangered: "Em risco de extinção.",
    nameMeaning: "'Peroba' vem da dureza, 'rosa' da cor da madeira.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "20 a 30 anos."
  },
  {
    id: 19,
    commonName: "Sibipiruna",
    scientificName: "Caesalpinia pluviosa",
    imageUrl: "https://i.imgur.com/CFDqTi4.jpeg",
    distribution: "Mata Atlântica em vários estados.",
    uses: "Medicinal, marcenaria, construções.",
    heightDiameter: "8 a 16m, 30 a 40cm de diâmetro.",
    growthTime: "5 a 7 anos.",
    endangered: "Não está em extinção.",
    nameMeaning: "Tupi: casca preta ou raiz escura.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "5 a 7 anos."
  },
  {
    id: 20,
    commonName: "Tapiá",
    scientificName: "Alchornea sidifolia",
    imageUrl: "https://i.imgur.com/jQaqtdV.jpeg",
    distribution: "Mata Atlântica no SE e Sul do Brasil.",
    uses: "Recuperação de áreas degradadas.",
    heightDiameter: "10 a 20m, 50 a 70cm de diâmetro.",
    growthTime: "Até 3m no 1º ano.",
    endangered: "Não está em extinção.",
    nameMeaning: "Tupi: fruta de anta.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou meios vegetativos.",
    fruitingTime: "1 ano após plantio."
  }
];

// Lista de Árvores
const TreeList = ({ onSelectTree }) => (
  <div className="catalog-container">
    <h1 className="catalog-title">Catálogo de Árvores do Parque Ecológico Danilo Marques Moura de Goioerê</h1>
    <div className="tree-grid">
      {treeData.map((tree) => (
        <div key={tree.id} className="tree-card" onClick={() => onSelectTree(tree.id)}>
          <div className="image-box">
            <img
              src={tree.imageUrl}
              alt={tree.commonName}
              className="tree-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/400x300/CCCCCC/666666?text=Imagem+Não+Disponível';
              }}
            />
          </div>
          <div className="tree-info">
            <h2>{tree.commonName}</h2>
            <p><em>{tree.scientificName}</em></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Detalhes da Árvore
const TreeDetail = ({ tree, onBack }) => {
  if (!tree) {
    return (
      <div className="detail-container">
        <div className="detail-card">
          <p>Árvore não encontrada.</p>
          <button className="back-button" onClick={onBack}>Voltar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <div className="detail-card">
        <button className="back-button" onClick={onBack}>← Voltar</button>
        <h1>{tree.commonName}</h1>
        <p><em>{tree.scientificName}</em></p>
        <div className="detail-content">
          <div className="detail-image-box">
            <img
              src={tree.imageUrl}
              alt={tree.commonName}
              className="detail-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/CCCCCC/666666?text=Imagem+Não+Disponível';
              }}
            />
          </div>
          <div className="detail-info">
            <p><strong>Distribuição:</strong> {tree.distribution}</p>
            <p><strong>Usos:</strong> {tree.uses}</p>
            <p><strong>Altura/Diâmetro:</strong> {tree.heightDiameter}</p>
            <p><strong>Tempo de Crescimento:</strong> {tree.growthTime}</p>
            <p><strong>Ameaçada:</strong> {tree.endangered}</p>
            <p><strong>Significado do Nome:</strong> {tree.nameMeaning}</p>
            <p><strong>Nativa ou Exótica:</strong> {tree.nativeExotic}</p>
            <p><strong>Propagação:</strong> {tree.propagation}</p>
            <p><strong>Frutificação:</strong> {tree.fruitingTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// App principal
function App() {
  const [selectedTreeId, setSelectedTreeId] = useState(null);
  const selectedTree = treeData.find(tree => tree.id === selectedTreeId);

  return (
    <div>
      {selectedTree ? (
        <TreeDetail tree={selectedTree} onBack={() => setSelectedTreeId(null)} />
      ) : (
        <TreeList onSelectTree={setSelectedTreeId} />
      )}
    </div>
  );
}

export default App;
