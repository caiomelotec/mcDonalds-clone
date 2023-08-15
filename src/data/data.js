export const importImage = (imageName) => {
  try {
    return require(`../assets/${imageName}`);
  } catch (error) {
    console.error(`Error importing image: ${imageName}`, error);
    return null;
  }
};

export const productListIcons = [
  { label: "Highlights", imageSrc: importImage("hightLightIcon.jpg") },
  { label: "McSmart Menü", imageSrc: importImage("mcsmart.jpg") },
  { label: "McMenü®", imageSrc: importImage("mcmenu.jpg") },
  { label: "Burger", imageSrc: importImage("burger.jpg") },
  {
    label: "McNuggets® & Fingerfood",
    imageSrc: importImage("mcnuggets.jpg"),
  },
  { label: "McPlant®", imageSrc: importImage("mcplant.jpg") },
  { label: "Happy Meal®", imageSrc: importImage("happymeal.jpg") },
  { label: "Beilagen & Extras", imageSrc: importImage("beilage.jpg") },
  { label: "Frühstück", imageSrc: importImage("breakfast.jpg") },
  { label: "Getränke", imageSrc: importImage("drink.jpg") },
  { label: "Desserts", imageSrc: importImage("desserts.jpg") },
  { label: "McCafé®", imageSrc: importImage("mccafe.jpg") },
];
