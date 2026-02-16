import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { motion } from 'framer-motion';

mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
        primaryColor: '#e0f2fe',
        primaryTextColor: '#0f172a',
        primaryBorderColor: '#0ea5e9',
        lineColor: '#64748b',
        secondaryColor: '#f1f5f9',
        tertiaryColor: '#fff',
    },
    securityLevel: 'loose',
});

const MermaidDiagram = ({ chart, title }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            mermaid.contentLoaded();
            // Manually render if needed, but startOnLoad: false usually requires manual invocation.
            // However, straightforward usage often works by just inserting the text and letting mermaid finding it.
            // For React, a render function is safer.
            const renderChart = async () => {
                try {
                    chartRef.current.innerHTML = '';
                    const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart);
                    chartRef.current.innerHTML = svg;
                } catch (error) {
                    console.error('Mermaid render error:', error);
                    chartRef.current.innerHTML = '<p>Error rendering chart</p>';
                }
            };
            renderChart();
        }
    }, [chart]);

    return (
        <div className="mermaid-wrapper glass-panel section-spacer">
            {title && <h3 className="subsection-title" style={{ textAlign: 'center' }}>{title}</h3>}
            <motion.div
                ref={chartRef}
                className="mermaid-chart-container"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
};

export default MermaidDiagram;
