import Heading from 'src/components/Heading'
import Image from 'next/image'
import AboutImage from 'src/assets/about.svg';

const About = () => {
  return (
    <>
      <Heading heading='O mnie' subHeading='Kilka słów o mnie' />
      <div className='flex flex-col justify-between md:flex-row'>
        <div className='md:w-1/2'>
          <p>
            Nazywam się Oskar Kwaśniewski, tworzeniem stron i programowaniem
            zajmuje się od ponad 2 lat. Aktualnie pracuję jako Front-end
            Developer w firmie eTechnologie. <br></br><br></br> Studiuję na Wydziale Informatyki na
            Zachodniopomorskim Uniwersytecie Technologicznym. Mam doświadczenie
            w pracy zwarówno z dużymi jaki i małymi firmami. Lubię tworzyć
            strony i korzystać z nieszablonowych rozwiązań. <br></br><br></br> W wolnym czasie
            jeżdżę na rowerze 🚴🏻 lub uczę się czegoś nowego 💻.
          </p>
        </div>
        <div className='flex justify-center mt-10 md:mt-0 md:w-1/2'>
          <Image src={AboutImage} />
        </div>
      </div>
    </>
  );
};
export default About