import HomeNav from './components/nav';
import HomeHero from './components/hero';
import HomeStats from './components/stats';
import HomeFeatures from './components/features';
import HomeFooter from './components/footer';
import HomeWorkflow from './components/workflow';
import HomeRoles from './components/roles';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeNav />
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeWorkflow />
      <HomeRoles />
      <HomeFooter />
    </div>
  );
}
