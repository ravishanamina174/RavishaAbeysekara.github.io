import React, { useCallback, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitSuccess(null);
        }, 5000);
      } catch {
        setSubmitSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-blue-100">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-gray-900 placeholder-gray-400 ${
            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-blue-200 focus:ring-blue-400'
          }`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-2 text-red-500 text-sm">{errors.name}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-gray-900 placeholder-gray-400 ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-blue-200 focus:ring-blue-400'
          }`}
          placeholder="johndoe@example.com"
        />
        {errors.email && (
          <p className="mt-2 text-red-500 text-sm">{errors.email}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-gray-900 placeholder-gray-400 ${
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-blue-200 focus:ring-blue-400'
          }`}
          placeholder="How can I help you?"
        ></textarea>
        {errors.message && (
          <p className="mt-2 text-red-500 text-sm">{errors.message}</p>
        )}
      </div>
      
      <div className="relative">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full button-blue flex items-center justify-center rounded-lg text-lg font-semibold shadow-md transition-all duration-300 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
        
        {submitSuccess !== null && (
          <div className={`mt-4 p-3 rounded-md text-center ${
            submitSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {submitSuccess 
              ? 'Your message has been sent successfully!' 
              : 'There was an error sending your message. Please try again.'}
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;