export default function CategoryFilter({ onFilter }) {
    return (
        <select onChange={(e) => onFilter(e.target.value)}>
            <option value=""> Todas las categorias </option>
            <option value="Presentación"> Presentación </option>
            <option value="Seguridad"> Seguridad </option>
            <option value="Convivencia"> Convivencia </option>
        </select>
    );
}
