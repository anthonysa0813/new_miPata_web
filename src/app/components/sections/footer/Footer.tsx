import { BiLogoFacebook, BiLogoTiktok } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiSolidBookBookmark } from "react-icons/bi";
import Link from "next/link";

export default function FooterSection() {
  return (
    <section className="bg-orange-500 text-white md:h-[250px] h-[350px]">
      <div className="md:px-24 px-4 p-10 h-full">
        <div className="grid md:grid-cols-2  h-full">
          <div className=" flex items-center justify-center">
            <div className="flex items-center flex-col">
              <i className="icon-mipata text-5xl"></i>
              <div className="flex mt-3 gap-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=100069419541680"
                  target="_blank"
                  className="border rounded-full p-1 hover:border-blue-950 hover:text-blue-950 transition-all ease-out hover:cursor-pointer"
                >
                  <BiLogoFacebook size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/mipata_app/"
                  target="_blank"
                  className="border rounded-full p-1 hover:border-blue-950 hover:text-blue-950 transition-all ease-out hover:cursor-pointer"
                >
                  <AiFillInstagram size={20} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@mipataapp"
                  target="_blank"
                  className="border rounded-full p-1 hover:border-blue-950 hover:text-blue-950 transition-all ease-out hover:cursor-pointer"
                >
                  <BiLogoTiktok size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:justify-center items-center md:items-start">
            <div className="">
              <Link
                href="mailto:contacto@mipata.pe"
                target="_self"
                className="flex gap-2 items-center hover:text-blue-950 transition-all ease-out"
              >
                <MdEmail size={15} />
                <span>contacto@mipata.pe</span>
              </Link>
            </div>
            <div className="">
              <Link
                href="/terminos"
                className="flex gap-2 items-center hover:text-blue-950 transition-all ease-out"
              >
                <BiSolidBookBookmark size={15} />
                <span>Términos y Condiciones</span>
              </Link>
            </div>
          </div>
          {/* <div className=" flex justify-center ">
            <form className="w-4/5 md:w-4/5 lg:w-full">
              <div className="flex justify-center md:justify-start">
                <h1 className="border-l-2 border-yellow-300 pl-1 text-2xl w-auto">
                  NEWSLETTER
                </h1>
              </div>
              <input
                type="text"
                className="w-full py-2 px-2 rounded-md bg-slate-100 mt-2 text-blue-950"
                placeholder="your_email@gmail.com"
              />
              <button className="w-full py-2 px-2 rounded-md bg-yellow-400 text-white mt-3 font-semibold hover:bg-yellow-500 transition-all ease-out">
                SUBSCRIBIRSE
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
