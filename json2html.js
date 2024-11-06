// json2html.js

export default function json2html(data) {
    const columns = ["Name", "Age", "Gender"];
    const headerRow = columns.map(col => `<th>${col}</th>`).join("");

    // Create table rows
    const rows = data.map(row => {
        return `<tr>${columns.map(col => `<td>${row[col] ?? ""}</td>`).join("")}</tr>`;
    }).join("");

    // Construct the complete HTML table as a string
    return `
        <table data-user="khushibaurasi12345@gmail.com">
            <thead><tr>${headerRow}</tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}
