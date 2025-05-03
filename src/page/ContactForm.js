"use client";

import { memo, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useForm } from 'react-hook-form';
import handleSendEmail from "@/utils/send-email";
import { Loader2, Mail, Phone, User, MessageSquare, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import FormInputField from "@/components/FormInputField";

const notificationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3 }
};

const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
};

const ContactForm = memo(function ContactForm() {
    const [formStatus, setFormStatus] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = useCallback(async (data) => {
        try {
            await handleSendEmail(data);
            reset();
            setFormStatus('success');
            setTimeout(() => setFormStatus(null), 5000);
        } catch (error) {
            console.error("Error sending email:", error);
            setFormStatus('error');
            setTimeout(() => setFormStatus(null), 5000);
        }
    }, [reset]);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
        <section className="relative overflow-hidden max-h-screen">
            {/* Main Content */}
            <div className="container mx-auto px-4 py-9 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                    {/* Left Side - Map and Message */}
                    <motion.div
                        className="lg:w-1/2 flex flex-col md:p-8"
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        {/* Google Map Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7212.803314290157!2d74.57824599357913!3d25.324299600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968e93a0c1631ef%3A0x59965f77c5ce9a1c!2sCreativewebpro!5e0!3m2!1sen!2sin!4v1745141645905!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl map"
                            title="CreativeWebPro Office Location"
                            aria-label="Map showing CreativeWebPro office location"
                        />
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="w-full lg:w-1/2 md:p-5 bg-background border border-background/50"
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="relative z-10 space-y-3.5">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-foreground">
                                    Send Us a Message
                                </h2>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <FormInputField
                                    id="fullname"
                                    name="name"
                                    label="Full Name"
                                    placeholder="Vedik Jain"
                                    icon={<User className="h-4 w-4" />}
                                    register={register}
                                    errors={errors}
                                    validation={{
                                        required: 'Name is required',
                                        minLength: {
                                            value: 3,
                                            message: 'Name must be at least 3 characters',
                                        },
                                    }}
                                />

                                <FormInputField
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    placeholder="info@creativewebpro.in"
                                    type="email"
                                    icon={<Mail className="h-4 w-4" />}
                                    register={register}
                                    errors={errors}
                                    validation={{
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address',
                                        },
                                    }}
                                />

                                <FormInputField
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"
                                    placeholder="88298 56660"
                                    type="tel"
                                    icon={<Phone className="h-4 w-4" />}
                                    register={register}
                                    errors={errors}
                                    validation={{
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Please enter a valid 10-digit phone number',
                                        },
                                    }}
                                />

                                <FormInputField
                                    id="message"
                                    name="message"
                                    label="Message"
                                    placeholder="Your message here..."
                                    icon={<MessageSquare className="h-4 w-4" />}
                                    register={register}
                                    errors={errors}
                                    textarea
                                    rows={4}
                                    validation={{
                                        required: 'Message is required',
                                        minLength: {
                                            value: 10,
                                            message: 'Message must be at least 10 characters',
                                        },
                                    }}
                                />

                                <motion.button
                                    type="submit"
                                    className={cn(
                                        "w-full px-6 py-3 rounded-lg font-medium relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-foreground text-background hover:bg-foreground/80"
                                    )}
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    aria-label="Submit contact form"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Mail className="h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Form status notification */}
            <AnimatePresence>
                {formStatus && (
                    <motion.div
                        className="fixed bottom-8 right-8 z-50"
                        {...notificationVariants}
                    >
                        <div className={cn(
                            "px-6 py-4 rounded-lg shadow-lg flex items-center gap-3",
                            formStatus === 'success'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/80 dark:text-green-100'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/80 dark:text-red-100'
                        )}>
                            {formStatus === 'success' ? (
                                <Check className="h-5 w-5 text-green-600 dark:text-green-300" />
                            ) : (
                                <X className="h-5 w-5 text-red-600 dark:text-red-300" />
                            )}
                            <span>
                                {formStatus === 'success'
                                    ? 'Message sent successfully!'
                                    : 'Failed to send message. Please try again.'}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
});

export default ContactForm;