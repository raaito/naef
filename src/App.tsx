/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { DiscoverSection } from './components/DiscoverSection.tsx';
import { ProgramExplorer } from './components/ProgramExplorer.tsx';
import { ImpactSection } from './components/ImpactSection.tsx';
import { FeaturedProjects } from './components/FeaturedProjects.tsx';
import { StoriesOfChange } from './components/StoriesOfChange.tsx';
import { NewsSection } from './components/NewsSection.tsx';
import { GetInvolvedSection } from './components/GetInvolvedSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AboutPage } from './components/AboutPage.tsx';
import { ProgramsPage } from './components/ProgramsPage.tsx';
import { ImpactPage } from './components/ImpactPage.tsx';
import { NewsPage } from './components/NewsPage.tsx';
import { ContactPage } from './components/ContactPage.tsx';
import { WatchStoryModal } from './components/WatchStoryModal.tsx';
import { AboutDrawer } from './components/AboutDrawer.tsx';
import { ProgramDetailModal } from './components/ProgramDetailModal.tsx';
import { ImpactStoryModal } from './components/ImpactStoryModal.tsx';
import { ProjectDetailModal } from './components/ProjectDetailModal.tsx';
import { StoryDetailModal } from './components/StoryDetailModal.tsx';
import { ArticleModal } from './components/ArticleModal.tsx';
import { VolunteerModal } from './components/VolunteerModal.tsx';
import { PartnerModal } from './components/PartnerModal.tsx';
import { PolicyModal } from './components/PolicyModal.tsx';
import { DonateModal } from './components/DonateModal.tsx';
import { ProgramPillarDetail } from './utils/programs.ts';
import { FeaturedProject } from './utils/projects.ts';
import { BeneficiaryStory } from './utils/stories.ts';
import { NewsArticle } from './utils/news.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'programs' | 'impact' | 'news' | 'contact'>('home');
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isAboutDrawerOpen, setIsAboutDrawerOpen] = useState(false);
  const [selectedPillarForModal, setSelectedPillarForModal] = useState<ProgramPillarDetail | null>(null);
  const [isImpactStoryModalOpen, setIsImpactStoryModalOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<FeaturedProject | null>(null);
  const [selectedStoryForModal, setSelectedStoryForModal] = useState<BeneficiaryStory | null>(null);
  const [selectedArticleForModal, setSelectedArticleForModal] = useState<NewsArticle | null>(null);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'safeguarding' | 'conduct' | null>(null);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleNavigate = (page: 'home' | 'about' | 'programs' | 'impact' | 'news' | 'contact', anchor?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (anchor) {
      setTimeout(() => {
        let targetId = anchor;
        if (page === 'programs') {
          if (anchor === 'women-empowerment' || anchor === 'women-and-girls') {
            targetId = 'pillar-women-and-girls';
          } else if (anchor === 'climate-action' || anchor === 'climate-and-environment') {
            targetId = 'pillar-climate-and-environment';
          } else if (!anchor.startsWith('pillar-')) {
            targetId = `pillar-${anchor}`;
          }
        }
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
  };

  const handleExploreJourney = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSupportAction = () => {
    setIsDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#292929] flex flex-col font-sans selection:bg-[#F97827]/20 selection:text-[#263B2A]">
      {/* SECTION 1: Navigation */}
      <Navigation 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onDonateClick={() => setIsDonateModalOpen(true)} 
      />

      {/* Main Content Area: Route Switcher */}
      <main className="flex-1">
        {currentPage === 'contact' ? (
          /* DEDICATED CONTACT US & FIELD BUREAUS SUB-PAGE */
          <ContactPage 
            onNavigateHome={() => handleNavigate('home')}
            onDonateClick={() => setIsDonateModalOpen(true)}
            onVolunteerClick={() => setIsVolunteerModalOpen(true)}
            onPartnerClick={() => setIsPartnerModalOpen(true)}
            onOpenPolicy={(policy) => setActivePolicyModal(policy)}
          />
        ) : currentPage === 'news' ? (
          /* DEDICATED NEWS & RESOURCE HUB SUB-PAGE */
          <NewsPage 
            onNavigateHome={() => handleNavigate('home')}
            onExplorePrograms={() => handleNavigate('programs')}
            onDonateClick={() => setIsDonateModalOpen(true)}
            onPartnerClick={() => setIsPartnerModalOpen(true)}
          />
        ) : currentPage === 'impact' ? (
          /* DEDICATED OUR IMPACT & FIELD AUDIT SUB-PAGE */
          <ImpactPage 
            onNavigateHome={() => handleNavigate('home')}
            onExplorePrograms={() => handleNavigate('programs')}
            onDonateClick={() => setIsDonateModalOpen(true)}
            onPartnerClick={() => setIsPartnerModalOpen(true)}
          />
        ) : currentPage === 'programs' ? (
          /* DEDICATED OUR PROGRAMS & 5 PILLARS SUB-PAGE */
          <ProgramsPage 
            onNavigateHome={() => handleNavigate('home')}
            onDonateClick={() => setIsDonateModalOpen(true)}
            onVolunteerClick={() => setIsVolunteerModalOpen(true)}
            onPartnerClick={() => setIsPartnerModalOpen(true)}
          />
        ) : currentPage === 'about' ? (
          /* DEDICATED ABOUT US SUB-PAGE */
          <AboutPage 
            onNavigateHome={() => handleNavigate('home')}
            onExplorePrograms={() => handleNavigate('programs')}
            onDonateClick={() => setIsDonateModalOpen(true)}
            onVolunteerClick={() => setIsVolunteerModalOpen(true)}
            onPartnerClick={() => setIsPartnerModalOpen(true)}
            onOpenPolicy={(policy) => setActivePolicyModal(policy)}
          />
        ) : (
          /* FULL HOMEPAGE CHAPTERS (SECTIONS 2 - 9) */
          <>
            {/* SECTION 2: Cinematic Hero */}
            <Hero 
              onWatchStory={() => setIsStoryModalOpen(true)}
              onExploreJourney={handleExploreJourney}
            />

            {/* SECTION 3: Discover NAEF */}
            <DiscoverSection 
              onDiscoverMore={() => handleNavigate('about')}
            />

            {/* SECTION 4: Explore Our Five Program Pillars */}
            <ProgramExplorer 
              onOpenPillarModal={(pillar) => setSelectedPillarForModal(pillar)}
              onSupportPillar={() => setIsDonateModalOpen(true)}
            />

            {/* SECTION 5: Real Change. Lasting Impact */}
            <ImpactSection 
              onExploreImpactStory={() => setIsImpactStoryModalOpen(true)}
            />

            {/* SECTION 6: Featured Projects Spotlight */}
            <FeaturedProjects 
              onLearnMore={(proj) => setSelectedProjectForModal(proj)}
            />

            {/* SECTION 7: Stories of Change */}
            <StoriesOfChange 
              onReadFullStory={(story) => setSelectedStoryForModal(story)}
            />

            {/* SECTION 8: News & Updates (Field Dispatches) */}
            <NewsSection 
              onReadArticle={(article) => setSelectedArticleForModal(article)}
              onViewAllNews={() => {
                const newsEl = document.getElementById('news');
                if (newsEl) newsEl.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* SECTION 9: Get Involved (Be Part of the Change) */}
            <GetInvolvedSection
              onDonateClick={() => setIsDonateModalOpen(true)}
              onVolunteerClick={() => setIsVolunteerModalOpen(true)}
              onPartnerClick={() => setIsPartnerModalOpen(true)}
            />
          </>
        )}
      </main>

      {/* SECTION 10: Institutional Deep Green Footer */}
      <Footer 
        onOpenPolicy={(policy) => setActivePolicyModal(policy)}
        onOpenAbout={() => handleNavigate('about')}
        onDonateClick={() => setIsDonateModalOpen(true)}
        onVolunteerClick={() => setIsVolunteerModalOpen(true)}
        onPartnerClick={() => setIsPartnerModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Interactive Story Video Player Modal */}
      <WatchStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      {/* Interactive About NAEF Slide-Over Drawer */}
      <AboutDrawer
        isOpen={isAboutDrawerOpen}
        onClose={() => setIsAboutDrawerOpen(false)}
      />

      {/* Interactive Program Brief Modal */}
      <ProgramDetailModal
        pillar={selectedPillarForModal}
        isOpen={selectedPillarForModal !== null}
        onClose={() => setSelectedPillarForModal(null)}
        onSupportPillar={() => setIsDonateModalOpen(true)}
      />

      {/* Interactive Impact Story & Evaluation Framework Modal */}
      <ImpactStoryModal
        isOpen={isImpactStoryModalOpen}
        onClose={() => setIsImpactStoryModalOpen(false)}
        onSupportWork={() => setIsDonateModalOpen(true)}
      />

      {/* Interactive Featured Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProjectForModal}
        isOpen={selectedProjectForModal !== null}
        onClose={() => setSelectedProjectForModal(null)}
        onSupportProject={handleSupportAction}
      />

      {/* Interactive Story of Change Detail Modal */}
      <StoryDetailModal
        story={selectedStoryForModal}
        isOpen={selectedStoryForModal !== null}
        onClose={() => setSelectedStoryForModal(null)}
        onSupportProgram={handleSupportAction}
      />

      {/* Interactive News Article Modal */}
      <ArticleModal
        article={selectedArticleForModal}
        isOpen={selectedArticleForModal !== null}
        onClose={() => setSelectedArticleForModal(null)}
      />

      {/* Interactive Volunteer Registration Modal */}
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />

      {/* Interactive Partnership Inquiry Modal */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />

      {/* Institutional Policy Viewer Modal (Privacy, Safeguarding, Code of Conduct) */}
      <PolicyModal
        policyType={activePolicyModal}
        isOpen={activePolicyModal !== null}
        onClose={() => setActivePolicyModal(null)}
      />

      {/* Interactive Donation Experience Modal */}
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </div>
  );
}
