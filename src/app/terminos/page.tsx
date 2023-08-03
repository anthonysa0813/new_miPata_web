"use client";
import styles from "./Terminos.module.css";

export default function TerminosPage() {
  return (
    <section className="dark:bg-zinc-900 py-10">
      <div className="container mx-auto px-4 ">
        <h1 className="text-2xl text-orange-500 font-semibold">
          Términos y condiciones de miPata
        </h1>
        <ul className={styles.listTerms}>
          <li className={styles.listItem}>
            Introducción La aplicación de cuidado de mascotas miPata (en
            adelante &ldquo;la aplicación&quot) es propiedad de Contact BPO SAC
            y se proporciona para ayudar a los usuarios a cuidar y administrar a
            sus mascotas de manera más efectiva. Al utilizar la aplicación,
            aceptas cumplir con estos términos y condiciones de uso. Si no estás
            de acuerdo con estos términos y condiciones, no utilices la
            aplicación.
          </li>
          <li className={styles.listItem}>
            Registro de usuario: Para utilizar la aplicación, debes registrarte
            como usuario. Al hacerlo, aceptas proporcionar información precisa y
            completa sobre ti mismo y tu mascota(s), y a mantener esta
            información actualizada. La aplicación se reserva el derecho de
            cancelar o denegar el acceso a cualquier usuario que proporcione
            información falsa o inexacta.
          </li>
          <li className={styles.listItem}>
            Uso de la aplicación: La aplicación está destinada únicamente para
            uso personal y no comercial. Al utilizar la aplicación, aceptas no
            utilizarla para actividades ilegales o inapropiadas, incluyendo,
            pero no limitándose a, el acoso, la difamación o la violación de los
            derechos de propiedad intelectual de terceros. Asimismo, aceptas no
            utilizar la aplicación para distribuir virus o cualquier otro tipo
            de software malicioso.
          </li>
          <li className={styles.listItem}>
            Rastreo de mascotas perdidas: La aplicación ofrece una función de
            rastreo de mascotas perdidas que te permite registrar y buscar a tu
            mascota perdida en la base de datos de la aplicación. Al utilizar
            esta función, aceptas proporcionar información precisa y completa
            sobre tu mascota perdida, y a mantener esta información actualizada.
            Asimismo, aceptas que la aplicación pueda utilizar la información
            que proporcionas para buscar a tu mascota y/o ponerse en contacto
            contigo si tu mascota es encontrada.
          </li>
          <li className={styles.listItem}>
            Adopción de mascotas: encontradas La aplicación ofrece una función
            de adopción de mascotas encontradas que te permite publicar y buscar
            mascotas encontradas en la base de datos de la aplicación. Al
            utilizar esta función, aceptas proporcionar información precisa y
            completa sobre la mascota que has encontrado, y a mantener esta
            información actualizada. Asimismo, aceptas que la aplicación pueda
            utilizar la información que proporcionas para ayudar a encontrar al
            propietario de la mascota.
          </li>
          <li className={styles.listItem}>
            Recomendaciones de lugares pet friendly: La aplicación ofrece
            recomendaciones de lugares pet friendly en tu área, incluyendo
            restaurantes, cafés, tiendas, parques para perros, hoteles que
            admiten mascotas y restaurantes que permiten mascotas en sus patios.
            Sin embargo, la aplicación no se hace responsable de la
            disponibilidad o calidad de los servicios proporcionados por estos
            establecimientos.
          </li>
          <li className={styles.listItem}>
            Market place de productos relacionados: La aplicación ofrece un
            market place de productos relacionados con mascotas, que te permite
            comprar y vender productos para mascotas directamente desde la
            aplicación. Al utilizar esta función, aceptas cumplir con los
            términos y condiciones de venta de la aplicación, y a no utilizar la
            aplicación para vender productos ilegales o inapropiados.
          </li>
          <li className={styles.listItem}>
            Administración de mascotas: La aplicación ofrece una función de
            administración de mascotas que te permite llevar un registro de la
            información de tu mascota, incluyendo su historial médico, su
            alimentación y sus necesidades especiales. Al utilizar esta función,
            aceptas proporcionar información precisa y completa sobre tu
            mascota, y a mantener esta información actualizada.
          </li>
          <li className={styles.listItem}>
            Modificaciones y cancelaciones: La aplicación se reserva el derecho
            de modificar o cancelar cualquier función de la aplicación en
            cualquier momento y sin previo aviso. Asimismo, la aplicación se
            reserva el derecho de cancelar tu acceso a la aplicación en caso de
            incumplimiento de estos términos y condiciones de uso.
          </li>
          <li className={styles.listItem}>
            Propiedad intelectual: La aplicación, incluyendo sus diseños,
            logotipos, marcas comerciales y otros elementos visuales, son
            propiedad exclusiva de Contact BPO SAC y están protegidos por las
            leyes de propiedad intelectual aplicables. No se permite la
            reproducción, distribución, modificación o uso comercial de
            cualquier elemento de la aplicación.
          </li>
          <li className={styles.listItem}>
            Limitación de responsabilidad La aplicación se proporciona
            &ldquo;tal cual&quot; y Contact BPO SAC no ofrece ninguna garantía
            en cuanto a su disponibilidad, seguridad o precisión. En ningún caso
            Contact BPO SAC será responsable por cualquier daño directo,
            indirecto, incidental, especial o consecuente que surja del uso o la
            imposibilidad de uso de la aplicación.
          </li>
          <li className={styles.listItem}>
            Jurisdicción y ley aplicable: Estos términos y condiciones de uso se
            regirán e interpretarán de acuerdo con las leyes de Perú. Cualquier
            disputa que surja en relación con estos términos y condiciones de
            uso se resolverá exclusivamente ante los tribunales competentes en
            Lima.
          </li>
          <li className={styles.listItem}>
            Modificación de los términos y condiciones de uso: La aplicación se
            reserva el derecho de modificar estos términos y condiciones de uso
            en cualquier momento y sin previo aviso. Al utilizar la aplicación
            después de que se hayan realizado modificaciones, aceptas cumplir
            con los términos y condiciones de uso actualizados.
          </li>
        </ul>
        <span className="text-gray-400">
          Al utilizar la aplicación miPata, aceptas cumplir con estos términos y
          condiciones de uso en su totalidad. Si no estás de acuerdo con alguno
          de estos términos y condiciones, no utilices la aplicación.
        </span>
      </div>
    </section>
  );
}
