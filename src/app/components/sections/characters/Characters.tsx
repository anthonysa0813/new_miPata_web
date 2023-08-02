import CardSection from "./Card";

const dataSection = [
  {
    icon: "location",
    title: "Rastrea a tu mascota",
    content:
      "<p>Si perdiste a tu mascota, repórtala en miPata y nuestra comunidad la buscará. Ponle el <strong className='qr'>QR miPata </strong> y si alguien la escanea te llegará una notificación de ubicación, hora y fecha. </p>",
  },
  {
    icon: "community",
    title: "Conéctate con otros dueños",
    content:
      "<span>Ubica una pareja ideal para tu engreída, encuentra amigos para pasear en el parque y mucho más.</span>",
  },
  {
    icon: "mipata",
    title: "Adopta una mascota",
    content:
      "<span>Encuentra a tu mejor amiga, adóptala y dale mucho amor. En miPata podrás encontrar animalitos encontrados en la calle o rescatados, elegirlos y contactar para adoptarlos. ¡También puedes registrar mascotas en la calle para que alguien más las adopte! </span>",
  },
  {
    icon: "stars",
    title: "Lugares Pet-friendly",
    content:
      "<span>¡Que nunca más te dejen afuera por ir con tu engreída! Entra al mapa y encuentra toda la información de cafés, restaurantes, hoteles y muchos más lugares pet-friendly en tu ciudad. Encuentra también las veterinarias, petshops, parques y hospedajes más cercanos.  </span>",
  },
  {
    icon: "time",
    title: "Calendario y recordatorios",
    content:
      "<span>Registra vacunas, comidas, paseos, medicinas, baños y mucho más. ¡Que nunca se te pase nada sobre el cuidado de tu mascota! </span>",
  },
  {
    icon: "heart",
    title: "Comparte",
    content:
      "<span>Comparte fotos, dale me gusta, haz check-in en los lugares recomendados y envía los perfiles de mascotas que pudieran cuidar o adoptar tus amigos o familiares.  </span>",
  },
];

export default function CharacterSection() {
  return (
    <div className="md:px-24 px-4 text-center dark:bg-zinc-900 ">
      <div className="flex justify-center my-16">
        <div className="w-[600px] ">
          <h1 className="text-center text-4xl text-sky-700 font-semibold">
            ¿Qué puedo hacer con miPata?
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {dataSection.map((item) => (
          <CardSection {...item} key={item.icon} />
        ))}
      </div>
    </div>
  );
}
