import RuleCard from "./RuleCard";

export default function RuleList({ rules, onCompliant }) {
    if (rules.length === 0) {
        return <p>No se encontraron normas que coincidan con la búsqueda.</p>;
    }

    return (
        <div className="rule-list">
            {rules.map((rule) => (
                <RuleCard 
                key={rule.id} 
                title={rule.title} 
                category={rule.category}
                description={rule.description}
                image={rule.image}
                onCompliant={(state) => onCompliant(rule.id, state)}
            />
            ))}
        </div>
    );
}