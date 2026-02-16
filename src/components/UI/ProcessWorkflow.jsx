import React from 'react';
import { motion } from 'framer-motion';
import './ProcessWorkflow.css';

const ProcessWorkflow = ({ steps }) => {
    if (!steps || steps.length === 0) return null;

    return (
        <div className="process-workflow">
            <h3 className="workflow-title">Process Workflow</h3>
            <div className="workflow-steps">
                {steps.map((step, index) => (
                    <div key={index} className="workflow-step-item">
                        <motion.div
                            className="step-circle"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.2, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            {step.step}
                        </motion.div>
                        <motion.div
                            className="step-content"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </motion.div>
                        {index < steps.length - 1 && (
                            <div className="step-connector"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessWorkflow;
