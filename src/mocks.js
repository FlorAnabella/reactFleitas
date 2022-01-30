const data = [
  {
    id: 1,
    title: "Medusa",
    category: 2,
    description:
    "Especie exótica capturada en la selva tropical del Amazonas. Cuidado! no quitarle la venda!",
    price: "U$S4000",
    pictureURL:
    "https://i.pinimg.com/originals/24/62/11/246211f84293556598824f5316d20370.jpg",
  },
  {
    id: 2,
    title: "Sirena",
    category: 1,
    description:
    "No vayas a enamorarte de ella, y apegate al código de alimentación.",
    price: "U$S6000",
    pictureURL:
    "https://i.pinimg.com/736x/bf/b7/54/bfb754274fb3f291bf5a533d3af5759a.jpg",
  },
  {
    id: 3,
    title: "Kirin dorado",
    category: 2,
    description:
    "Todos tus deseos se harán realidad, dice la antigua maldición China.",
    price: "U$S6000",
    pictureURL:
    "https://i.pinimg.com/originals/a0/c1/46/a0c146e519158875185168486ce27d7f.jpg",
  },
  {
    id: 4,
    title: "Strelizia",
    category: 3,
    description:
    "Cuiado, no te confundas, son aves y sus cantos no te los dedica a vos.",
    price: "U$S3500",
    pictureURL:
    "./strelizia.png",
  },
];

export function getItem(id) {
  return data.find(reg => reg.id === id);
}

export function listItems(catId=null) {
  if (!catId) {
    return data;
  } else {
    return data.filter(reg => reg.category === catId);
  }
}
