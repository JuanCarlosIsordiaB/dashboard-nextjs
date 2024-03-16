import { IoCafeOutline } from "react-icons/io5";

interface Props {
  title: string;
  subtitle?: string;
  label?: number | string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({title, subtitle, label, icon, href}:Props) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">{title}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              {/* Icono irá aquí */}
              {/* <IoCafeOutline size={50} /> */}
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{label}</h4>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <a href={href} className="text-indigo-600 text-xs font-medium">
            Visitar Componente
          </a>
        </div>
      </div>
    </div>
  );
};
