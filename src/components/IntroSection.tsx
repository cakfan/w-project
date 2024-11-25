import Paragraph from "@/components/Character";

export default function IntroSection() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center">
      <Paragraph text="Aku bikin website ini simpel aja, aku pengen kenal Wilda lebih dekat. Aku penasaran sama karaktermu, cara pandangmu tentang hidup, politik, dan hal-hal lainnya. Untuk apa? Siapa tahu kita cocok buat menikah. Kalau nggak cocok, nggak apa-apa kok, aku udah siap ditolak. Kalau Wilda nggak mau ketemu langsung karena takut diculik, ya udah, ngobrol lewat chat juga nggak masalah." />
      <div className="h-screen" />

      <Paragraph text="Sebelum itu, kenalan dulu, ya. Hai, aku Taufan Fatahillah. Sekarang aku sibuk jadi freelancer web developer. Karena tinggal di desa, kadang aku juga belajar jadi petani. Lumayan seru, kok :)" />
      <div className="h-screen" />

      <Paragraph text="Dulu kita pernah satu sekolah waktu SMP, bahkan satu kelas juga. Aku suka banget belajar soal teknologi. Setelah lulus SMP, aku lanjut ke SMKN 9 Malang jurusan Teknik Komputer dan Jaringan. Terus, aku lulus dari Politeknik Negeri Jember tahun 2018, jurusan Teknologi Informasi, program studi Teknik Komputer." />
      <div className="h-screen" />

      <Paragraph text="Aku anak bungsu dari dua bersaudara. Orang tuaku udah nggak ada. Ayah meninggal tahun 2018 pas aku lagi minggu terakhir PKL. Terus, ibuku menyusul tahun 2021, waktu kasus COVID lagi tinggi-tingginya." />
      <div className="h-screen" />

      <Paragraph text="Aku ini introvert. Aku nggak terlalu suka keramaian dan nggak jago basa-basi. Aku juga nggak merokok atau vape. Hidupku kelihatan sederhana, tapi di kepalaku ada banyak hal yang aku pikirin." />
      <div className="h-screen" />

      <Paragraph
        text={`Ke depannya, aku pengen bisnis yang aku jalanin sekarang bisa lebih stabil. Aku juga lagi belajar investasi—saham, reksa dana, emas—plus nyobain pola hidup sehat. Selain itu, aku lagi baca-baca soal pernikahan, manajemen konflik, parenting, dan hal-hal lainnya yang menurutku penting. Ada satu kutipan yang aku suka: "Anakmu nggak bisa milih siapa orang tuanya, tapi kamu bisa milih ibu buat anakmu." Aku nggak tahu siapa yang bikin kutipan ini, tapi maknanya dalem banget.`}
      />
      <div className="h-screen" />

      <Paragraph text="Mungkin itu aja dulu. Kalau penasaran atau mau tahu lebih lanjut, kita ngobrol aja. Tapi jujur, kayaknya aku yang lebih penasaran sama Wilda :D" />
    </section>
  );
}
