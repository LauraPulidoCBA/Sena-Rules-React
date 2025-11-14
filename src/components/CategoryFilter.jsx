export default function CategoryFilter({ onFilter }) {
    return (
        <select onChange={(e) => onFilter(e.target.value)}>
            <option value=""> Todas las categorias </option>
            <option value="presentacion"> Presentación </option>
            <option value="seguridad"> Seguridad </option>
            <option value="convivencia"> Convivencia </option>
        </select>
    );
}
