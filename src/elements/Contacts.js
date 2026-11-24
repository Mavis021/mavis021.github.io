import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { profile, contact } from '../content';
import './Contacts.scss';

const Contacts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target;
        setIsSubmitting(true);

        emailjs
            .sendForm('service_o2gbhd7', 'template_k9pv4wo', form, 'db-cEmmriuu6iKcfL')
            .then(
                () => {
                    setStateMessage('Thank you, your message has been sent.');
                    form.reset();
                },
                () => setStateMessage('Something went wrong. Please try again, or email me directly.')
            )
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setStateMessage(null), 6000);
            });
    };

    return (
        <div className="contact-page">
            <div className="contact-intro">
                <span className="section-label">CONTACT</span>
                <h1>Get in touch</h1>
                <p>{contact.line}</p>
                <p>
                    Use the form, or email me at{' '}
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
            </div>

            <form className="contact-form" onSubmit={sendEmail}>
                <div className="row">
                    <label>
                        <span>Name</span>
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" name="email" required />
                    </label>
                </div>
                <label>
                    <span>Subject</span>
                    <input type="text" name="subject" required />
                </label>
                <label>
                    <span>Message</span>
                    <textarea name="message" rows="6" required />
                </label>
                <div className="form-footer">
                    {stateMessage && <p className="form-status" role="status">{stateMessage}</p>}
                    <button className="btn btn-solid" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending…' : 'Send message'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contacts;
