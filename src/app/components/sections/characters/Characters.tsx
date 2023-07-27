import CardSection from "./Card";

const dataSection = [
  {
    icon: "location",
    title: "Rastrea a tu mascota",
    content:
      "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    icon: "community",
    title: "Conéctate con otros dueños",
    content:
      "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    icon: "mipata",
    title: "Adopta una mascota",
    content:
      "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    icon: "stars",
    title: "Recomendaciones",
    content:
      "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    icon: "time",
    title: "Calendario y recordatorios",
    content:
      "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    icon: "heart",
    title: "Comparte",
    content:
      "It is a long established fact that a reader will be distracted by the readable",
  },
];

export default function CharacterSection() {
  return (
    <div className="md:px-24 px-4 text-center  ">
      <div className="flex justify-center">
        <div className="w-[600px] ">
          <h1 className="text-center text-4xl text-blue-900 font-semibold">
            Nuestras mejores características para usted
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
        {dataSection.map((item) => (
          <CardSection {...item} key={item.icon} />
        ))}
      </div>
    </div>
  );
}
