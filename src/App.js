import React, { useState } from 'react';

// Dados de exemplo para as árvores
// Você pode substituir e expandir estes dados com as informações reais das árvores do parque.
const treeData = [
  {
    id: 1,
    commonName: "Araçá",
    scientificName: "Psidium cattleyanum",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczPihsm4x4M8wOBKyB24dLHyDJ7OCyo4CgyEo5W6uSFgTDRtRs_oLFc=w385-h430-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Florestas tropicais e subtropicais. Nativo da Mata Atlântica, com maior ocorrência no litoral do Brasil, desde o Ceará até o Rio Grande do Sul. Também pode ser encontrado em outras regiões como no Centro-Oeste ou Sudeste.",
    uses: "Frutos consumidos in natura e em doces.",
    heightDiameter: "Até 10 metros de altura e de 15 a 25 centímetros de diâmetro.",
    growthTime: "De 2 a 3 anos.",
    endangered: "Algumas espécies de araçá estão ameaçadas de extinção, como araçá-roxo e o araçá-de-manaus.",
    nameMeaning: "O nome \"araçá\" na linguagem tupi-guarani significa \"planta que tem olhos\"",
    nativeExotic: "Nativa da América do Sul, especificamente do Brasil e regiôes próximas.",
    propagation: "Por sementes ou métodos como estaquia e enxertia.",
    fruitingTime: "De 2 a 3 anos após o plantio.",
  },
  {
    id: 2,
    commonName: "Araucária",
    scientificName: "Araucaria angustifolia",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczMaxfSdeJKXJxfU0vEk_hQXV6RZpKlqE5jbBTU0f4sypasxUyg6kvk=w475-h312-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Sul do Brasil (Mata Atlântica), Argentina, Paraguai.",
    uses: "Madeira, pinhão (semente comestível).",
    heightDiameter: "Até 50m de altura, 2m de diâmetro.",
    growthTime: "Crescimento lento a moderado.",
    endangered: "Criticamente ameaçada.",
    nameMeaning: "Araucária: nome da tribo indígena 'Arauco'.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "Produz pinhões após 12-15 anos de plantio.",
  },
  {
    id: 3,
    commonName: "Cedro",
    scientificName: "Cedrela fissilis",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczONgNNHDYhGBJonIR-AiGfmILD660aABMdvcJylmj289HgSbW264rk=w433-h651-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "No Brasil, o cedro é mais comum na Mata Atlântica, podendo também ser encontrado em outros biomas, como o Cerrado.",
    uses: "Madeira nobre para móveis, pisos e contrução civil.",
    heightDiameter: "Pode atingir até 40 metros de altura e 3 metros de diâmetro. No entanto, no Brasil, costuma atingir cerca de 20 metros de altura e 1,2 metros de circunferência.",
    growthTime: "Entre 20 e 40 anos no geral, porém algumas espécies como o cedro australiano podem crescer rapidamente, atingindo 8 metros de altura e 20 centímetros de diâmetro aos três anos.",
    endangered: "Ameaçado de extinção, especificamente na categoria \"vulnerável\".",
    nameMeaning: "Origem grega: kédros - significa \"queimar\", \"perfumar\" ou \"purificar\", em referência a odor da madeira. Origem latina: fissilis - significa \"fácil de rachar\".",
    nativeExotic: "Algumas espécies são nativas e outras exóticas. A espécie mais comum no Brasil é o cedro-rosa, nativa da região. Existem outras espécies que são nativas da América Central, América do Sul ou até mesmo do Oriente Médio.",
    propagation: "Sementes.",
    fruitingTime: "Entre 10 a 15 anos após o plantio (dependendo do tipo e das condições de cultivo).",
  },
  {
    id: 4,
    commonName: "Farinha-seca",
    scientificName: "Albizia polycephala",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczOCR66sVs4lv-SXm4eX_qX_p5Ne6rGsAnNTkqHn568bTtXsI36FK14=w598-h478-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Encontrada no Brasil, especialmente na Mata Atlântica, no Cerrado e no Pantanal.",
    uses: "Frutos comestíveis, consumidos in natura ou em doces.",
    heightDiameter: "Pode atingir entre 10 e 20 metros de altura, com algumas árvores podendo chegar a 35 metros. O diâmetro do tronco pode variar entre 40 a 80 centímetros, mas em árvores mais velhas pode chegar a 3 metros.",
    growthTime: "Pode alcançar, em média, 4 a 5 metros de altura em 2 anos.",
    endangered: "Não está em extinção.",
    nameMeaning: "O nome \"farinha-seca\" se deve à sua casca amarelada e ligeiramente \"empoeirada\", que se assemelha a farinha seca.",
    nativeExotic: "Nativa da América do Sul.",
    propagation: "Sementes.",
    fruitingTime: "Cerca de 3 a 5 anos após o plantio.",
  },
  {
    id: 5,
    commonName: "Feijão-cru",
    scientificName: "Enterolobium contortisiliquum", // Falso, é o nome científico do Tamboril
    imageUrl: "https://placehold.co/400x300/7CFC00/FFFFFF?text=Feijão-cru", // Imagem placeholder
    distribution: "Distribuída pela América do Sul, especificamente em áreas do Brasil, Argentina, Uruguai, Paraguai, Bolívia e outras regiões.",
    uses: "Uso em paisagismo e restauração de áreas degradadas, além de usos medicinas e industriais.",
    heightDiameter: "Pode atingir entre 20 e 35 metros de altura e de 80 a 160 centímetros de diâmetro.",
    growthTime: "O tempo de crescimento pode variar dependendo das condições ambientais e tipo de solo, mas leva cerca de 8 anos para iniciar o processo reprodutivo.",
    endangered: "Não está em extinção.",
    nameMeaning: "O nome \"feijão-cru\" se refere à vagem da árvore, que se assemelha à uma vagem de feijão.",
    nativeExotic: "Nativa da América do Sul.",
    propagation: "Sementes ou mudas.",
    fruitingTime: "Cerca de 3 a 5 anos após o plantio.",
  },
  {
    id: 6,
    commonName: "Gurucaia",
    scientificName: "Acrocomia aculeata",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczNGySckTtcG6_6dkkRZvx8F2q69M7F7FN5Jaykh0z9OGqhYG0rbOaM=w640-h419-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Pode ser encontrada em quase todas as regiões do Brasil, desde o sul do México e Caribe até o Paraguai e norte da Argentina.",
    uses: "Usado em construções rústicas, confecção de redes e linhas de pesca, além da polpa e a amêndoa que são consumidas in natura ou em produtos como sorvetes, bolos e cocadas.",
    heightDiameter: "Pode variar de 20 a 30 metros, com exemplares maiores chegando a até 35 metros, e o diâmetro pode variar de 60 a 110 centímetros com registros de até 140 centímetros.",
    growthTime: "Pode até atingir 4 metros em 2 anos.",
    endangered: "Não corre risco de extinção.",
    nameMeaning: "Em tupi-guarani, é conhecida como \"angicó-caá\", que se traduz como \"árvore para a doença da alma\"..",
    nativeExotic: "Nativa da América do sul, especialmente da região tropical do Brasil.",
    propagation: "Por semente ou por estaquia. ",
    fruitingTime: "Leva de cerca de 2 a 3 anos para começar a produzir frutos.",
  },
  {
    id: 7,
    commonName: "Guaritá",
    scientificName: "Astronium graveolens",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczNwDQ2gkyddBVD_qan8WzDrKLtVDQv-lBvGR_eHNZg5iaLUL0r_7LU=w425-h548-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Mata Atlântica, Caatinga, Cerrado, Amazônia e Pampa.",
    uses: "Construção civil, móveis e paisagismo.",
    heightDiameter: "Pode variar de 15 a 25 metros e o diâmetro varia entre 40 a 60 centímetros.",
    growthTime: "De 15 a 20 anos.",
    endangered: "Não é considerada em extinção.",
    nameMeaning: "Tem origem tupi-guarani e significa \"pau-pedra\".",
    nativeExotic: "Nativa do brasil, mas também  encontrada em outras regiões da América do Sul.",
    propagation: "Sementes, enxertia ou mergulhia.",
    fruitingTime: "Leva de cerca de 10 a 15 anos para começar a produzir frutos de forma considerável.",
  },
  {
    id: 8,
    commonName: "Ingá",
    scientificName: "Inga edulis",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczNVDY2za3Q4JRC3ULkNXG3q_ppLtJSM4iNKs7ofal-m9WDTHcMmPRE=w526-h340-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Encontrado no Norte e Oeste da América do Sul.",
    uses: "Usada na medicina popular, a madeira é usada em obras internas e  os frutos são comestíveis.",
    heightDiameter: "A altura pode variar entre 5 e 25 metros, com algumas árvores atingindo até 30 metros. O diâmetro varia entre 50 e 90 centímetros.",
    growthTime: "De 2 a 3 anos.",
    endangered: "Não está em extinção.",
    nameMeaning: "O nome \"ingá\" tem origem indígena, significando \"embebido, ensopado\".",
    nativeExotic: "Nativa da América Latina.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "Varia de acordo com as condições de cultivo, mas geralmente leva cerca de 2 a 6 anos após o plantio.",
  },
  {
    id: 9,
    commonName: "Ipê-amarelo",
    scientificName: "Handroanthus chrysotrichus",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczOYho3bL3gowxW7nnrFrBiLrGVS8c097SPj1jExLS08b-LvFOd8tJo=w653-h651-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Brasil (especialmente Mata Atlântica e Cerrado).",
    uses: "Madeira, paisagismo, medicinal (chá da casca).",
    heightDiameter: "Até 20m de altura, 60cm de diâmetro.",
    growthTime: "Crescimento rápido a moderado.",
    endangered: "Não ameaçado.",
    nameMeaning: "Ipê: do tupi 'casca grossa'; Amarelo: cor de suas flores.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "Produz frutos anualmente, geralmente após 3-5 anos de plantio.",
  },
  {
    id: 10,
    commonName: "Ipê-branco",
    scientificName: "Handroanthus roseoalba",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczMKDAW2bxHj1F0UvvtDrDDSAxrr3eEg3N4DNkWD-_kKrFgffSS-VyE=w619-h651-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Encontrado em diversas regiões do Brasil, principalmente no Norte, Nordeste, Sudeste e Centro-Oeste.",
    uses: "Ornamentação, paisagismo e até usos medicinais.",
    heightDiameter: "Altura entre 7 e 16 metros e o diâmetro varia de 40 a 50 centímetros.",
    growthTime: "Tempo de crecimento moderado, com as árvores alcançando de cerca de 3 metros em 2 anos ",
    endangered: "Não está em ameaça de extinção.",
    nameMeaning: "O nome \"ipê branco\" vem da língua tupi-guarani. \"Ipê\" significa \"árvore de casca grossa\". \"Branco\" se refere à cor da flor, que é branca.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Pode ser propagada tanto por sementes como por métodos vegetativos.  ",
    fruitingTime: "Geralmente leva de 3 a 5 anos a partir do plantio para começar a produzir frutos.",
  },
  {
    id: 11,
    commonName: "Ipê-roxo",
    scientificName: "Handroanthus impetiginosus",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczOuJchPgH6YE55GNX29RYGgXinCVfvR3OUgZBxNcX7mdKBsi7cw8ls=w282-h209-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Encontrada em muitas áreas da América do Sul.",
    uses: "Utilizada na medicina popular e construção civil.",
    heightDiameter: "Pode atingir uma altura de 8 a 12 metros, com diâmetro do tronco variando entre 60 a 80 centímetros.",
    growthTime: "Pode levar de 3 a 5 anos para florescer após o plantio.",
    endangered: "Não está ameaçada de extinção.",
    nameMeaning: "Tem origem na língua tupi-guarani. \"Ipê\" significa \"árvore de casca dura\". \"Roxo\" descreve a cor das flores.",
    nativeExotic: "Nativa da América do Sul.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "De 3 a 7 anos.",
  },
  {
    id: 12,
    commonName: "Jaracatiá",
    scientificName: "Jacaratia spinosa",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczP1NSMD5vZVblus7wGUybrQ4ZKSRzNUZPmKzSEy9rdsUhz6rI6BPNI=w196-h257-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Mata Atlântica, com distribuição desde o sul da Bahia até o Rio Grande do Sul.",
    uses: "Os frutos (e o até o tronco) podem ser utilizados na culinária.",
    heightDiameter: "Pode atingir entre 10 e 20 metros de altura. O diâmetro geralmente varia entre 60 a 90 centímetros.",
    growthTime: "Cerca de 4 a 6 anos.",
    endangered: "Está em risco de extinção.",
    nameMeaning: "Em tupi-guarani significa \"árvore semelhante ao mamoeiro\".",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "Cerca de 3 a 4 anos após o plantio.",
  },
  {
    id: 13,
    commonName: "Jatobá",
    scientificName: "Hymenaea courbaril",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczO9BEP-0YJc1p6G9bfm8p4nlLqw1ktKPCZG144Gf2MairqJkjwKs8Y=w488-h651-s-no-gm?authuser=0", // A URL duplicada foi corrigida aqui
    distribution: "Muito amplo no Brasil, encontrado em biomas como a Amazônia, Mata Atlântica, Pantanal e Cerrado.",
    uses: "Utilizado na medicina popular, além disso, a madeira do jatobá é usada em construções e fabricações de móveis.",
    heightDiameter: "Altura entre 15 e 40 metros, e o diâmetro pode variar entre 0,5 a 2 metros.",
    growthTime: "Entre 8 a 12 anos.",
    endangered: "Está em risco de extinção.",
    nameMeaning: "\"Jatobá\" vem do tupi-guarani e significa \"árvore de frutos duros\".",
    nativeExotic: "Nativa da América do Sul e Central.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "Começa a frutificar entre 8 a 12 anos de idade.",
  },
  {
    id: 14,
    commonName: "Jequitibá",
    scientificName: "Cariniana legalis",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczOtXNtriXFRj80odnvT-wUic9t_h6RdD_0RDmshOPY1EXecfaaSbNM=w793-h545-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Mata Atlântica, encontrada especialmente no leste do Brasil.",
    uses: "Construção civil, fabricação de móveis, medicina popular e ornamentação.",
    heightDiameter: "Pode chegar a 50 metros de altura, e o diâmetro pode ser superior a 3 metros.",
    growthTime: "Cerca de 20 a 30 anos.",
    endangered: "Está ameaçado de extinção.",
    nameMeaning: "Vem do tupi-guarani e significa \"gigante da floresta\".",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "Leva cerca de 20 anos para iniciar o processo de frutificação.",
  },
  {
    id: 15,
    commonName: "Mamica-de-porca",
    scientificName: "Zanthoxylum rhoifolium",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczPW6SD8kBaI6mCtEML0_6U_TdsOyPi3V62TI5LZwYMDNCzTSJ6SwG4=w324-h492-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Várias partes da América do Sul, incluindo o Brasil.",
    uses: "Fins medicinais, paisagismo e arborização.",
    heightDiameter: "Altura de 6 a 12 metros, com o diâmetro do tronco variando entre 30 e 40 centímetros.",
    growthTime: "Tempo de crescimento moderado. Geralmente sua altura não ultrapassa 2 metros em 2 anos de idade.",
    endangered: "Não está em extinção.",
    nameMeaning: "O nome popular refere-se à aparência da árvore que possui espinhos em seu tronco.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "Leva entre 9 e 11 anos para começar a frutificar.",
  },
  {
    id: 16,
    commonName: "Paineira",
    scientificName: "Ceiba speciosa",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczN6glr1K2mNG-dglhl1v-2b_er4RQSXFIf0TfaHCvc6nfGGqHiIvzc=w645-h631-s-no-gm?authuser=0", // Imagem placeholder
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
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczM-bKl8Ru16VSU4YuoF_FdQdBokvEq_m8MQ3kl0RK5MdHkvXxfMaag=w488-h651-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Distribuição ampla desde a Bahia até o Paraná, além de ser encontrada também em outras regiões da América do Sul, como a Bolívia, Equador e Peru.",
    uses: "Medicina popular, arborização e construções rústicas.",
    heightDiameter: "Pode atingir uma altura de 15 a 30 metros, com o diâmetro do tronco variando entre 70 e 140 centímetros.",
    growthTime: "Pode atingir 3 a 4 metros em cerca de 2 anos.",
    endangered: "Está na lista de espécies que correm risco de extinção.",
    nameMeaning: "O nome se refere ao seu forte aroma que se assemelha à alho, principalmente quando a madeira é verde.",
    nativeExotic: "Nativa do Brasil, mas também encontrada em outros países.",
    propagation: "Sementes.",
    fruitingTime: "Começa a produzir frutos a partir de 4 anos de idade.",
  },
  {
    id: 18,
    commonName: "Peroba-rosa",
    scientificName: "Aspidosperma polyneuron",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczO_oGdcgRGok85w2H6ywxHnE9gkpYRlxM3Kt8xlLK00XP32DCwAof8=w341-h435-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "A distribuição é vasta e ocorre naturalmente no Brasil, Argentina, Paraguai, Colômbia, Peru e Venezuela.",
    uses: "Ornamentação, além de sua madeira de alta qualidade ser utilizada em diferentes tipos de fabricação.",
    heightDiameter: "Pode atingir alturas de 20 a 30 metros, com diâmetro de 60 a 120 centímetros.",
    growthTime: "Pode levar cerca de 12 anos para atingir um crescimento considerável.",
    endangered: "Está em risco de extinção.",
    nameMeaning: "O nome \"peroba\" pode ter origem indígena, relacionada à dureza da madeira. \"Rosa\" se refere à cor que a madeira apresenta quando cortada.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes.",
    fruitingTime: "Começa a frutificar por volta dos 20 a 30 anos de idade.",
  },
  {
    id: 19,
    commonName: "Sibipiruna",
    scientificName: "Caesalpinia pluviosa",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczNS0VZ61yce5mTO1iRyv9hsiHyl_OBgcE18dw5WIAr7I3LE3RDQk30=w868-h651-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Região da Mata Atlântic, com ocorrência em diversos estados do Brasil.",
    uses: "Usos medicinais, marcenaria e construções.",
    heightDiameter: "Altura entre 8 e 16 metros, com o diâmetro do tronco variando entre 30 a 40 centímetros.",
    growthTime: "Cerca de 5 a 7 anos.",
    endangered: "Não está em extinção.",
    nameMeaning: "O nome \"sibipiruna\" tem origem tupi-guarani e traduz-se como \"casca preta\" ou \"raíz de casca preta\".",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou estaquia.",
    fruitingTime: "Pode começar a frutificar por volta de 5 a 7 anos após o plantio.",
  },
  {
    id: 20,
    commonName: "Tapiá",
    scientificName: "Alchornea sidifolia",
    imageUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczP1YJH1xnls3FaHT53q9BBuYmOWc86W3150SClGDvxQ1p2_lhrjhe8=w750-h532-s-no-gm?authuser=0", // Imagem placeholder
    distribution: "Mata Atlântica no Sudeste e Sul do Brasil, incluindo diversos outros estados brasileiros.",
    uses: "Recomposição de áreas degradadas, além de aplicações em carpintaria.",
    heightDiameter: "Entre 10 a 20 metros de altura e tronco com diâmetro entre 50 a 70 centímetros.",
    growthTime: "Tempo de crescimento considerado rápido, podendo atingir até 3 metros de altura no primeiro ano (em condições ideais de plantio).",
    endangered: "Não está em risco de extinção.",
    nameMeaning: "O nome vem do tupi-guarani e significa \"fruta de anta\", pois as antas têm predileção por esse fruto.",
    nativeExotic: "Nativa do Brasil.",
    propagation: "Sementes ou meios vegetativos.",
    fruitingTime: "Começa a frutificar cerca de 1 ano a partir da muda.",
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

