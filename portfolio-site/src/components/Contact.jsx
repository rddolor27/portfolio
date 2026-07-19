import React, { useRef, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import useOnScreen from '../hooks/useScreenView';
import { AppContext } from '../providers/AppStateProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const GmailCopy = () => {
    const gmailAddress = 'radolor@up.edu.ph';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(gmailAddress)
            .then(() => {
                alert('Gmail address copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy:', err);
            });
    };

    return (
        <button
            type="button"
            onClick={copyToClipboard}
            className="font-medium text-purple-600 underline-offset-4 hover:underline dark:text-purple-400"
        >
            {gmailAddress}
        </button>
    );
};

function Contact() {
    const form = useRef();
    const { setInContactsSection } = useContext(AppContext);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9mf55uv', 'template_2pweal5', form.current, 'zlCWaO64DPLn7rWrx')
            .then(() => {
                e.target.reset();
            }, (error) => {
                console.error(error.text);
            });
    };

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        setInContactsSection(isVisible);
    }, [isVisible, setInContactsSection]);

    return (
        <section ref={ref} id="contacts-section" className="mt-10 flex flex-col px-4 sm:mt-14 sm:px-[1.25rem]">
            <div className="mb-24 mt-16 flex flex-row items-center">
                <h2 className="font-mono text-5xl font-bold text-purple-600">Connect</h2>
                <hr className="ml-4 mt-6 h-2 w-72 border-t border-purple-600" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ ease: 'easeInOut', duration: 0.7 }}
                className="mx-auto w-full max-w-2xl"
            >
                <p className="mb-8 text-center text-muted-foreground">
                    You can contact me at <GmailCopy />
                </p>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-5 rounded-xl border bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                >
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="contact-name">Name</Label>
                        <Input
                            id="contact-name"
                            className="h-11"
                            placeholder="Name"
                            type="text"
                            name="from_name"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                            id="contact-email"
                            className="h-11"
                            placeholder="Email"
                            type="email"
                            name="from_email"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="contact-message">Your Message</Label>
                        <Textarea
                            id="contact-message"
                            className="h-[198px] resize-none"
                            placeholder="Your message"
                            name="message"
                            required
                        />
                    </div>

                    <div className="mb-2 mt-3 flex justify-start">
                        <Button type="submit" size="lg" className="shadow-lg shadow-purple-600/20">
                            Send
                        </Button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}

export default Contact;
