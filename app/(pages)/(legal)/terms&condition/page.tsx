"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Terms = () => {
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
        {/* Animated background dots */}
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
            Terms <span className="font-semibold text-green-600">& Conditions</span>
          </h1>
          <p className="text-gray-500 text-xl font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up">
            Please read these terms carefully before using{" "}
            <span className="font-medium text-green-600">EmpowerDreamz.com</span>.
            By accessing or using our platform, you agree to comply with the
            following Terms & Conditions.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-10 text-green-600 hover:text-green-700 transition-colors animate-fade-in-up"
          >
          </Link>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* 1. Acceptance of Terms */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">1. Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              By using EmpowerDreamz (“we”, “our”, “us”), you acknowledge that
              you have read, understood, and agree to be bound by these Terms
              and our Privacy Policy. If you disagree with any part of these
              terms, you must discontinue using our website immediately.
            </p>
          </div>

          {/* 2. Eligibility & User Conduct */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">2. Eligibility & User Conduct</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              To access or use certain features, you may need to provide
              accurate, complete information. You agree not to:
            </p>
            <ul className="list-disc ml-8 text-gray-600 text-lg space-y-2">
              <li>Use the platform for unlawful or fraudulent purposes.</li>
              <li>Impersonate any individual or organization.</li>
              <li>Attempt to gain unauthorized access to any part of our systems.</li>
              <li>Engage in activities that could harm, disable, or overburden our servers.</li>
            </ul>
          </div>

          {/* 3. Donations and Payments */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">3. Donations and Payments</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              When donating to EmpowerDreamz, you agree that:
            </p>
            <ul className="list-disc ml-8 text-gray-600 text-lg space-y-2">
              <li>
                All donations are voluntary and non-refundable unless specified
                otherwise.
              </li>
              <li>
                We use secure, PCI-compliant payment processors to handle
                transactions.
              </li>
              <li>
                You are responsible for providing accurate billing information
                and ensuring payment authorization.
              </li>
            </ul>
          </div>

          {/* 4. Intellectual Property */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">4. Intellectual Property Rights</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              All content on EmpowerDreamz.com — including logos, text,
              graphics, videos, and code — is protected under copyright and
              trademark laws. You may not copy, distribute, or modify our
              materials without explicit written consent from EmpowerDreamz.
            </p>
          </div>

          {/* 5. Third-Party Links */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">5. Third-Party Links</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our platform may contain links to third-party websites. These
              links are provided for convenience only. We are not responsible
              for the content, policies, or practices of any third-party
              websites.
            </p>
          </div>

          {/* 6. Limitation of Liability */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">6. Limitation of Liability</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              EmpowerDreamz is not liable for any damages, direct or indirect,
              arising from your use of our website, inability to access it, or
              reliance on any content provided. We make no guarantees regarding
              uninterrupted access or error-free performance.
            </p>
          </div>

          {/* 7. Indemnification */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">7. Indemnification</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              You agree to indemnify and hold harmless EmpowerDreamz, its
              officers, employees, and partners from any claims, damages,
              losses, or expenses arising out of your use of the website or
              violation of these Terms.
            </p>
          </div>

          {/* 8. Termination */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">8. Termination of Access</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We reserve the right to suspend or terminate access to our
              platform at any time, with or without notice, for conduct that we
              believe violates these Terms or harms our community or operations.
            </p>
          </div>

          {/* 9. Governing Law */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">9. Governing Law</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              These Terms are governed by and construed under the laws of your
              jurisdiction (or the jurisdiction of EmpowerDreamz’s registered
              office), without regard to conflict-of-law principles.
            </p>
          </div>

          {/* 10. Updates to These Terms */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-light">10. Updates to These Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              EmpowerDreamz reserves the right to update or modify these Terms
              at any time. Updated versions will be posted on this page with a
              revised “Last Updated” date. Continued use of the site constitutes
              your acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-32 px-6 bg-green-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Thank you for <span className="font-semibold">supporting our mission</span>
          </h2>
          <p className="text-green-100 text-lg mb-10">
            If you have any questions about these Terms & Conditions, we’re happy
            to assist you anytime.
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

export default Terms;
