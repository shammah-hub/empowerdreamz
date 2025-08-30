"use client"
import { Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Initialize EmailJS (you'll need to replace these with your actual values)
  const SERVICE_ID = 'service_c9whkv4';
  const TEMPLATE_ID = 'template_xq5fqrc';
  const PUBLIC_KEY = 'uno97ozFmtKh50Rkc';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Your Name', // Replace with recipient name
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to send message. Please try again or contact us directly.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter First Name"
              required
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter Last Name"
              required
              className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              required
              className="w-full px-4 text-gray-600 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Phone Number"
              className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your Message"
            rows={5}
            required
            className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none resize-none"
          ></textarea>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="privacy"
            required
            className="w-4 h-4 text-lime-400 border-gray-300 rounded focus:ring-[#369612]"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I agree with Terms of Use and Privacy Policy
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`shadow-2xl shadow-gray-500 text-white px-8 py-3 rounded-lg transition-colors flex items-center space-x-2 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#1a344b] hover:bg-gray-700'
          }`}
        >
          <span>{isSubmitting ? 'Sending...' : 'Send your Message'}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}