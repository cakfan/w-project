import { Timeline } from "./ui/timeline";

export default function RoadmapSection() {
  const data = [
    {
      title: "Perkenalan",
      content: (
        <div className="flex min-h-screen flex-col justify-center gap-10">
          <p className="text-leading">
            Tahap awal, kita kenalan dulu. Santai aja, nggak ada yang aneh-aneh
            kok, nggak ada skinship, nggak ada gombal-gombal nggak jelas. Cuma
            ngobrol santai sambil tuker pikiran.
          </p>
          <p className="text-leading">
            Kalau udah ngerasa cukup saling kenal, baru deh kita lanjut ke tahap
            berikutnya.
          </p>
        </div>
      ),
    },
    {
      title: "Cocok atau tidak?",
      content: (
        <div className="flex min-h-screen flex-col justify-center gap-10">
          <p className="text-leading">
            Tahap kedua, ngecek cocok apa nggak. Kalau ternyata nggak cocok, ya
            udah, kita balik lagi ke jalan hidup masing-masing.
          </p>
          <p className="text-leading">
            Tapi kalau ngerasa cocok, ya lanjut ke tahap berikutnya dong. 😊
          </p>
        </div>
      ),
    },
    {
      title: "Pertunangan",
      content: (
        <div className="flex min-h-screen flex-col justify-center gap-10">
          <p className="text-leading">
            Di tahap ini, kita ketemu dua keluarga. Orang tuaku emang udah nggak
            ada, tapi tenang aja, aku masih punya sodara kok. 😊
          </p>
          <p className="text-leading">
            Terus gimana kalau ada hal-hal yang bikin kedua keluarga nggak
            sepakat?
          </p>
          <p className="text-leading">
            Kalau masih bisa ditoleransi, ya lanjut aja ke tahap berikutnya.
            Tapi kalau udah nggak ada titik temunya, ya mau gimana lagi, nggak
            bisa lanjut deh. 😞
          </p>
        </div>
      ),
    },
    {
      title: "Pernikahan",
      content: (
        <div className="flex min-h-screen flex-col justify-center gap-10">
          <p className="text-leading">
            Sama kayak tahap sebelumnya, kalau ada hal-hal yang udah nggak bisa
            ditoleransi, ya mau nggak mau harus dibatalin. 😞
          </p>
          <p className="text-leading">
            Soalnya, pernikahan itu bukan buat sehari dua hari, tapi seumur
            hidup bareng-bareng. 🥹
          </p>
        </div>
      ),
    },
  ];
  return (
    <section className="w-full">
      <Timeline data={data} />
    </section>
  );
}
