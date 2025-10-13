import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Running from "../components/Home/Running";
import Who from "../components/Home/Who";
import Jangan from "../components/Home/Jangan";
import Perbedaan from "../components/Home/Perbedaan";
import Kenapa from "../components/Home/Kenapa";
import Apa from "../components/Home/Apa";
import Kata from "../components/Home/Kata";
import Resiko from "../components/Home/Resiko";
import Langkah from "../components/Home/Langkah";
import Tunggu from "../components/Home/Tunggu";
import Package from "../components/Home/Package";
import Book from "../components/Home/Book";
import HeroBawah from "../components/Home/HeroBawah";
import Faq from "../components/Home/Faq";
import Partnership from "../components/Home/Partnership";

function Home() {
  return (
    <main className="flex flex-col">
      <Helmet>
        {/* Title & Meta Description */}
        <title>
          Haji Dakhili Nusuk Resmi — Tanpa Antri & Terjamin | Noor Haramain
        </title>
        <meta
          name="description"
          content="Noor Haramain — Program Haji Dakhili resmi melalui sistem Nusuk Arab Saudi. Tanpa antri, tanpa ragu, dan bergaransi uang kembali 100%. Fasilitas VIP & layanan resmi Kementerian Haji Arab Saudi."
        />
        <meta
          name="keywords"
          content="haji dakhili, haji nusuk, haji tanpa antri, haji resmi arab saudi, haji iqamah, tasreh haji, haji vip, haji cepat, noor haramain, program haji dakhili, haji mujamalah, haji furoda"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Noor Haramain" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Haji Dakhili Nusuk Resmi — Tanpa Antri & Terjamin | Noor Haramain"
        />
        <meta
          property="og:description"
          content="Program Haji Dakhili resmi dari Kementerian Haji Arab Saudi melalui aplikasi Nusuk. Tanpa masa tunggu, fasilitas VIP, resmi & bergaransi uang kembali 100%."
        />
        <meta property="og:url" content="https://noorharamainservices.com/" />
        <meta
          property="og:image"
          content="https://noorharamainservices.com/Logo.png"
        />
        <meta
          property="og:image:alt"
          content="Haji Dakhili Resmi Melalui Sistem Nusuk — Noor Haramain"
        />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Haji Dakhili Nusuk Resmi — Tanpa Antri & Terjamin | Noor Haramain"
        />
        <meta
          name="twitter:description"
          content="Haji Dakhili resmi dari Kementerian Haji Arab Saudi melalui Nusuk. Tanpa antri, tanpa ragu, fasilitas VIP, dan bergaransi uang kembali 100%."
        />
        <meta
          name="twitter:image"
          content="https://noorharamainservices.com/Logo.png"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://noorharamainservices.com/" />
      </Helmet>

      <div className="w-full md:max-w-sm mx-auto bg-gray-100 h-full">
        <Navbar />
        <div className="">
          <Hero />
          <Running />
          <Who />
          <Jangan />
          <Perbedaan />
          <Kenapa />
          <Apa />
          <Kata />
          <Resiko />
          <Langkah />
          <div className="bg-white">
            <Tunggu />
            <Package />
            <Book />
          </div>
          <HeroBawah />
          <Partnership />
          <Faq />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Home;
