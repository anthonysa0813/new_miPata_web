import ReactHtmlParser from "react-html-parser";
interface Prop {
  icon: string;
  title: string;
  content?: string;
}

export default function CardSection({ icon, title, content }: Prop) {
  return (
    <div className="border rounded-md p-4 flex flex-col text-start border-blue-950 bg-slate-50 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-900">
      <i className={`icon-${icon} text-3xl text-orange-600`}></i>
      <span className="text-2xl text-blue-950 my-2 dark:text-sky-600">
        {title}
      </span>
      <p className="dark:text-gray-400 text-md ">
        {ReactHtmlParser(content || "")}
      </p>
      <style jsx>{`
        .qr {
          text-decoration: underline;
          /* Agrega aquí otros estilos de Tailwind CSS que desees aplicar */
        }
      `}</style>
    </div>
  );
}
