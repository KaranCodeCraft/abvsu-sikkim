import Link from "next/link";
import img1 from "@/public/images/Gallery/about/accreditation.png" 
import img2 from "@/public/images/Gallery/about/recognisation.png" 
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Accreditation & Recognition</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Accreditation & Recognition</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal" />
      </div>

      {/* Section: Quality Review */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src={img1} alt="Quality Review" className="rounded-lg shadow-md" width={600} height={400}/>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-600">A Review of the Quality of Higher Education</h2>
            <p className="text-gray-700 leading-7">
              The quality of higher education institutions and programs is a fundamental factor in shaping a nation's academic landscape.
              A well-structured accreditation process ensures that universities adhere to rigorous educational standards, fostering excellence in teaching, research, and student outcomes.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              Independent accreditation bodies assess various elements, including faculty expertise, infrastructure, curriculum relevance, and student success rates.
              These reviews help maintain consistency, transparency, and accountability across educational institutions.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              For students, accreditation offers assurance that their chosen institution meets high-quality academic standards, increasing their global recognition and employability.
              Continuous evaluation ensures programs remain relevant to industry demands and global advancements.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Certification & Recognition */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <Image src={img2} alt="Certification & Recognition" className="rounded-lg shadow-md" width={600} height={400}/>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">Certification & Recognition</h2>
            <p className="text-gray-700 leading-7">
              Certification and recognition play a crucial role in ensuring that educational institutions meet predefined standards of quality and excellence.
              At Atal Bihari Vajpayee Skill University (ABVSU), these processes serve as a mark of credibility and academic integrity.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              ABVSU is recognized by national and international accrediting bodies, which evaluate curriculum, faculty, research, infrastructure, and student outcomes.
              These recognitions ensure students receive education that meets global benchmarks and enhances career opportunities.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              Through rigorous self-assessment and peer-review processes, ABVSU continuously upgrades its academic offerings,
              adopts modern methodologies, and integrates industry-relevant curricula to uphold quality and recognition.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              These certifications are not just acknowledgments, but our commitment to excellence in education and research.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;