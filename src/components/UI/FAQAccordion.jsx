import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import './FAQAccordion.css';

const FAQAccordion = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    if (!faqs || faqs.length === 0) return null;

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">

            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.q}</span>
                            {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="faq-answer-wrapper"
                                >
                                    <div className="faq-answer">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
