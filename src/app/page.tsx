import { redirect } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  redirect("/dashboard/main"); //It redirect to CounterPage ( everything under this would not appear )
  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  );
}
