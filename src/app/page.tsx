'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  skills: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'massage',
    title: 'Massage Therapists',
    badge: 'Bodywork & Relaxation',
    image: '/images/massage.png',
    description: 'Connect with certified Swedish, Deep Tissue, Shiatsu, and Hot Stone massage therapists. We recruit only top-tier practitioners of bodywork who hold active licenses, have rigorous training, and demonstrate exemplary customer service skills to elevate your guest experience.',
    skills: 'Swedish Massage, Deep Tissue, Sports Massage, Aromatherapy, Hot Stone, Prenatal, Reflexology'
  },
  {
    id: 'esthetician',
    title: 'Estheticians',
    badge: 'Skincare & Esthetics',
    image: '/images/esthetician.png',
    description: 'Elite skincare specialists and licensed estheticians skilled in high-end facials, microdermabrasion, advanced chemical peels, LED light therapies, and luxury body treatments. Our professionals are expert consultants in retail skincare lines, helping to drive spa revenue.',
    skills: 'Advanced Facials, Microdermabrasion, Chemical Peels, Lymphatic Drainage, Product Consultation, Waxing'
  },
  {
    id: 'nail_tech',
    title: 'Nail Technicians',
    badge: 'Beauty & Hand/Foot Therapy',
    image: '/images/nail_tech.png',
    description: 'Top-tier manicurists and nail artists who specialize in luxury nail care, nail extensions, gel art, organic and restorative hand and foot treatments. They ensure impeccable hygiene standards and create calming, therapeutic service environments.',
    skills: 'Gel Extensions, Acrylics, Precision Nail Art, Organic Spa Pedicures, Paraffin Treatments, Sanitation'
  },
  {
    id: 'yoga',
    title: 'Yoga Instructors',
    badge: 'Mindfulness & Movement',
    image: '/images/yoga.png',
    description: 'Certified yoga teachers, Pilates instructors, and meditation guides available for group classes, VIP private training, and custom wellness workshops. Ideal for destination resorts and spas looking to offer comprehensive wellness programs.',
    skills: 'Hatha Yoga, Vinyasa Flow, Yin Yoga, Pilates Reformer, Guided Meditation, Pranayama (Breathwork)'
  },
  {
    id: 'management',
    title: 'Spa Leadership',
    badge: 'Operations & Management',
    image: '/images/management.png',
    description: 'Experienced spa directors, assistant managers, and operations coordinators to streamline spa performance, optimize booking channels, oversee supply inventory, manage financial reports, and maintain team cohesion under strict brand standards.',
    skills: 'Operations Management, Staff Scheduling, Inventory Control, P&L Accountability, Guest Relations, KPI Tracking'
  },
  {
    id: 'reception',
    title: 'Spa Reception',
    badge: 'Front-Of-House & Relations',
    image: '/images/reception.png',
    description: 'Polished front desk coordinators, booking agents, and concierge staff trained in high-end hospitality etiquette, booking systems, and guest flow. They form the critical first and last impression, managing check-ins and boutique sales.',
    skills: 'Booking Software (Booker, Mindbody), Phone Etiquette, Customer Service, Retail Sales, Conflict Resolution'
  },
  {
    id: 'attendant',
    title: 'Spa Attendants',
    badge: 'Support & Facility Care',
    image: '/images/attendant.png',
    description: 'Diligent locker room attendants, housekeeping staff, and laundry coordinators dedicated to maintaining immaculate cleanliness, stocking luxury amenities, managing towel service, and guaranteeing guest comfort within thermal and relaxation zones.',
    skills: 'Hygiene Protocols, Locker Room Amenities Control, Towel Logistics, Thermal Zone Care, Quiet Zone Maintenance'
  },
  {
    id: 'executive',
    title: 'Executive Search',
    badge: 'Bespoke Advisory & Recruiting',
    image: '/images/executive.png',
    description: 'Specialized executive placement for luxury hotel groups, mega-resorts, and global wellness networks seeking long-term directors, spa consultants, trainers, or international brand developers who will shape the future of their wellness portfolios.',
    skills: 'Executive Headhunting, Contract Negotiation, Industry Network Expansion, Brand Standards Alignment'
  },
  {
    id: 'event_staff',
    title: 'On-Demand Events',
    badge: 'Flexible & Seasonal Teams',
    image: '/images/event_staff.png',
    description: 'Rapid-deployment wellness staff for corporate events, wellness retreats, VIP private parties, or holiday seasonal rushes. Ensure your spa, hotel, or wellness brand never turns away a guest during peak operational windows.',
    skills: 'Rapid Deployment, Mobile Spa Operations, Chair Massage, Express Skincare, Bridal Party Hosting'
  }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isConsultingOpen, setIsConsultingOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  
  // Form Submission States
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate inputs slightly
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email.");
      return;
    }
    
    // Simulate submission
    setFormSuccess(true);
    setTimeout(() => {
      // Clear form and success message after modal closes or after delay
    }, 5000);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsConsultingOpen(false);
    setIsApplyOpen(false);
    setFormSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="app-container">
      {/* Magnolia Corner Ornaments - Reused and transform-oriented in CSS */}
      <img src="/images/magnolia_branch.png" alt="Magnolia Branch" className="floral-corner floral-top-left" />
      <img src="/images/magnolia_branch.png" alt="Magnolia Branch" className="floral-corner floral-top-right" />
      <img src="/images/magnolia_branch.png" alt="Magnolia Branch" className="floral-corner floral-bottom-left" />

      {/* Floating Action Buttons */}
      <div className="floating-widgets">
        <div 
          className="floating-widget accent-widget" 
          title="Request Consultation"
          onClick={() => setIsConsultingOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div 
          className="floating-widget" 
          title="Apply for Staff Placement"
          onClick={() => setIsApplyOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>

      <div className="content-wrapper">
        
        {/* Header / Hero Area */}
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem', width: '100%' }}>
          
          {/* Gold Lotus Logo */}
          <div className="gold-icon">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 90C50 90 60 70 70 60C80 50 90 40 90 30C90 20 80 10 70 10C60 10 55 20 50 25C45 20 40 10 30 10C20 10 10 20 10 30C10 40 20 50 30 60C40 70 50 90 50 90Z" stroke="currentColor" />
              <path d="M50 90C50 90 55 75 60 68C65 61 75 55 80 50" stroke="currentColor" />
              <path d="M50 90C50 90 45 75 40 68C35 61 25 55 20 50" stroke="currentColor" />
              <path d="M50 25V90" stroke="currentColor" />
              <path d="M30 60C30 60 42 58 50 50C58 58 70 60 70 60" stroke="currentColor" />
            </svg>
          </div>

          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: 'var(--color-gold)',
            fontWeight: 600,
            marginBottom: '0.75rem',
            textAlign: 'center'
          }}>
            Nexora Staffing
          </span>

          <h1>Excellence Comes First</h1>
          <p className="subheading">
            Connect your beauty spa, wellness hotel, or resort with elite, certified talent. 
            <strong style={{ color: 'var(--color-gold)', fontWeight: 600 }}> Nexora Staffing </strong> 
            curates premier professionals dedicated to elevated client experiences.
          </p>

          <button className="gold-button" onClick={() => setIsConsultingOpen(true)}>
            Partner With Us
          </button>
        </header>

        {/* 3x3 Grid Section */}
        <main style={{ width: '100%' }}>
          <div className="grid-container">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="service-card"
                onClick={() => setSelectedService(service)}
              >
                <div className="card-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="card-image"
                  />
                </div>
                <h3 className="card-title">{service.title}</h3>
              </div>
            ))}
          </div>
        </main>

        {/* Footer / CTA Section */}
        <section className="bottom-cta-section">
          {/* Gold Mandala Icon */}
          <div className="gold-icon">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" />
              <circle cx="50" cy="50" r="25" stroke="currentColor" />
              <circle cx="50" cy="50" r="10" stroke="currentColor" />
              <path d="M50 10V90M10 50H90" stroke="currentColor" />
              <path d="M22 22L78 78M22 78L78 22" stroke="currentColor" />
              <path d="M50 10C55 25 45 25 50 40C55 55 45 55 50 90" stroke="currentColor" />
              <path d="M10 50C25 55 25 45 40 50C55 55 55 45 90 50" stroke="currentColor" />
            </svg>
          </div>

          <h2>Refined. Elegant. Nexora.</h2>
          <p>
            From temporary resort support during peak seasons to executive search placements, 
            our wellness network houses certified therapists, master estheticians, and operational leads. 
            Partner with Nexora Staffing to uphold the highest hospitality standards.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="gold-button" onClick={() => setIsConsultingOpen(true)}>
              Request Staff
            </button>
            <button className="gold-button gold-button-outline" onClick={() => setIsApplyOpen(true)}>
              Join Talent Network
            </button>
          </div>
        </section>

        {/* Footer Credits */}
        <footer className="footer-credits">
          &copy; {new Date().getFullYear()} Nexora Staffing & Wellness Placements. All rights reserved.
        </footer>

      </div>

      {/* ----------------- INTERACTIVE MODALS ----------------- */}

      {/* 1. Service Details & Inquiry Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left side Image panel */}
            <div className="modal-image-panel">
              <img src={selectedService.image} alt={selectedService.title} className="modal-image" />
            </div>

            {/* Right side Details / Form panel */}
            <div className="modal-details-panel">
              {formSuccess ? (
                <div className="success-message">
                  <div className="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="56" height="56">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="success-title">Request Received</h4>
                  <p className="success-text">
                    Thank you for your interest in our {selectedService.title}. A talent coordinator from Nexora Staffing will contact you within 24 hours.
                  </p>
                  <button className="gold-button" style={{ marginTop: '2rem' }} onClick={closeModal}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <span className="modal-category-badge">{selectedService.badge}</span>
                  <h3>{selectedService.title}</h3>
                  <p className="modal-description">{selectedService.description}</p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h5 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Key Skills & Requirements:</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{selectedService.skills}</p>
                  </div>

                  {/* Form inside modal */}
                  <form className="inquiry-form" onSubmit={handleFormSubmit}>
                    <h4 className="form-title">Inquire for this Role</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="client-name">Your Name</label>
                        <input className="form-input" type="text" id="client-name" name="name" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="client-email">Email Address</label>
                        <input className="form-input" type="email" id="client-email" name="email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="client-phone">Phone Number</label>
                        <input className="form-input" type="tel" id="client-phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="client-company">Company / Spa</label>
                        <input className="form-input" type="text" id="client-company" name="company" value={formData.company} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-message">Specific Requirements</label>
                      <textarea className="form-textarea" id="client-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="E.g., staffing count, duration, preferred start date..."></textarea>
                    </div>
                    <button className="gold-button form-submit-btn" type="submit">Submit Inquiry</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating Consultation Modal */}
      {isConsultingOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" style={{ maxWidth: '600px', gridTemplateColumns: '1fr' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-details-panel">
              {formSuccess ? (
                <div className="success-message" style={{ padding: '3rem 0' }}>
                  <div className="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="56" height="56">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="success-title">Consultation Requested</h4>
                  <p className="success-text">
                    Thank you! A senior staff advisor from Nexora Staffing will review your request and reach out to schedule an introductory call.
                  </p>
                  <button className="gold-button" style={{ marginTop: '2rem' }} onClick={closeModal}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <span className="modal-category-badge">Spa Partnership</span>
                  <h3>Partner Consultation</h3>
                  <p className="modal-description">
                    Provide your facility details below, and one of our client relations coordinators will reach out to outline our onboarding process, service level agreements, and temporary pricing packages.
                  </p>

                  <form className="inquiry-form" onSubmit={handleFormSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="consult-name">Your Name</label>
                        <input className="form-input" type="text" id="consult-name" name="name" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="consult-email">Email Address</label>
                        <input className="form-input" type="email" id="consult-email" name="email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="consult-phone">Phone Number</label>
                        <input className="form-input" type="tel" id="consult-phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="consult-company">Company / Spa</label>
                        <input className="form-input" type="text" id="consult-company" name="company" value={formData.company} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="consult-message">About Your Facility & Needs</label>
                      <textarea className="form-textarea" id="consult-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your spa location, service frequency, and typical recruitment bottlenecks..."></textarea>
                    </div>
                    <button className="gold-button form-submit-btn" type="submit">Schedule Call</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. Floating Apply Modal */}
      {isApplyOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" style={{ maxWidth: '600px', gridTemplateColumns: '1fr' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-details-panel">
              {formSuccess ? (
                <div className="success-message" style={{ padding: '3rem 0' }}>
                  <div className="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="56" height="56">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="success-title">Application Submitted</h4>
                  <p className="success-text">
                    Welcome to the network! We have received your preliminary details. Our recruiting team will contact you to request your resume, licenses, and references.
                  </p>
                  <button className="gold-button" style={{ marginTop: '2rem' }} onClick={closeModal}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <span className="modal-category-badge">Talent Placement</span>
                  <h3>Join Nexora Staffing</h3>
                  <p className="modal-description">
                    Are you a licensed massage therapist, master esthetician, or spa leader? Join our luxury talent network. Get placed at elite hotels, resorts, and exclusive spa retreats.
                  </p>

                  <form className="inquiry-form" onSubmit={handleFormSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="apply-name">Your Name</label>
                        <input className="form-input" type="text" id="apply-name" name="name" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="apply-email">Email Address</label>
                        <input className="form-input" type="email" id="apply-email" name="email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="apply-phone">Phone Number</label>
                        <input className="form-input" type="tel" id="apply-phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="apply-role">Desired Role</label>
                        <input className="form-input" type="text" id="apply-role" name="company" placeholder="E.g., Massage Therapist, Spa Manager" value={formData.company} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="apply-message">Certifications & Experience</label>
                      <textarea className="form-textarea" id="apply-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Briefly describe your certifications, licenses, and total years of spa experience..."></textarea>
                    </div>
                    <button className="gold-button form-submit-btn" type="submit">Submit Application</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
