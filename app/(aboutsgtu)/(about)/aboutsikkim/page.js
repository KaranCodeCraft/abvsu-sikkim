import Link from "next/link";
import Image from "next/image";
import img1 from "@/public/images/Gallery/about/img1.png" 
import img2 from "@/public/images/Gallery/about/img2.png" 
import img3 from "@/public/images/Gallery/about/img3.png" 
import img4 from "@/public/images/Gallery/about/img4.png" 
import img5 from "@/public/images/Gallery/about/img5.png" 
import img6 from "@/public/images/Gallery/about/img6.png" 
import img7 from "@/public/images/Gallery/about/img7.png" 

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">About Sikkim</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Sikkim</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal" />
      </div>

      {/* Section: The Sikkim State */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={img1}
              alt="Sikkim Landscape"
              className="rounded-lg shadow-md"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              The Sikkim State
            </h2>
            <p className="text-gray-700 leading-7">
              Nestled in India’s northeast, Sikkim is a landlocked paradise
              bordered by the Tibetan Plateaus, Nepal, Bhutan, and West Bengal.
              With dramatic landscapes crowned by Kanchenjunga, the world’s
              third-highest peak, Sikkim’s beauty stretches from lush valleys to
              snowy heights, ranging from 300 to 8540 meters in elevation.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              Despite being India’s third-smallest state, Sikkim thrives
              economically with a GDP of US$ 1.57 billion. Agriculture remains
              vital, while growth in food processing, pharmaceuticals, and
              breweries is transforming Sikkim into a dynamic industrial hub.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Culture */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <Image
              src={img2}
              alt="Cultural Diversity"
              className="rounded-lg shadow-md"
              width={600}
              height={400}
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              A Vibrant Mosaic Of Cultures
            </h2>
            <p className="text-gray-700 leading-7">
              Lepchas, Bhutias, and Nepalis form the cultural soul of Sikkim.
              Their rich traditions, languages, and vibrant festivals like Saga
              Dawa, Maghe Sankranti, and Udhauli reflect a harmonious
              coexistence and deep-rooted heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Cuisine */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={img3}
              alt="Cuisine"
              className="rounded-lg shadow-md"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              A Culinary Adventure Awaits
            </h2>
            <p className="text-gray-700 leading-7">
              From steaming plates of momos to hearty bowls of thukpa, Sikkim’s
              food scene is a delicious journey. Chow mein, thenthuk, and
              traditional snacks tempt every palate, offering a flavorful
              glimpse into local life.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Tourism */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <Image
              src={img4}
              alt="Tourism"
              className="rounded-lg shadow-md"
              width={600}
              height={400}
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              Beyond The Tourist Trail
            </h2>
            <p className="text-gray-700 leading-7">
              Tourism in Sikkim blends culture, nature, and wellness. From
              village stays to eco-tourism and trekking, the state offers
              immersive experiences for adventure lovers and peace seekers
              alike.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Districts */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={img5}
              alt="Districts"
              className="rounded-lg shadow-md"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              Exploring Sikkim's Districts
            </h2>
            <p className="text-gray-700 leading-7">
              Sikkim is divided into four districts — East, West, North, and
              South. Gangtok, the capital, lies in the East. Pakyong leads the
              South, Mangan in the North, and Gyalshing in the West. Each
              district holds its own charm, stories, and unforgettable sights.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Sustainability */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <Image
              src={img6}
              alt="Sustainability"
              className="rounded-lg shadow-md"
              width={600}
              height={400}
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              A Beacon Of Sustainability
            </h2>
            <p className="text-gray-700 leading-7">
              As India’s first fully organic state, Sikkim leads by example. Its
              commitment to sustainability and environmental harmony sets a
              global benchmark, inspiring eco-friendly initiatives worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Education */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={img7}
              alt="Education"
              className="rounded-lg shadow-md"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              Education Benefits: Learning Beyond Textbooks
            </h2>
            <p className="text-gray-700 leading-7">
              Sikkim offers a unique educational experience — where classrooms
              meet mountains, culture, and adventure. Students gain knowledge
              not only through books but also through the enriching rhythm of
              local life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
