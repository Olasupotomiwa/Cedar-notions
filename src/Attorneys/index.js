import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Chimaroke from "../assets/Chimaroke.jpg";
import Badejoko from "../assets/BadejokoSelimot.jpg";
import Collins from "../assets/Collins.jpg";
import Ogbonna from '../assets/Ogbonna.png';
import EkeChinedu from "../assets/EkeChinedum.jpg";
import IkeNed from "../assets/IkeNed.JPG";
import Okechukwu from "../assets/Okechukwu.jpg";
import Footer from "../Homepage/Footer"

const attorneys = [
  {
    name: "Eke Chinedum Obioha",
    position: "Managing Partner",
    expertise: [
      "Real Estate and Property Law, \n",
      "Corporate Governance and Regulatory Compliance, \n",
      "Arbitration & Alternative Dispute Resolution (ADR), \n",
      "Commercial and Industrial Law",
    ],
    experience: "18 years",
    education: "University of Lagos",
    contact: "c.eke@cedarnotionsassociate.co.site",
    profile: [
      `Eke Chinedum Obioha brings two decades of rich experience in legal practice, specializing in real estate and property law as well as corporate governance. His deep understanding of regulatory compliance enables him to navigate complex legal landscapes effectively, providing clients with the strategic insights needed to thrive in competitive markets.`
      `As a seasoned practitioner, Eke excels in handling intricate corporate transactions and has a proven track record in arbitration and alternative dispute resolution, ensuring that client interests are safeguarded in various legal contexts. His comprehensive knowledge of constitutional and administrative law further enhances his ability to advise on multifaceted legal issues, making him a trusted advisor for businesses and individuals alike.`
      `Eke’s educational background from the University of Lagos complements his practical experience, equipping him with a robust foundation in legal principles and practices. His commitment to driving client success is evident in his proactive approach and tailored strategies, positioning him as a key player in the legal field.`
    ],
    image: EkeChinedu,
  },
  {
    name: "Ogbonna Vincent Ifeanyi",
    position: "Partner",
    expertise: ["Litigation, \n", "Oil and Gas / Energy Law, \n", "Family Law"],
    experience: "18 years",
    education: "University of Lagos",
    contact: "v.ogbonna@cedarnotionsassociate.co.site",
    profile: [
      `Ogbonna Vincent Ifeanyi is a distinguished legal 
      partner with decades of experience in legal practice. 
      He possesses a deep understanding of dispute 
      resolution, where his analytical skills and strategic 
      thinking play a crucial role in effectively advocating 
      for clients.`
      `Vincent has 18 years of expertise in various fields, 
      including litigation, oil and gas/energy law, family 
      law, taxation, data protection, telecommunications 
      law, and cybersecurity law. Vincent's extensive 
      knowledge in taxation enables him to provide 
      comprehensive tax planning and compliance 
      strategies, helping clients navigate the 
      complexities of tax regulations with confidence.`
      `Educated at the University of Lagos, Vincent 
      combines his academic foundation with practical 
      experience to deliver nuanced legal solutions. His 
      client-centered approach emphasizes 
      understanding individual needs and crafting 
      strategies that align with their goals. This 
      dedication to personalized service has earned him a 
      reputation as a trusted advisor in both corporate 
      and personal legal matters.`
      
    ],
    image: Ogbonna,
  },
  {
    name: "Edoziem Chimarokem Prince",
    position: "Senior Associate/Team Lead, Litigation Department",
    expertise: [
      "Litigation, \n",
      "Copyright Law, \n",
      "Telecommunication Law, \n",
      "Banking and Finance, \n",
      "Taxation, \n",
      "Maritime Law",
    ],
    experience: "15 years",
    education: "University of Makurdi",
    contact: "c.edoziem@cedarnotionsassociate.co.site",
    profile: [
      `Edoziem Chimarokem Prince is a highly skilled Senior 
      Associate with 15 years of comprehensive experience in 
      litigation, copyright law, telecommunication law and banking 
      and finance. His legal acumen spans various domains, enabling 
      him to effectively address the nuanced challenges that clients 
      face in these areas.`
      `Chimarokem’s expertise in litigation makes him a formidable 
      advocate in the courtroom, where he employs a strategic 
      approach to ensure favorable outcomes for his clients. His deep 
      understanding of copyright law equips him to safeguard 
      intellectual property rights, helping creators and businesses 
      navigate the complexities of protecting their original works.`
      `In the banking and finance sector, Chimarokem adeptly 
      interprets and applies financial regulations, providing clients 
      with informed guidance on compliance and risk management. 
      His analytical mindset drives innovative solutions, allowing 
      him to craft tailored strategies that align with client objectives 
      while mitigating potential legal risks.`
      `A proud alumnus of Ahmadu Bello University, Chimarokem 
      combines his solid educational foundation with practical 
      experience to deliver insightful legal counsel. His commitment 
      to excellence and attention to detail have earned him a 
      reputation as a reliable partner in achieving client success 
      across diverse legal landscapes.`
    ],
    image: Chimaroke,
  },
  {
    name: "Nwaogbo Ikedinachi Collins",
    position: "Senior Associate",
    expertise: ["Criminal Justice, \n", "Corporate Law, \n", "Commercial Law"],
    experience: "12 years",
    education: "Imo State University",
    contact: "i.nwaogbo@cedarnotionsassociate.co.site",
    profile: [
      `Nwaogbo Ikedinachi Collins is a dedicated Senior 
      Associate with 12 years of diverse legal experience 
      specializing in criminal justice, corporate law, and 
      commercial law. His comprehensive expertise allows him 
      to navigate complex legal matters with confidence and 
      precision.`
      `In the realm of criminal justice, Ikedinachi provides 
      diligent support, ensuring that clients receive thorough 
      representation and guidance throughout the legal process. 
      His strong advocacy skills and understanding of criminal 
      law enable him to address sensitive issues effectively and 
      pursue the best possible outcomes for his clients.`
      `Ikedinachi also excels in corporate and commercial law, 
      where his meticulous attention to detail plays a vital role 
      in structuring transactions, drafting contracts, and 
      ensuring compliance with regulatory requirements. He 
      works closely with businesses to develop strategies that 
      minimize risk while maximizing opportunities for growth 
      and success.`
      `A graduate of Imo State University, Ikedinachi combines a solid academic foundation with practical experience, allowing him to deliver well-rounded legal solutions tailored to the unique needs of each client. His commitment to excellence and his proactive approach have earned him a reputation as a trusted advisor in both corporate and criminal legal matters.`
    ],
    image: Collins,
  },
  {
    name: "Badejoko Selimot Jokotade",
    position: "Associate",
    expertise: ["General Practice"],
    education: "Osun State University",
    contact: "s.badejoko@cedarnotionsassociate.co.site",
    profile: [
      `firm, serving as an Associate with a focus on general 
      practice. A proud graduate of Osun State University, she 
      blends a strong academic background with a genuine 
      passion for the law, which motivates her to provide 
      exceptional service to her clients. Selimot graduated with 
      first-class honors, demonstrating her commitment to 
      excellence and her dedication to achieving the best 
      results.`
      `As a rising star within our team, Selimot brings fresh 
      perspectives and innovative thinking to every case. Her 
      enthusiasm for learning and professional development 
      allows her to stay ahead of legal trends, ensuring that 
      clients benefit from cutting-edge solutions tailored to 
      their specific needs.`
      `Selimot's approach is characterized by her meticulous 
      attention to detail and her ability to think critically, 
      making her an invaluable resource for navigating a 
      variety of legal issues. She is committed to providing 
      comprehensive support, whether in client consultations, 
      legal research, or drafting documents, always prioritizing 
      client satisfaction.`

      `Her dedication to excellence and her proactive mindset positions her as a promising legal professional, ready to tackle the challenges of the ever-evolving legal landscape. Clients can trust that Selimot will bring her best efforts to every engagement, working collaboratively to achieve their goals.`
    ],
    image: Badejoko,
  },
  {
    name: "Okechukwu Emmanuel Eke",
    position: "Estate Manager & Real Estate Expert",
    expertise: ["Real Estate Management, \n", "Property Development"],
    education: "Abia State University",
    contact: "o.emmanuel@cedarnotionsassociate.co.site",
    profile: [
      `Okechukwu Emmanuel Eke serves as our dedicated Estate 
      Manager and Real Estate Expert, bringing a wealth of 
      knowledge and experience to the table. A graduate of Abia 
      State University, Okechukwu specializes in real estate 
      management and property development, where he excels 
      in transforming client visions into successful 
      investments.`
      `In his role, Okechukwu oversees a diverse range of real 
      estate management and development initiatives, ensuring 
      that projects are executed efficiently and effectively. His 
      expertise allows him to assess market trends, identify 
      lucrative opportunities, and implement strategies that 
      optimize client investments.`
      `He is adept at navigating the complexities of property 
      development, from initial planning and design through to 
      execution and marketing. Okechukwu’s strong analytical 
      skills and attention to detail enable him to manage 
      projects meticulously, ensuring that all aspects of real 
      estate transactions are handled with precision.`,
      `Driven by a passion for excellence in real estate, 
      Okechukwu consistently seeks innovative solutions that 
      enhance the value of client properties and maximize 
      returns on investment. His proactive approach and 
      dedication to client success make him a valuable asset to 
      our team and a trusted partner in the real estate sector.`
    ],
    image: Okechukwu,
  },

  {
    name: "Ike Ned Stanley",
    position: "Faculty Manager & Maintenance Expert",
    expertise: [
      "Faculty Management, \n",
      "Maintenance \n",
      "Operations, \n",
      "Safety Compliance, \n",
    ],

    education: "Michael Okpara University of Agriculture, Umudike (2002)",
    contact: "i.nedstanley@cedarnotionassociates.co.site",
    profile: [
      `Ike Ned Stanley is an experienced Facility Manager and 
      Maintenance Expert with over 15 years in the industry. A 
      graduate of Michael Okpara University of Agriculture in 
      Abia State, he specializes in facility management, 
      maintenance, and operations, ensuring optimal 
      functionality, safety, and compliance. Ike oversees daily 
      facility operations, including maintenance, repairs, 
      budgeting, contracting, and vendor management.`
      `He also leads team training and development while 
      ensuring adherence to safety protocols, conducting risk 
      assessments, and preparing for emergencies. His skill set 
      encompasses strategic planning, budgeting, leadership, 
      communication and strong analytical abilities. Ike is a 
      member of International Facility Management Association 
      (IFMA) as well as National Facility Management 
      Association (NFMA)`
      `He is proficient in Computer-aided design (CAD), Facility 
      management software (e.g., FM:Systems, Manhattan 
      Software) , Building management systems (BMS) and 
      Microsoft Office Suite. Ike is dedicated to providing 
      exceptional facility management services, ensuring 
      smooth operations, and exceeding client expectations.`
    ],
    image: IkeNed,
  },
];

const MeetOurAttorneys = () => {
  return (
    <Box>
    <Box p={5} bg={"gray.100"}>
      <Heading as="h2" mb={5} fontFamily="Signika Negative">
        Meet Our Attorneys
      </Heading>
      {attorneys.map((attorney, index) => (
        <Box
          key={index}
          mb={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
        >
          <Flex alignItems="flex-start" display={{ base: "block", md: "flex" }}>
            <Box flex="1" mr={0}>
              <Image
                borderTopLeftRadius="10px"
                borderTopRightRadius={{ base: "10px", md: "0px" }}
                w={"full"}
                h={{ base: "400px", md: "450px" }}
                src={attorney.image}
                alt={attorney.name}
                mb={3} // Margin below the image
              />

              <Box p={6}>
                <Text>
                  <strong>Position:</strong> {attorney.position}
                </Text>
                <Text>
                  <strong>Expertise:</strong> {attorney.expertise.join("")}
                </Text>
                {attorney.experience && (
                  <Text>
                    <strong>Experience:</strong> {attorney.experience}
                  </Text>
                )}

                <Text>
                  <strong>Education:</strong> {attorney.education}
                </Text>
                <Text>
                  <strong>Contact:</strong>{" "}
                  <a href={`mailto:${attorney.contact}`}>{attorney.contact}</a>
                </Text>
              </Box>
            </Box>
            <Box flex="1">
              <Box px={4}>
                <Box my={4}>
                  <Heading size="lg" my={{ base: "0", md: "4" }} textTransform='uppercase'>
                    Profile
                  </Heading>
                  <Heading size="md" my={{ base: "0", md: "4" }}>
                    {attorney.name}
                  </Heading>
                </Box>
                {attorney.profile.map((paragraph, idx) => (
                  <Text key={idx} mb={2} px={0} textAlign={"justify"}>
                    {paragraph}
                  </Text>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
    <Footer/>
    </Box>
  );
};

export default MeetOurAttorneys;
