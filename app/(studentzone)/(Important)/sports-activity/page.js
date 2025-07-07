'use client';

import Image from 'next/image';

export default function SportsActivity() {
  return (
    <main className="space-y-20 px-4 py-16 max-w-7xl mx-auto">

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">
            Sports <span className="text-orange-500">Activity</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sikkim Global Technical University (SGTU) recognizes the vital role that sports and physical activity play in the holistic development of students. With an emphasis on fostering a healthy lifestyle and promoting teamwork, discipline, and leadership skills, SGTU offers a dynamic sports program that encourages students to engage in a variety of physical activities and competitive sports. This commitment to sports not only enhances students’ physical well-being but also contributes to their personal growth and academic success.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The university boasts state-of-the-art sports facilities that cater to a wide range of sports and physical activities. From outdoor fields for football, cricket, and athletics to indoor facilities for basketball, badminton, and table tennis, SGTU provides students with ample opportunities to participate in various sports. The campus is designed to promote an active lifestyle, encouraging students to take advantage of these facilities for both recreational and competitive purposes.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/Gallery/sports/gym.jpg"
            alt="Sport Training"
            width={700}
            height={450}
            className="object-cover w-full h-[300px] md:h-[450px]"
            priority
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Image */}
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/Gallery/sports/athelete.jpg"
            alt="Sports Activity"
            width={700}
            height={450}
            className="object-cover w-full h-[300px] md:h-[450px]"
            priority
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            SGTU places a strong emphasis on the importance of sportsmanship and teamwork. The university encourages students to join various sports clubs and teams, fostering a sense of camaraderie and collaboration among peers. Participation in team sports not only helps students develop physical skills but also teaches them valuable life skills such as communication, cooperation, and strategic thinking. These experiences prepare students for future challenges, both on and off the field, by instilling a sense of responsibility and commitment to achieving shared goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In addition to organized sports, SGTU promotes various fitness activities that cater to students' diverse interests. The university offers yoga and aerobics classes, along with fitness training sessions led by experienced instructors. These activities encourage students to maintain a balanced lifestyle and promote physical and mental well-being. The emphasis on fitness not only helps students manage stress but also enhances their focus and productivity in their academic pursuits.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            SGTU organizes inter-college sports competitions and events throughout the academic year, providing students with opportunities to showcase their talents and compete against peers from other institutions. These competitions foster a spirit of healthy rivalry and encourage students to strive for excellence. Additionally, participation in sports events often leads to the development of friendships and networks that can last a lifetime. The university also hosts annual sports days, celebrating student achievements and promoting sports culture on campus.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The university’s sports program is supported by a dedicated team of coaches and trainers who are committed to developing students' athletic abilities. These professionals provide personalized training and guidance, helping students hone their skills and achieve their personal best. The coaches also emphasize the importance of discipline, perseverance, and goal-setting, which are essential traits for success in both sports and academics.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/Gallery/sports/sports.jpg"
            alt="Sport Training"
            width={700}
            height={450}
            className="object-cover w-full h-[300px] md:h-[450px]"
            priority
          />
        </div>
      </section>

    </main>
  );
}
