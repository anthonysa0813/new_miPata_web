interface Prop {
  icon: string;
  title: string;
  content?: string;
}

export default function CardSection({ icon, title, content }: Prop) {
  return (
    <div className="border rounded-md p-4 flex flex-col text-start border-blue-950 bg-slate-50 hover:bg-slate-200">
      <i className={`icon-${icon} text-3xl text-orange-600`}></i>
      <span className="text-2xl text-blue-950 my-2">{title}</span>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable
      </p>
    </div>
  );
}
