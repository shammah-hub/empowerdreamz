"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";

const PrivacyPolicy = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6 py-24">
        {/* Animated Background Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(34,197,94,0.08) 1px, transparent 0)",
              backgroundSize: "32px 32px",
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-light mb-6 animate-fade-in-up">
            Our <span className="font-semibold text-green-600">Privacy Policy</span>
          </h1>
          <p className="text-gray-500 text-xl font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up">
            Your privacy and trust matter to us at EmpowerDreamz. This policy
            explains in clear detail how we handle, store, and protect your
            information when you visit{" "}
            <span className="font-medium text-green-600">EmpowerDreamz.com</span>.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-10 text-green-600 hover:text-green-700 transition-colors animate-fade-in-up"
          >
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* 1. Information We Collect */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">
                1. Information We Collect
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              We collect both personal and non-personal information to operate
              effectively and deliver the best experience for our donors,
              volunteers, and visitors.
            </p>
            <ul className="list-disc ml-8 text-gray-600 text-lg space-y-2">
              <li>
                <strong>Personal Information:</strong> Includes your name,
                email address, contact number, billing information, and postal
                address when you make a donation or sign up for newsletters.
              </li>
              <li>
                <strong>Automatically Collected Data:</strong> Browser type,
                operating system, IP address, referring URLs, device data, and
                session analytics (via tools like Google Analytics).
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies to improve functionality, remember preferences, and
                personalize your experience.
              </li>
            </ul>
          </div>

          {/* 2. How We Use Your Data */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">
                2. How We Use Your Information
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              EmpowerDreamz uses your information responsibly and only for
              purposes that align with our mission to create positive change.
            </p>
            <ul className="list-disc ml-8 text-gray-600 text-lg space-y-2">
              <li>To process donations and send confirmations or receipts.</li>
              <li>
                To communicate important updates, impact reports, or
                opportunities to get involved.
              </li>
              <li>
                To improve our platform, measure performance, and ensure
                security.
              </li>
              <li>
                To comply with legal and regulatory obligations, including
                anti-fraud verification.
              </li>
            </ul>
          </div>

          {/* 3. Data Storage & Security */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">
                3. Data Storage & Security
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Your data is stored securely using industry-standard encryption
              and firewall protections. Access is restricted to authorized
              personnel only, and all payment transactions are processed through
              PCI-compliant systems. However, no online transmission can be
              guaranteed to be 100% secure. You are encouraged to maintain the
              confidentiality of your login credentials if applicable.
            </p>
          </div>

          {/* 4. Data Sharing & Third Parties */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">
                4. Sharing & Disclosure of Information
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We never sell your personal data. However, we may share it in the
              following circumstances:
            </p>
            <ul className="list-disc ml-8 text-gray-600 text-lg space-y-2 mt-3">
              <li>
                <strong>Service Providers:</strong> With trusted third-party
                partners (e.g., payment gateways, analytics tools) who help us
                operate and improve our services.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When disclosure is required
                to comply with laws or protect the rights, property, or safety
                of EmpowerDreamz, our users, or others.
              </li>
              <li>
                <strong>Organizational Changes:</strong> In case of a merger,
                reorganization, or asset transfer, user data may be transferred
                securely as part of the process.
              </li>
            </ul>
          </div>

          {/* 5. International Data Transfers */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">
                5. International Data Transfers
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Your information may be stored and processed in countries other
              than your own. EmpowerDreamz ensures that all international data
              transfers comply with global privacy regulations such as GDPR and
              are protected by appropriate safeguards.
            </p>
          </div>

          {/* 6. Your Privacy Rights */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">6. Your Privacy Rights</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Depending on your location, you may have rights regarding your
              personal data, including:
            </p>
            <ul className="list-disc ml-8 text-gray-600 text-lg space-y-2">
              <li>Right to access and obtain a copy of your data.</li>
              <li>Right to request correction or deletion of your data.</li>
              <li>Right to restrict or object to certain data processing.</li>
              <li>Right to data portability (where applicable).</li>
            </ul>
            <p className="text-gray-600 mt-4 text-lg">
              To exercise these rights, contact our Data Protection Officer at{" "}
              <span className="text-green-600 font-medium">
                privacy@empowerdreamz.com
              </span>
              .
            </p>
          </div>

          {/* 7. Communication & Retention */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">
                7. Communication & Data Retention
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We may contact you for important updates, receipts, or impact
              stories. You can unsubscribe from promotional emails anytime. We
              retain your information only as long as necessary for operational,
              legal, or accounting purposes.
            </p>
          </div>

          {/* 8. Changes to Policy */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">8. Policy Updates</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We may update this Privacy Policy periodically to reflect changes
              in legal or operational practices. Updates will be posted on this
              page with a revised “Last Updated” date. Continued use of our
              website implies acceptance of any modifications.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-32 px-6 bg-green-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            We’re committed to{" "}
            <span className="font-semibold">protecting your privacy</span>
          </h2>
          <p className="text-green-100 text-lg mb-10">
            Have any concerns or questions about your data or our policy?
            We’re here to help.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Contact Support
            </button>
          </Link>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
