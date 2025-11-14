export default function ComplianceCounter({ total, completed }) {
    return (
        <p>
            Cumplidas: {completed} / {total}
        </p>
    );
}