import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Rumah Sakit Bercitra Islami Pilihan Masyarakat</h1>
            <p className="p-bold-20 md:p-bold-24">Jangan sampai ketinggalan seluruh kegiatan dan acara Rumah Sakit Islam Jakarta Sukapura</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
              Cari Tahu Sekarang
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/milad32.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 5xl:max-h-[50vh]"
            />
        </div>
      </section>

      <section>
        <div className="flex w-full flex-col gap-5">
          Cari
          Kategori
        </div>
      </section>
    </>
  );
}
