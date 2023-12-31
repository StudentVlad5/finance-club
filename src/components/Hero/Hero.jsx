import { Link } from 'react-router-dom';
import {
  BtnContainer,
  BtnHeroJoin,
  DesctopImgContainer,
  HeroContainer,
  HeroControl,
  HeroHeadline,
  HeroImages,
  HeroSection,
  DesctopDarkScreen,
  DesctopDarkBottom,
  BtnHeroPricing,
} from './Hero.styled';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroContainer>
        <HeroControl>
          <HeroHeadline
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            SoFi - {t("a leader in the financial sector, offering innovative solutions for its clients.")}
          </HeroHeadline>
          <BtnContainer>
            <Link to="/join" style={{ textDecoration: 'none' }}>
              <BtnHeroJoin aria-label="join now" type="button">
                {t("JOIN NOW")}
              </BtnHeroJoin>
            </Link>
            <a href="#prices" style={{ textDecoration: 'none' }}>
              <BtnHeroPricing aria-label="VIEW PRICING" type="button">
                {t("VIEW PRICING")}
              </BtnHeroPricing>
            </a>
          </BtnContainer>
        </HeroControl>
        <DesctopImgContainer>
          <DesctopDarkScreen />
          <HeroImages />
          <DesctopDarkBottom />
        </DesctopImgContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
