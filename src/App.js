import React, { useState } from 'react';

// Dados de exemplo para as árvores
// Você pode substituir e expandir estes dados com as informações reais das árvores do parque.
const treeData = [
  {
    id: 1,
    commonName: "Araçá",
    scientificName: "Psidium cattleyanum",
    imageUrl: "https://placehold.co/400x300/FACC15/FFFFFF?text=Araçá", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 2,
    commonName: "Araucária",
    scientificName: "Araucaria angustifolia",
    imageUrl: "https://placehold.co/400x300/F87171/FFFFFF?text=Araucária", // Imagem placeholder
    distribution: "Sul do Brasil (Mata Atlântica), Argentina, Paraguai",
    uses: "Madeira, pinhão (semente comestível)",
    heightDiameter: "Até 50m de altura, 2m de diâmetro",
    growthTime: "Crescimento lento a moderado",
    endangered: "Criticamente ameaçada",
    nameMeaning: "Araucária: nome da tribo indígena 'Arauco'",
    nativeExotic: "Nativa do Brasil",
    propagation: "Sementes",
    fruitingTime: "Produz pinhões após 12-15 anos de plantio",
  },
  {
    id: 3,
    commonName: "Cedro",
    scientificName: "Cedrela fissilis",
    imageUrl: "https://placehold.co/400x300/C0C0C0/FFFFFF?text=Cedro", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 4,
    commonName: "Farinha-seca",
    scientificName: "Albizia polycephala",
    imageUrl: "https://placehold.co/400x300/FCD34D/FFFFFF?text=Farinha-seca", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 5,
    commonName: "Feijão-cru",
    scientificName: "Enterolobium contortisiliquum", // Falso, é o nome científico do Tamboril
    imageUrl: "https://placehold.co/400x300/7CFC00/FFFFFF?text=Feijão-cru", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 6,
    commonName: "Gurucaia",
    scientificName: "Acrocomia aculeata",
    imageUrl: "https://placehold.co/400x300/6B4000/FFFFFF?text=Gurucaia", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 7,
    commonName: "Guaritá",
    scientificName: "Astronium graveolens",
    imageUrl: "https://placehold.co/400x300/8B4513/FFFFFF?text=Guaritá", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 8,
    commonName: "Ingá",
    scientificName: "Inga edulis",
    imageUrl: "https://placehold.co/400x300/32CD32/FFFFFF?text=Ingá", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 9,
    commonName: "Ipê-amarelo",
    scientificName: "Handroanthus chrysotrichus",
    imageUrl: "https://placehold.co/400x300/FFD700/FFFFFF?text=Ipê-amarelo", // Imagem placeholder
    distribution: "Brasil (especialmente Mata Atlântica e Cerrado)",
    uses: "Madeira, paisagismo, medicinal (chá da casca)",
    heightDiameter: "Até 20m de altura, 60cm de diâmetro",
    growthTime: "Crescimento rápido a moderado",
    endangered: "Não ameaçado",
    nameMeaning: "Ipê: do tupi 'casca grossa'; Amarelo: cor de suas flores",
    nativeExotic: "Nativa do Brasil",
    propagation: "Sementes",
    fruitingTime: "Produz frutos anualmente, geralmente após 3-5 anos de plantio",
  },
  {
    id: 10,
    commonName: "Ipê-branco",
    scientificName: "Handroanthus roseoalba",
    imageUrl: "https://placehold.co/400x300/FFFFFF/000000?text=Ipê-branco", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 11,
    commonName: "Ipê-roxo",
    scientificName: "Handroanthus impetiginosus",
    imageUrl: "https://placehold.co/400x300/800080/FFFFFF?text=Ipê-roxo", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 12,
    commonName: "Jaracatiá",
    scientificName: "Jacaratia spinosa",
    imageUrl: "https://placehold.co/400x300/DAA520/FFFFFF?text=Jaracatiá", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 13,
    commonName: "Jatobá",
    scientificName: "Hymenaea courbaril",
    imageUrl: "https://placehold.co/400x300/8B0000/FFFFFF?text=Jatobá", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 14,
    commonName: "Jequitibá",
    scientificName: "Cariniana legalis",
    imageUrl: "https://placehold.co/400x300/A0522D/FFFFFF?text=Jequitibá", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 15,
    commonName: "Mamica-de-porca",
    scientificName: "Zanthoxylum rhoifolium",
    imageUrl: "https://placehold.co/400x300/B22222/FFFFFF?text=Mamica-de-porca", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 16,
    commonName: "Paineira",
    scientificName: "Ceiba speciosa",
    imageUrl: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Paineira", // Imagem placeholder
    distribution: "América do Sul (Brasil, Argentina, Paraguai)",
    uses: "Fibra (painas do fruto), madeira leve, paisagismo",
    heightDiameter: "Até 30m de altura, 1m de diâmetro",
    growthTime: "Crescimento rápido",
    endangered: "Não ameaçada",
    nameMeaning: "Paineira: referência à paina (fibra) dos frutos",
    nativeExotic: "Nativa da América do Sul",
    propagation: "Sementes, estacas",
    fruitingTime: "Produz frutos após 5-8 anos de plantio",
  },
  {
    id: 17,
    commonName: "Pau-d’alho",
    scientificName: "Gallesia integrifolia",
    imageUrl: "https://placehold.co/400x300/6A5ACD/FFFFFF?text=Pau-d’alho", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 18,
    commonName: "Peroba-rosa",
    scientificName: "Aspidosperma polyneuron",
    imageUrl: "https://placehold.co/400x300/E37357/FFFFFF?text=Peroba-rosa", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 19,
    commonName: "Sibipiruna",
    scientificName: "Caesalpinia pluviosa",
    imageUrl: "https://placehold.co/400x300/F0E68C/FFFFFF?text=Sibipiruna", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
  {
    id: 20,
    commonName: "Tapiá",
    scientificName: "Alchornea sidifolia",
    imageUrl: "https://placehold.co/400x300/808000/FFFFFF?text=Tapiá", // Imagem placeholder
    distribution: "A ser preenchida",
    uses: "A ser preenchida",
    heightDiameter: "A ser preenchida",
    growthTime: "A ser preenchida",
    endangered: "A ser preenchida",
    nameMeaning: "A ser preenchida",
    nativeExotic: "A ser preenchida",
    propagation: "A ser preenchida",
    fruitingTime: "A ser preenchida",
  },
];

// Componente da Lista de Árvores (página inicial do catálogo)
const TreeList = ({ onSelectTree }) => {
  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen font-inter">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-8 rounded-lg p-4 bg-white shadow-md">
        Catálogo de Árvores do Parque Ecológico Danilo Marques Moura de Goioerê
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {treeData.map((tree) => (
          <div
            key={tree.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden transform hover:scale-105"
            onClick={() => onSelectTree(tree.id)}
          >
            <img
              src={tree.imageUrl}
              alt={tree.commonName}
              className="w-full h-48 object-cover rounded-t-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/400x300/CCCCCC/666666?text=Imagem+Não+Disponível`;
              }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {tree.commonName}
              </h2>
              <p className="text-sm italic text-gray-600">
                {tree.scientificName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de Detalhes da Árvore (página individual de cada espécie)
const TreeDetail = ({ tree, onBack }) => {
  if (!tree) {
    return (
      <div className="p-8 text-center text-gray-700">
        Árvore não encontrada.
        <button
          onClick={onBack}
          className="mt-4 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors duration-300"
        >
          Voltar ao Catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen font-inter flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl w-full">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-400 transition-colors duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Voltar ao Catálogo
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
          {tree.commonName}
        </h1>
        <p className="text-lg italic text-gray-600 mb-6">
          {tree.scientificName}
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/2">
            <img
              src={tree.imageUrl}
              alt={tree.commonName}
              className="w-full h-auto rounded-xl shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/CCCCCC/666666?text=Imagem+Não+Disponível`;
              }}
            />
          </div>
          <div className="md:w-1/2 text-gray-800 space-y-3">
            <p>
              <strong className="text-green-700">Distribuição Geográfica:</strong>{" "}
              {tree.distribution}
            </p>
            <p>
              <strong className="text-green-700">Usos para o Ser Humano:</strong>{" "}
              {tree.uses}
            </p>
            <p>
              <strong className="text-green-700">Altura e Diâmetro:</strong>{" "}
              {tree.heightDiameter}
            </p>
            <p>
              <strong className="text-green-700">Tempo de Crescimento:</strong>{" "}
              {tree.growthTime}
            </p>
            <p>
              <strong className="text-green-700">Ameaçada de Extinção:</strong>{" "}
              <span
                className={`font-semibold ${
                  tree.endangered === "Não ameaçada"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {tree.endangered}
              </span>
            </p>
            <p>
              <strong className="text-green-700">Significado do Nome:</strong>{" "}
              {tree.nameMeaning}
            </p>
            <p>
              <strong className="text-green-700">Nativa ou Exótica:</strong>{" "}
              {tree.nativeExotic}
            </p>
            <p>
              <strong className="text-green-700">Tipo de Propagação:</strong>{" "}
              {tree.propagation}
            </p>
            <p>
              <strong className="text-green-700">Tempo para Produzir Frutos:</strong>{" "}
              {tree.fruitingTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Principal da Aplicação
function App() {
  const [selectedTreeId, setSelectedTreeId] = useState(null);

  const handleSelectTree = (id) => {
    setSelectedTreeId(id);
  };

  const handleBackToCatalog = () => {
    setSelectedTreeId(null);
  };

  const selectedTree = treeData.find((tree) => tree.id === selectedTreeId);

  return (
    <div>
      {/* Script para carregar o Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Configuração do Tailwind para usar a fonte Inter */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        `}
      </style>

      {selectedTreeId ? (
        <TreeDetail tree={selectedTree} onBack={handleBackToCatalog} />
      ) : (
        <TreeList onSelectTree={handleSelectTree} />
      )}
    </div>
  );
}

export default App;
