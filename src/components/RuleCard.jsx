import { useState } from 'react';

export default function RuleCard({ title, category, descripcion, image, onCompliant }) {
    const [isDone, setIsDone] = useState(false);

    const toggle = () => {
        const newState = !isDone;
        setIsDone(newState);
        onCompliant(newState);
    };

    return (
        <article className="card">
             {image && <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />}
            <h3>{title}</h3>
            <span>{category}</span>
            <p>{descripcion}</p>

            <button
            aria-pressed={isDone}
            onClick={toggle}
            >
                {isDone ? "Compliant ✅" : "Marcar como cumplida"}
            </button>
        </article>
    );
}