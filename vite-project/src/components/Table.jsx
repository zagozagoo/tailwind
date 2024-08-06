function Table() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="py-2 px-4 border-b">Nome</th>
                        <th className="py-2 px-4 border-b">Idade</th>
                        <th className="py-2 px-4 border-b">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">João</td>
                        <td className="py-2 px-4 border-b">25</td>
                        <td className="py-2 px-4 border-b">joao@example.com</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="py-2 px-4 border-b">Maria</td>
                        <td className="py-2 px-4 border-b">30</td>
                        <td className="py-2 px-4 border-b">maria@example.com</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Pedro</td>
                        <td className="py-2 px-4 border-b">28</td>
                        <td className="py-2 px-4 border-b">pedro@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
